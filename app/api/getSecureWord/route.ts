import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/lib/store';

export async function POST(request: NextRequest) {
  const { username } = await request.json();
  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  const timestamp = Date.now();
  const secureWord = `${username}-${timestamp}`;
  store.set(username, { secureWord, issuedAt: timestamp });

  return NextResponse.json({ secureWord });
}
