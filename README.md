# ✦ Quotes Generator

> *Words that move. Delivered in silence.*

A minimal, cinematic quotes experience built for the modern web. No clutter. No noise. Just one thought at a time — rendered in dark elegance and served instantly at the edge.

---

## ✦ Live Demo

**[qoutesgenerator.vercel.app](https://qoutesgenerator.vercel.app/)**

---

## ✦ Screenshots

| Default View | Loading State |
|---|---|
| *(add screenshot here)* | *(add screenshot here)* |

---

## ✦ Features

- ⚡ Instant quote delivery via a serverless API route
- 🌑 Full dark-mode aesthetic — zero eye strain, full atmosphere
- 🔄 One-click refresh to cycle through infinite wisdom
- 📱 Fully responsive — looks sharp on every screen
- 🚀 Deployed at the edge on Vercel for sub-second load times
- 🔒 No API keys. No authentication. No friction.

---

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Data Source | [ZenQuotes API](https://zenquotes.io/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## ✦ Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/riyajain1106-bit/qoutesgenerator.git

# 2. Navigate into the project
cd qoutesgenerator/QuotesGenerator

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✦ Environment Variables

This project requires **no API keys** and no environment variables to run.

The quotes are fetched from the public [ZenQuotes API](https://zenquotes.io/) which is free and open — no credentials needed.

If you ever extend the project and need environment variables, create a `.env.local` file at the project root:

```env
# Example — not required for current version
NEXT_PUBLIC_SOME_KEY=your_value_here
```

> `.env.local` is already listed in `.gitignore` — your secrets stay local.

---

## ✦ Project Structure

```
QuotesGenerator/
├── src/
│   └── app/
│       ├── api/
│       │   └── quote/
│       │       └── route.ts      # Serverless API route
│       ├── page.tsx              # Main UI
│       ├── layout.tsx            # Root layout
│       └── globals.css           # Global styles
├── public/                       # Static assets
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## ✦ Deployment

This project is deployed on **Vercel** with zero configuration.

To deploy your own instance:

1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com/)
3. Set the **Root Directory** to `QuotesGenerator`
4. Click **Deploy** — that's it

---

## ✦ Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Run production build locally
npm run lint     # Run ESLint
```

---

## ✦ License

MIT — free to use, remix, and deploy.

---

<p align="center">
  Built with quiet intention by <strong>Riya Jain</strong>
</p>
