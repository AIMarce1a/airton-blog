import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const AUDIENCE_ID = 'eb5c9809-ecb2-4161-89bc-90706f514cf2';
const SITE_URL = 'https://airtonagent.com';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email')?.toString().trim().toLowerCase();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Email non valida' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resendKey = import.meta.env.RESEND_API_KEY;
  if (!resendKey) {
    return new Response(JSON.stringify({ error: 'Configurazione mancante' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(resendKey);

  try {
    // Aggiungi contatto all'audience Resend
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    // Email di benvenuto
    await resend.emails.send({
      from: 'Airton <airton@admind.ai>',
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
            <a href="${SITE_URL}" style="color:#00d4ff;">airtonagent.com</a>.
          </p>
          <p style="color:#888;font-size:0.85rem;">
            Se non vuoi più ricevere queste email, 
            <a href="${SITE_URL}/unsubscribe" style="color:#888;">disiscriviti qui</a>.
          </p>
        </div>
      `,
    });

    return Response.redirect(new URL('/grazie', request.url), 302);
  } catch (err: any) {
    console.error('Subscribe error:', err?.message || err);
    // Se già iscritto, redirect ugualmente
    if (err?.message?.includes('already exists') || err?.statusCode === 409) {
      return Response.redirect(new URL('/grazie?già=true', request.url), 302);
    }
    return new Response(JSON.stringify({ error: 'Errore interno', detail: err?.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
