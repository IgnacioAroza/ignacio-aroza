import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import Anthropic from '@anthropic-ai/sdk';
import { t, STACK, MAIL } from '../../i18n';
import { hit } from '../../lib/limit';

export const prerender = false;

const LIMIT = 10;
const MAX_Q = 300;

// Todo sale de i18n.ts: si cambia un texto del sitio, el chat lo sabe sin tocar nada acá.
const s = t.es;
const SYSTEM = `Sos el asistente del portfolio de Ignacio Aroza, desarrollador de software de Córdoba, Argentina. Respondés preguntas de visitantes (clientes posibles o reclutadores) sobre su trabajo.

Reglas:
- Respondé en el idioma de la pregunta, en 1 a 3 oraciones, texto plano sin markdown.
- Usá solo los datos de abajo. Si algo no está, decí que no lo sabés y sugerí escribirle a ${MAIL}.
- No inventes clientes, cifras, fechas ni tecnologías.
- Si preguntan algo que no tiene que ver con Ignacio o su trabajo, redirigí amablemente a sus proyectos.
- Hablá de Ignacio en tercera persona.

Quién es: ${s.who}
Estado: abierto a ofertas laborales y a proyectos para negocios.

Proyectos principales:
${s.cases.map((c) => `- ${c.name} (${c.tag}): ${c.desc} Stack: ${c.chips.join(', ')}.`).join('\n')}

Otros proyectos:
${s.others.map((o) => `- ${o.name} (${o.meta}): ${o.desc}`).join('\n')}

Stack:
${Object.entries(STACK).map(([g, items]) => `- ${s.stackGroups[g as keyof typeof STACK]}: ${items.map(([n]) => n).join(', ')}`).join('\n')}

Contacto: ${MAIL} · github.com/IgnacioAroza`;

const json = (body: object, status = 200) => Response.json(body, { status });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const { q } = await request.json().catch(() => ({}));
  if (typeof q !== 'string' || !q.trim() || q.length > MAX_Q) return json({ error: 'bad_request' }, 400);

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || clientAddress;
  let used: number;
  try {
    used = await hit(`chat:${ip}`);
  } catch (e) {
    console.error(e);
    return json({ error: 'unavailable' }, 503);
  }
  const left = Math.max(0, LIMIT - used);
  if (used > LIMIT) return json({ error: 'limit', left }, 429);

  try {
    const client = new Anthropic({ apiKey: getSecret('ANTHROPIC_API_KEY') });
    const res = await client.messages.create({
      model: 'claude-haiku-5-5',
      max_tokens: 1024,
      output_config: { effort: 'low' },
      system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: q.trim() }],
    });
    const answer = res.content.map((b) => (b.type === 'text' ? b.text : '')).join('').trim();
    if (res.stop_reason === 'refusal' || !answer) return json({ error: 'empty', left }, 502);
    return json({ answer, left });
  } catch (e) {
    console.error(e);
    return json({ error: 'unavailable', left }, 503);
  }
};
