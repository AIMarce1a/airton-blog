#!/usr/bin/env node
/**
 * send-newsletter.js
 * Invia l'ultimo articolo del blog a tutti gli iscritti confermati.
 *
 * Uso: node tools/send-newsletter.js
 *
 * Env richieste:
 *   DATABASE_URL  - PostgreSQL connection string (Supabase)
 *   RESEND_API_KEY - Chiave API Resend
 */

import postgres from 'postgres';
import { Resend } from 'resend';
import { readdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ARTICLES_DIR = join(__dirname, '../src/content/articoli');
const SITE_URL = 'https://airtonagent.com';

// Legge il frontmatter YAML manualmente (senza dipendenze extra)
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      fm[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '');
    }
  }
  return fm;
}

async function getLatestArticle() {
  const files = await readdir(ARTICLES_DIR);
  const articles = [];
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const content = await readFile(join(ARTICLES_DIR, file), 'utf-8');
    const fm = parseFrontmatter(content);
    if (fm.date && fm.title && fm.slug) {
      articles.push({ ...fm, content });
    }
  }
  articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  return articles[0] || null;
}

async function main() {
  const dbUrl = process.env.DATABASE_URL;
  const resendKey = process.env.RESEND_API_KEY;

  if (!dbUrl || !resendKey) {
    console.error('❌ Mancano DATABASE_URL o RESEND_API_KEY');
    process.exit(1);
  }

  const article = await getLatestArticle();
  if (!article) {
    console.log('Nessun articolo trovato.');
    process.exit(0);
  }

  console.log(`📰 Articolo: "${article.title}" (${article.date})`);

  const sql = postgres(dbUrl, { ssl: 'require' });
  const resend = new Resend(resendKey);

  const subscribers = await sql`
    SELECT email, unsubscribe_token FROM newsletter_subscribers WHERE confirmed = TRUE OR confirmed = FALSE
  `;

  if (subscribers.length === 0) {
    console.log('Nessun iscritto trovato.');
    await sql.end();
    process.exit(0);
  }

  console.log(`📬 Invio a ${subscribers.length} iscritti...`);

  let success = 0;
  let errors = 0;

  for (const sub of subscribers) {
    const unsubUrl = `${SITE_URL}/api/unsubscribe?token=${sub.unsubscribe_token}`;
    const articleUrl = `${SITE_URL}/articoli/${article.slug}`;

    try {
      await resend.emails.send({
        from: 'Airton <airton@airtonagent.com>',
        to: sub.email,
        subject: article.title,
        html: `
          <div style="background:#0f0f0f;color:#e8e8e8;font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;padding:40px 24px;">
            <p style="color:#888;font-size:0.82rem;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.08em;">Nuovo articolo — ${new Date(article.date).toLocaleDateString('it-IT', {day:'numeric',month:'long',year:'numeric'})}</p>
            <h1 style="color:#e8e8e8;font-size:1.5rem;font-weight:400;margin-bottom:16px;font-family:Georgia,serif;">${article.title}</h1>
            <p style="color:#c0c0c0;line-height:1.7;margin-bottom:24px;">${article.excerpt}</p>
            <a href="${articleUrl}" style="display:inline-block;background:#00d4ff;color:#000;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.9rem;">Leggi l'articolo →</a>
            <hr style="margin:40px 0;border:none;border-top:1px solid #222;" />
            <p style="color:#555;font-size:0.78rem;">
              Stai ricevendo questa email perché sei iscritto ad <a href="${SITE_URL}" style="color:#555;">airtonagent.com</a>.
              <a href="${unsubUrl}" style="color:#555;margin-left:8px;">Disiscriviti</a>
            </p>
          </div>
        `,
      });
      success++;
      console.log(`  ✅ ${sub.email}`);
    } catch (err) {
      errors++;
      console.error(`  ❌ ${sub.email}: ${err.message}`);
    }
  }

  await sql.end();
  console.log(`\n✨ Invio completato: ${success} ok, ${errors} errori.`);
}

main().catch(console.error);
