# Digitálna autoškola — Sparx 2026

Informačný web projektu Digitálna autoškola. Bezplatné workshopy o bezpečnosti na internete pre seniorov v Petržalke, Bratislava.

## Lokálne spustenie

```bash
npm install
npm run dev
```

Otvor http://localhost:3457

## Premenné prostredia

Vytvor súbor `.env.local`:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Supabase tabuľka

Vytvor tabuľku `workshop_interest` v Supabase SQL editore:

```sql
CREATE TABLE workshop_interest (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE workshop_interest ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service role all" ON workshop_interest USING (true);
```

## Deploy na Vercel

```bash
npx vercel --prod
```

Nastav environment variables v Vercel dashboarde: `SUPABASE_URL` a `SUPABASE_SERVICE_ROLE_KEY`.

## Fotky z workshopov

Ulož fotky do `public/fotky/` ako `foto-1.jpg`, `foto-2.jpg`, atď.
