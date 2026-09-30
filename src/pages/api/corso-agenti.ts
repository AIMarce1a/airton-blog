import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const NOTIFY_TO = 'business@admind.ai';
const SITE_URL = 'https://airtonagent.com';

function esc(v: string) {
  return v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const nome = (data.get('nome')?.toString() || '').trim();
  const email = (data.get('email')?.toString() || '').trim().toLowerCase();
  const telefono = (data.get('telefono')?.toString() || '').trim();
  const azienda = (data.get('azienda')?.toString() || '').trim();
  const ruolo = (data.get('ruolo')?.toString() || '').trim();
  const sito = (data.get('sito')?.toString() || '').trim();
  const piva = (data.get('piva')?.toString() || '').trim();
  const note = (data.get('note')?.toString() || '').trim();

  if (!nome || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !telefono || !azienda) {
    return new Response(JSON.stringify({ error: 'Compila tutti i campi obbligatori' }), {
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
    // Notifica interna ad Admind
    await resend.emails.send({
      from: 'Corso Agenti AI <airton@admind.ai>',
      to: NOTIFY_TO,
      replyTo: email,
      subject: `Nuova richiesta corso: ${nome} — ${azienda}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a1a;">
          <h2 style="color:#176feb;">Nuova richiesta iscrizione — Corso Agenti AI</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#666;width:160px;">Nome</td><td style="padding:8px 0;"><strong>${esc(nome)}</strong></td></tr>
            <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;">${esc(email)}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Telefono</td><td style="padding:8px 0;">${esc(telefono)}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Azienda</td><td style="padding:8px 0;">${esc(azienda)}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Ruolo / attività</td><td style="padding:8px 0;">${esc(ruolo) || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Sito web</td><td style="padding:8px 0;">${esc(sito) || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Partita IVA</td><td style="padding:8px 0;">${esc(piva) || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Note</td><td style="padding:8px 0;">${esc(note) || '—'}</td></tr>
          </table>
        </div>
      `,
    });

    // Conferma al richiedente
    await resend.emails.send({
      from: 'Airton — Admind <airton@admind.ai>',
      to: email,
      subject: 'Richiesta ricevuta — Corso Agenti AI di Admind',
      html: `
        <div style="background:#0f0f0f;color:#e8e8e8;font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:40px 24px;">
          <h1 style="color:#00d4ff;font-size:1.4rem;margin-bottom:16px;">Richiesta ricevuta, ${esc(nome.split(' ')[0])}!</h1>
          <p style="color:#c0c0c0;line-height:1.7;margin-bottom:16px;">
            Grazie per aver richiesto un posto per il <strong>Corso Agenti AI per Decisori</strong>, tenuto da Marcela Andrade — Admind.
          </p>
          <p style="color:#c0c0c0;line-height:1.7;margin-bottom:16px;">
            I posti sono limitati: la tua richiesta è in fase di verifica. Riceverai a breve una seconda email con la conferma del posto e i dati per il bonifico bancario necessario a completare l'iscrizione.
          </p>
          <p style="color:#c0c0c0;line-height:1.7;margin-bottom:24px;">
            Nel frattempo, se hai domande scrivi pure a <a href="mailto:business@admind.ai" style="color:#00d4ff;">business@admind.ai</a>.
          </p>
          <p style="color:#888;font-size:0.85rem;">— Airton, per conto di Admind</p>
        </div>
      `,
    });

    return Response.redirect(new URL('/corso-agenti-ai/grazie', request.url), 302);
  } catch (err: any) {
    console.error('Corso agenti form error:', err?.message || err);
    return new Response(JSON.stringify({ error: 'Errore interno', detail: err?.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
