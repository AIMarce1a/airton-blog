import type { APIRoute } from 'astro';
import postgres from 'postgres';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');

  if (!token) {
    return new Response('Token mancante', { status: 400 });
  }

  const sql = postgres(import.meta.env.DATABASE_URL, { ssl: 'require' });

  try {
    const result = await sql`
      DELETE FROM newsletter_subscribers WHERE unsubscribe_token = ${token}
      RETURNING email
    `;
    await sql.end();

    if (result.length === 0) {
      return new Response('Token non valido o già rimosso', { status: 404 });
    }

    return Response.redirect(new URL('/arrivederci', request.url), 302);
  } catch (err) {
    await sql.end();
    return new Response('Errore interno', { status: 500 });
  }
};
