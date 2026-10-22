import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import { MAIL } from '../../i18n';
import { hit } from '../../lib/limit';

export const prerender = false;

const LIMIT = 3;
const json = (body: object, status = 200) => Response.json(body, { status });
const str = (v: unknown, max: number) => (typeof v === 'string' && v.trim() && v.length <= max ? v.trim() : null);

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const d = await request.json().catch(() => ({}));
  // `site` es un honeypot: los bots lo completan, las personas no lo ven. Se responde ok sin enviar.
  if (d.site) return json({ ok: true });

  const name = str(d.name, 100), email = str(d.email, 200), reason = str(d.reason, 100), msg = str(d.msg, 5000);
  if (!name || !email || !reason || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'bad_request' }, 400);

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || clientAddress;
  try {
    if ((await hit(`contact:${ip}`)) > LIMIT) return json({ error: 'limit' }, 429);

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${getSecret('RESEND_API_KEY')}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: getSecret('RESEND_FROM') || 'Portfolio <onboarding@resend.dev>',
        to: MAIL,
        reply_to: email,
        subject: `Portfolio: ${reason} (${name})`,
        text: `${msg}\n\n— ${name} <${email}>`,
      }),
    });
    if (!r.ok) throw new Error(`resend ${r.status} ${await r.text()}`);
    return json({ ok: true });
  } catch (e) {
    console.error(e);
    return json({ error: 'unavailable' }, 503);
  }
};
