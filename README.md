# Ankit Mishra – Portfolio (Next.js 16 + Tailwind CSS v4)

A modern, recruiter-friendly portfolio built with Next.js 16 (App Router), Tailwind CSS v4, and Framer Motion.

## Tech
- Next.js 16 (App Router, `src/`)
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- Framer Motion 11

## Getting Started

1. Install dependencies
```bash
npm install
```

2. Run the dev server
```bash
npm run dev
```

3. Open http://localhost:3000

### Add your assets
- Place your resume at `public/Ankit_updated_Resume.pdf`.
- Place your profile photo at `public/passport_size_photo.jpg`.

### Configure EmailJS (contact form)
1. Duplicate `.env.example` into `.env.local` (or create `.env.local`) and set:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
2. In EmailJS, create a template whose fields match the contact form payload:
   - `from_name` → Name input
   - `reply_to` → Email input
   - `message` → Message textarea
3. Optional: add extra template params in `Contact.jsx` and map them inside EmailJS if you need more metadata.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel and set framework = Next.js.
3. Build command: `next build` (default)
4. Output: `.next` (default)

## Project Structure
```
next-portfolio/
  next.config.mjs
  postcss.config.js
  package.json
  jsconfig.json
  public/
    og-image.svg
  src/
    app/
      layout.jsx
      page.jsx
      globals.css
    components/
      Navbar.jsx
      ThemeProvider.jsx
      ThemeToggle.jsx
      Section.jsx
      Hero.jsx
      About.jsx
      Skills.jsx
      Experience.jsx
      Projects.jsx
      Certifications.jsx
      Contact.jsx
      Footer.jsx
    lib/
      seo.js
```

## Notes
- Dark/light mode is persisted via `localStorage` using `data-theme` on `<html>`.
- Animations use Framer Motion with reveal on scroll.
- Images use Next Image. If assets are missing, the page still works.
