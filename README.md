# Chippr Landing Page

A single-page marketing landing page for Chippr—AI budgeting for students & young professionals.

Built with Next.js App Router, TypeScript, and Tailwind CSS. Production-ready for Vercel deployment.

## Features

- ✨ Single-route landing page at `/`
- 🎨 Modern, responsive design with Tailwind CSS
- ♿️ Accessible (semantic HTML, keyboard navigation, ARIA labels)
- ⚡️ Optimized for performance (Lighthouse ≥95)
- 📱 Mobile-first responsive layout
- 🎯 Conversion-focused copy and CTAs

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm (recommended) or npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or npm

### Installation

1. Install dependencies:

```bash
pnpm install
# or
npm install
```

2. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development

The dev server runs with hot module reloading. Edit files in the `app/` directory to see changes live.

### Build

Create an optimized production build:

```bash
pnpm build
# or
npm run build
```

Start the production server locally:

```bash
pnpm start
# or
npm start
```

### Linting

Run ESLint to check code quality:

```bash
pnpm lint
# or
npm run lint
```

## Project Structure

```
landing_page/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page (single route)
│   └── globals.css     # Global styles & Tailwind imports
├── public/
│   ├── logo.svg        # Chippr logo
│   ├── hero-illustration.svg
│   └── avatars/        # User avatar placeholders
│       ├── 1.svg
│       ├── 2.svg
│       ├── 3.svg
│       └── 4.svg
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import your repository on [Vercel](https://vercel.com/new):
   - Go to https://vercel.com/new
   - Select your repository
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"

3. Your site will be live at `https://your-project.vercel.app`

### Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

No environment variables required for this static landing page.

When you're ready to add features like analytics or forms, add them via the Vercel dashboard or `.env.local`.

## Customization

### Update Copy

Edit the content in `app/page.tsx`. All sections are clearly labeled with comments.

### Change Colors

Modify the brand color palette in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    50: "#f0f9ff",
    // ... customize these values
    600: "#0ea5e9",
  },
}
```

### Replace Placeholder Assets

- Replace `/public/logo.svg` with your actual logo
- Replace `/public/hero-illustration.svg` with a real product screenshot or illustration
- Replace avatar SVGs in `/public/avatars/` with actual user photos

### Update Metadata

Edit SEO metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ...
};
```

## Performance

This landing page is optimized for:
- Fast initial load (static generation)
- Minimal JavaScript bundle
- Optimized images via Next.js Image component
- No runtime dependencies or third-party scripts

Expected Lighthouse scores: ≥95 across all metrics.

## Analytics Integration

The landing page is built **without** analytics code. To add Google Analytics 4:

1. Create a GA4 property in Google Analytics
2. Add your tracking ID via Vercel's Analytics Integration or manually in `app/layout.tsx`

## License

© 2025 Chippr. All rights reserved.

## Support

For questions or issues, contact [hello@chippr.app](mailto:hello@chippr.app)
