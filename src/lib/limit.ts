import { getSecret } from 'astro:env/server';

// Upstash REST: INCR + EXPIRE en un pipeline. NX deja el TTL del primer pedido del día.
export async function hit(key: string) {
  const url = getSecret('UPSTASH_REDIS_REST_URL'), token = getSecret('UPSTASH_REDIS_REST_TOKEN');
  const r = await fetch(`${url}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify([['INCR', key], ['EXPIRE', key, '86400', 'NX']]),
  });
  if (!r.ok) throw new Error(`upstash ${r.status}`);
  const [{ result }] = await r.json();
  return result as number;
}
