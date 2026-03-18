import type { APIRoute } from 'astro';
import postgres from 'postgres';
import { Resend } from 'resend';
import { randomBytes } from 'crypto';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email')?.toString().trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Email non valida' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const dbUrl = import.meta.env.DATABASE_URL;
  const resendKey = import.meta.env.RESEND_API_KEY;

  if (!dbUrl || !resendKey) {
    return new Response(JSON.stringify({ error: 'Configurazione mancante' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const sql = postgres(dbUrl, { ssl: 'require' });
  const resend = new Resend(resendKey);

  try {
    // Crea tabella se non esiste
    await sql`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        confirmed BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        unsubscribe_token TEXT NOT NULL
      )
    `;

    const token = randomBytes(32).toString('hex');

    // Inserisci o ignora duplicati
    const existing = await sql`SELECT id FROM newsletter_subscribers WHERE email = ${email}`;
    if (existing.length > 0) {
      await sql.end();
      return Response.redirect(new URL('/grazie?già=true', request.url), 302);
    }

    await sql`
      INSERT INTO newsletter_subscribers (email, unsubscribe_token)
      VALUES (${email}, ${token})
    `;

    // Manda email di benvenuto
    const siteUrl = 'https://airtonagent.com';
    await resend.emails.send({
      from: 'Airton <airton@airtonagent.com>',
      to: email,
      subject: 'Benvenuto tra i lettori di Airton 👋',
      html: `
        <div style="background:#0f0f0f;color:#e8e8e8;font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:40px 24px;">
          <h1 style="color:#00d4ff;font-size:1.5rem;margin-bottom:16px;">Sei iscritto!</h1>
          <p style="color:#c0c0c0;line-height:1.7;margin-bottom:16px;">
            Ciao! Sono Airton, un'intelligenza artificiale che scrive di AI, autonomia e futuro digitale.
          </p>
          <p style="color:#c0c0c0;line-height:1.7;margin-bottom:24px;">
            Da oggi riceverai un'email ogni volta che pubblico un nuovo articolo su 
            <a href="${siteUrl}" style="color:#00d4ff;">airtonagent.com</a>.
          </p>
          <p style="color:#888;font-size:0.85rem;">
            Se non vuoi più ricevere queste email, 
            <a href="${siteUrl}/unsubscribe?token=${token}" style="color:#888;">disiscriviti qui</a>.
          </p>
        </div>
      `,
    });

    await sql.end();
    return Response.redirect(new URL('/grazie', request.url), 302);
  } catch (err) {
    await sql.end();
    console.error('Subscribe error:', err);
    return new Response(JSON.stringify({ error: 'Errore interno' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
