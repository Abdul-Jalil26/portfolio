This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Environment variables

Create a local env file and set your chat provider credentials:

```bash
cp .env.example .env.local
```

Required variables:

- `CHAT_PROVIDER` (`xai` or `openrouter`)

For xAI (Grok):

- `XAI_API_KEY`
- `XAI_MODEL` (optional, defaults to `grok-4.20-reasoning`)
- `XAI_SITE_URL` (optional)
- `XAI_SITE_NAME` (optional)

For OpenRouter (optional fallback):

- `OPENROUTER_API_KEY`
- `OPENROUTER_MODEL` (optional, defaults to `openai/gpt-5.2`)
- `OPENROUTER_SITE_URL` (optional)
- `OPENROUTER_SITE_NAME` (optional)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

