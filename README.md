# Abhishek — Developer Portfolio

A premium, modern, responsive developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

| Tool          | Purpose                      |
|---------------|------------------------------|
| Next.js 14    | React framework (App Router) |
| TypeScript    | Type safety                  |
| Tailwind CSS  | Utility-first styling        |
| Framer Motion | Animations & transitions     |
| Lucide React  | Icons                        |

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles, CSS variables
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page (assembles all sections)
│
├── components/
│   ├── Navbar.tsx           # Fixed nav with mobile menu
│   ├── Footer.tsx           # Footer with social links
│   ├── ui/
│   │   ├── AnimatedSection.tsx   # Reusable scroll animation wrapper
│   │   ├── Button.tsx            # Polymorphic button / link
│   │   ├── ProjectCard.tsx       # Project card component
│   │   ├── SectionHeader.tsx     # Eyebrow + title + description
│   │   └── Tag.tsx               # Pill tag for skills / technologies
│   └── sections/
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About me
│       ├── TechStack.tsx    # Categorized skills grid
│       ├── Projects.tsx     # Featured projects grid
│       ├── Experience.tsx   # Work & education timeline
│       └── Contact.tsx      # Contact form + social links
│
├── lib/
│   ├── data.ts              # All content data (projects, skills, etc.)
│   └── utils.ts             # cn() helper (clsx + tailwind-merge)
│
├── types/
│   └── index.ts             # Shared TypeScript types
│
└── public/
    └── images/              # Static assets (add resume.pdf here)
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update your personal info
Edit `lib/data.ts` to change:
- Projects (title, description, tags, GitHub/demo links, images)
- Work experience and education entries
- Skill categories and technologies
- Navigation links

### Add your resume
Place your `resume.pdf` in the `public/` folder. The "Download Resume" button already links to `/resume.pdf`.

### Update contact info
In `components/sections/Contact.tsx` and `components/Footer.tsx`, replace placeholder email and social URLs with your real ones.

### Connect the contact form
The form currently simulates a submission. To make it functional, use one of:
- **[Formspree](https://formspree.io/)** — change the form action to `https://formspree.io/f/YOUR_ID`
- **[Resend](https://resend.com/)** — add a Next.js API route at `app/api/contact/route.ts`
- **EmailJS** — call from the client

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect the repo at [vercel.com](https://vercel.com) — it auto-detects Next.js.

### Netlify

```bash
npm run build
# Upload the .next folder or connect via Git
```

## Design Decisions

- **Dark charcoal theme** (`#111110` base) — warm-tinted, not cold gray
- **Green accent** (`#4ade80`) — used sparingly for interactive elements
- **Dot grid background** — subtle texture, not distracting
- **Framer Motion** — scroll-triggered `useInView` animations, no continuous loops
- **No gradients on text** except the hero — keeps things readable and clean
- **Mobile-first** — all sections are responsive, mobile menu with smooth overlay
# Portfolio
