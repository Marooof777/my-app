// app/api/getSecureWord/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';

type SecureEntry = {
  secureWord: string;
  issuedAt: number;
};

const store = new Map<string, SecureEntry>();

const SECRET = 'my-app-secret-key';

export async function POST(req: Request) {
  const { username } = await req.json();

  if (!username) {
    return NextResponse.json({ error: 'Username required' }, { status: 400 });
  }

  const now = Date.now();
  const entry = store.get(username);

  // ❌ Rate limit: allow only 1 request per 10 seconds
  if (entry && now - entry.issuedAt < 10_000) {
    return NextResponse.json(
      { error: 'Too many requests. Try again after 10 seconds.' },
      { status: 429 }
    );
  }

  // ✅ Generate secure word using HMAC
  const secureWord = crypto
    .createHmac('sha256', SECRET)
    .update(username + now)
    .digest('hex')
    .slice(0, 8); // Shorten for demo

  // 💾 Store in memory
  store.set(username, {
    secureWord,
    issuedAt: now,
  });

  return NextResponse.json({ secureWord, expiresIn: 60 });
}
