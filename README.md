# Chippr Landing Page

A **conversion-focused lead generation landing page** for Chippr—AI budgeting for students & young professionals.

Built with Next.js App Router, TypeScript, and Tailwind CSS. Production-ready for Vercel deployment.

## Features

### Landing Page (Not a Homepage)

This is designed as a **true landing page** with a single goal: **capture email addresses**.

✅ **What Makes This a Landing Page:**
- **Single objective:** Get email signups for waitlist
- **Minimal navigation:** No menu, no distractions
- **Focused content:** Only essential information shown
- **Clear CTA:** Signup form prominently displayed
- **Conversion-optimized:** Video + form side-by-side

❌ **What This Is NOT:**
- Not a homepage with multiple goals
- Not a website with navigation menus
- Not an information portal with many sections
- Not a product showcase with feature details

### Technical Features

- ✨ Single-route landing page at `/`
- 📧 Built-in Name & Email capture form for lead generation
- 🎬 Before/After video section (ready for YouTube/Vimeo embed)
- 🎯 Clear target audience messaging (students & young professionals)
- 🎨 Modern, responsive design with Tailwind CSS
- ♿️ Accessible (semantic HTML, keyboard navigation, ARIA labels)
- ⚡️ Optimized for performance (Lighthouse ≥95)
- 📱 Mobile-first responsive layout
- 📊 Analytics-ready with conversion tracking hooks

### Page Structure

The page follows best practices for lead generation:

1. **Minimal Header** - Logo only, no navigation
2. **Hero Section** - Value proposition + target audience badge
3. **Two-Column Layout**:
   - **Left:** Before/After video (shows the problem/solution)
   - **Right:** Signup form (sticky on desktop for visibility)
4. **Minimal Footer** - Brand identity only

**Total sections: 3** (Header, Main, Footer) - No distractions!

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

## Lead Generation Setup

This landing page is designed for **lead generation** with built-in email capture and video demonstration. Follow these steps to complete the setup:

### 1. Embed Your Before/After Video

The landing page includes a placeholder video section at `#video`. To embed your actual video:

**Option A: YouTube Embed**

1. Upload your Before/After video to YouTube
2. Get the video ID from the URL (e.g., `dQw4w9WgXcQ` from `https://youtube.com/watch?v=dQw4w9WgXcQ`)
3. Open `app/page.tsx` and find the video section (around line 208)
4. Uncomment the iframe code and replace `YOUR_VIDEO_ID`:

```tsx
<iframe
  className="absolute inset-0 w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Chippr Before/After Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

**Option B: Vimeo Embed**

```tsx
<iframe
  className="absolute inset-0 w-full h-full"
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
  title="Chippr Before/After Video"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
/>
```

**Option C: Self-Hosted Video**

```tsx
<video
  className="absolute inset-0 w-full h-full object-cover"
  controls
  poster="/video-thumbnail.jpg"
>
  <source src="/videos/before-after.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### 2. Connect Form Submissions to Your Backend

The waitlist form is currently simulated. To capture real leads, you need to connect it to a backend.

**Option A: API Route (Recommended for Next.js)**

1. Create `app/api/waitlist/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();
    
    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email required' },
        { status: 400 }
      );
    }
    
    // Option 1: Save to database (e.g., Supabase, MongoDB)
    // await db.collection('waitlist').insertOne({ name, email, createdAt: new Date() });
    
    // Option 2: Send to email service (e.g., SendGrid, Mailchimp)
    // await sendToMailchimp({ name, email });
    
    // Option 3: Send to Google Sheets (simple option)
    // await appendToSheet({ name, email });
    
    // For now, just log it
    console.log('New signup:', { name, email });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    );
  }
}
```

2. Update the form handler in `app/page.tsx` (around line 18):

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) throw new Error('Signup failed');
    
    // Track analytics event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'waitlist_signup'
      });
    }
    
    setSubmitStatus("success");
    setFormData({ name: "", email: "" });
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

**Option B: Third-Party Form Services**

Use services like Formspree, Tally, or TypeForm:

1. Create a form on the service
2. Get the form endpoint/embed code
3. Replace the form in `app/page.tsx` with their code

**Option C: Google Sheets Integration (Simple)**

1. Use [Google Apps Script](https://developers.google.com/apps-script) to create a web app
2. Deploy it as a web app with public access
3. Send POST requests from your form to the script URL

Example Google Apps Script:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Waitlist');
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.email]);
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 3. Set Up Analytics Tracking

Track page visits, video views, and form conversions.

**Google Analytics 4 Setup:**

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add the tracking script to `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Track Custom Events:**

The form submission already includes event tracking. Add more events as needed:

```typescript
// Track video play
const handleVideoPlay = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'video_play', {
      event_category: 'engagement',
      event_label: 'before_after_video'
    });
  }
};

// Track CTA clicks
const handleCTAClick = (location: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: location
    });
  }
};
```

**Key Metrics to Track:**

- **Page visits:** Automatic with GA4
- **Video views:** Add event listener on video play
- **CTA click rate:** Track button clicks to signup form
- **Form submissions:** Already tracked with `generate_lead` event
- **Traffic source:** Automatic with GA4 (direct, social, referral)
- **Signup conversion rate:** Calculate from (form submissions / page visits)

**Vercel Analytics (Alternative):**

If you're deploying to Vercel, use their built-in analytics:

1. Enable Vercel Analytics in your project dashboard
2. Install the package: `pnpm add @vercel/analytics`
3. Add to your layout:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Validation & Testing

### Test Your Lead Generation Flow

1. **Test the form:** Submit test data and verify it reaches your backend
2. **Check email validation:** Try invalid emails to ensure validation works
3. **Test success state:** Confirm the success message displays after submission
4. **Mobile testing:** Test the entire flow on mobile devices
5. **Analytics verification:** Use GA4 DebugView to confirm events are firing

### Performance Checklist

- [ ] Run Lighthouse audit (aim for ≥90 on all metrics)
- [ ] Test on slow 3G connection
- [ ] Verify video loads without blocking page render
- [ ] Check form submission response time
- [ ] Test with JavaScript disabled (graceful degradation)

### A/B Testing Recommendations

Once your landing page is live, consider testing:

- Different headline variations
- CTA button copy ("Join Waitlist" vs "Get Early Access")
- Video placement (before vs after features section)
- Form field order
- Trust indicator messaging

## Analytics Integration

The landing page includes analytics tracking hooks. Implement the setup instructions in the "Lead Generation Setup" section above.

## License

© 2025 Chippr. All rights reserved.

## Support

For questions or issues, contact [hello@chippr.app](mailto:hello@chippr.app)
