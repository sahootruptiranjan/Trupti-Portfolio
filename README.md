# Trupti Ranjan Sahoo — Modern Data Analyst Portfolio

A modern, production-ready, highly responsive personal portfolio website engineered from scratch for **Trupti Ranjan Sahoo**, an aspiring Data Analyst and MCA student. Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**, featuring a clean 2026 SaaS/data-intelligence aesthetic, persistent dark/light theme toggle, interactive process architecture, and strict factual fidelity to verified resume data.

---

## 🌟 Key Features

- **2026 SaaS & Analytics Aesthetic**: Deep slate/charcoal dark mode default with electric cyan accents (`#00D9C0`), high WCAG AA contrast, and subtle chart/grid background motifs.
- **Single Source of Truth (`src/data/profile.ts`)**: All personal information, credentials, education, skills, and projects are centralized in a single typed TypeScript data file. Zero hardcoding across components.
- **Zero Fabricated Metrics**: Adheres 100% strictly to real resume facts.
- **Flagship Project Treatment**: **Zomato Restaurant Data Analysis** is showcased as the primary flagship project with a structured 4-step analytical pipeline and abstract data visualization mockup.
- **Secondary Healthcare Tech Project**: **AyurSutra** Panchakarma Patient Management system displayed with an authentic "Completed" status badge and milestone tracking architecture.
- **Authentic Headshot**: Integrates Trupti's original professional headshot without any artificial regeneration, stylization, or facial distortion.
- **Persistent Theme Toggle**: Seamless switching between Dark and Light mode, persisting preferences via `localStorage`.
- **Reading Progress Bar**: Dynamic scroll indicator at the top of the viewport.
- **Fully Responsive & Accessible**: Mobile-first responsive drawer menu, touch-friendly tap targets (>44px), semantic HTML5 tags, full keyboard navigation, and visible focus rings.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Fonts**: Plus Jakarta Sans, Inter, JetBrains Mono

---

## 📁 Project Structure

```
Trupti-Portfolio/
├── public/
│   ├── docs/
│   │   └── Trupti_Ranjan_Sahoo_Resume.pdf  # Verified resume PDF (downloadable)
│   ├── images/
│   │   └── profile.jpg                    # Authentic professional headshot
│   ├── favicon.svg                        # Monogram SVG favicon ("TRS")
│   ├── robots.txt                         # Search crawler rules
│   └── sitemap.xml                        # SEO XML sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                     # Sticky nav with theme switch, scroll progress & mobile drawer
│   │   ├── Hero.tsx                       # Headline, rotating role typewriter, CTAs & credibility micro-cards
│   │   ├── About.tsx                      # Authentic analytical story, quick-facts & workflow snapshot
│   │   ├── SkillsSection.tsx              # 8 resume skill domains with chips, filter tabs & soft skills styling
│   │   ├── ProjectsSection.tsx            # Flagship Zomato card + Completed AyurSutra card
│   │   ├── EducationTimeline.tsx          # Vertical data-line timeline for MCA (Sem 1: 8.55) & BCA (7.96)
│   │   ├── Certifications.tsx             # 3 verified credential cards (FITT Delhi, Bug Buster, be10x)
│   │   ├── ContactSection.tsx             # Direct channels (Email, Tel, LinkedIn, GitHub) + interactive form
│   │   └── Footer.tsx                     # Dynamic copyright year, quick links & back-to-top button
│   ├── data/
│   │   └── profile.ts                     # CENTRALIZED DATA STORE (Source of truth)
│   ├── hooks/
│   │   ├── useTheme.ts                    # Dark/Light theme state with localStorage persistence
│   │   └── useScrollSpy.ts                # Active viewport section tracking for navigation
│   ├── types/
│   │   └── index.ts                       # TypeScript interfaces for data models
│   ├── App.tsx                            # Root application component
│   ├── main.tsx                           # React DOM mount point
│   └── index.css                          # Tailwind directives & custom font/grid styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the live site with Instant Hot Module Replacement (HMR).

### 4. Build for Production
```bash
npm run build
```
This produces an optimized, minified static build in the `dist/` directory ready for deployment.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Update Content

All resume and personal content is centralized in **`src/data/profile.ts`**. You do **not** need to touch any component code to update your information!

- **Update Contact Info / Social Links**: Edit `personalInfo` in `src/data/profile.ts`.
- **Add or Update Skills**: Modify the `skillCategories` array in `src/data/profile.ts`.
- **Add or Update Projects**: Add an entry to the `projectsList` array in `src/data/profile.ts`.
- **Update Education / CGPA**: Edit `educationList` in `src/data/profile.ts`.
- **Add Certifications**: Update `certificationsList` in `src/data/profile.ts`.

### Replacing the Resume PDF
Place your updated resume file in:
`public/docs/Trupti_Ranjan_Sahoo_Resume.pdf`

### Updating the Headshot
Place your updated photo in:
`public/images/profile.jpg`

---

## 🌐 Deployment Guide

This project is configured with relative base asset paths (`base: './'`), making it 100% portable for any static hosting platform.

### Deploy to Vercel
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Click **Deploy**.

### Deploy to Netlify
1. Go to [Netlify](https://netlify.com) and click **Add new site** > **Import an existing project**.
2. Select your repository.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/Trupti-Portfolio/'` (or your repository name).
2. Run:
```bash
npm run build
```
3. Deploy the `dist/` folder using `gh-pages` or configure GitHub Actions to deploy from the `main` branch.

---

## 📄 License
Created specifically for **Trupti Ranjan Sahoo**. All rights reserved.
