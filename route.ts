import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Meno a e-mail sú povinné.' }, { status: 400 });
  }

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return NextResponse.json({ error: 'Server nie je nakonfigurovaný.' }, { status: 503 });
  }

  let res: Response;
  try {
    res = await fetch(`${SUPABASE_URL}/rest/v1/workshop_interest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        message: message?.trim() || null,
      }),
    });
  } catch (err) {
    console.error('Supabase network error:', err);
    return NextResponse.json({ error: 'Chyba pri ukladaní. Skúste neskôr.' }, { status: 500 });
  }

  if (!res.ok) {
    const err = await res.text();
    console.error('Supabase error:', err);
    return NextResponse.json({ error: 'Chyba pri ukladaní. Skúste neskôr.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
