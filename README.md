# Rohan Rai — Premium Shopify Portfolio

A luxury dark-themed personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**
- **Geist Font**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Customization

| File | Purpose |
|------|---------|
| `lib/constants.ts` | Site config, projects, services, testimonials |
| `lib/emailjs.ts` | EmailJS integration (audit form) |
| `public/og-image.png` | Open Graph image (1200×630) |

## EmailJS Setup

1. Install: `npm install @emailjs/browser`
2. Configure credentials in `lib/emailjs.ts`
3. Wire up `sendAuditEmail` in `sections/Audit.tsx`

## Project Structure

```
/app          — Next.js app router (layout, page, SEO)
/components   — Reusable UI components
/sections     — Page sections (Hero, About, Projects, etc.)
/lib          — Constants, utilities, animations
/hooks        — Custom React hooks
/styles       — Global CSS
/public       — Static assets
```

## License

Private — All rights reserved.
