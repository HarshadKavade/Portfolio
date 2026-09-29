# Harshad Kavade – Developer Portfolio

A modern, premium, highly interactive personal portfolio website for **Harshad Kavade**, Computer Engineering student at SCTR's Pune Institute of Computer Technology (PICT) and Full-Stack Developer specializing in MERN Stack, Data Structures & Algorithms, and Generative AI.

---

## 🚀 Live Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom Dark Glassmorphic Theme)
- **Animations**: [Framer Motion](https://www.framer-motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactive FX**: Canvas Confetti, Viewport Intersection Counters, Animated Floating Terminal
- **SEO & Meta**: Complete Open Graph, Twitter Card, and Google Typography integration

---

## 📂 Project Architecture

```text
portfolio/
├── public/
│   ├── favicon.svg                  # Brand vector favicon (HK logo)
│   └── Harshad_Kavade_Resume.pdf    # Official resume PDF (downloadable)
├── src/
│   ├── assets/                      # Static brand assets
│   ├── components/
│   │   ├── BackgroundDecorations.jsx # Ambient gradient blobs & glowing grid pattern
│   │   ├── Footer.jsx               # Final CTA, copyright, socials & back-to-top
│   │   ├── HeroVisual.jsx           # Floating interactive terminal / code editor
│   │   ├── Navbar.jsx               # Sticky glassmorphic navbar with scroll progress
│   │   ├── ProjectCard.jsx          # Interactive cards (flagship Sahyatri highlight)
│   │   ├── ProjectModal.jsx         # Deep technical architecture modal
│   │   ├── StatCounter.jsx          # Viewport animated number counter
│   │   └── Toast.jsx                # Toast alerts for clipboard & form feedback
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for all info & profiles
│   ├── sections/
│   │   ├── AboutSection.jsx         # Bio, core pillars & animated statistics
│   │   ├── AchievementsSection.jsx  # LeetCode, CodeChef & CET scorecards
│   │   ├── CodingSection.jsx        # LeetCode & CodeChef problem solving profiles
│   │   ├── ContactSection.jsx       # Validated contact form & email copy utility
│   │   ├── EducationSection.jsx     # PICT Pune & academic credentials
│   │   ├── ExperienceSection.jsx    # Software Development Internship timeline
│   │   ├── HeroSection.jsx          # High-impact hero with availability badge
│   │   └── SkillsSection.jsx        # Filterable skills grid by tech category
│   ├── App.jsx                      # App root assembly
│   ├── index.css                    # Tailwind directives & glass utilities
│   └── main.jsx                     # Vite React entry point
├── index.html                       # SEO metadata & font preconnects
├── package.json                     # Scripts & dependencies
├── tailwind.config.js               # Theme colors, fonts & animations
└── vite.config.js                   # Vite configuration
```

---

## 🛠️ Quick Start & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Updating Content

All personal details, project descriptions, skills, metrics, and URLs are isolated in a single configuration file:
👉 **`src/data/portfolioData.js`**

You can easily update:
- Social URLs (`github`, `linkedin`, `leetcode`, `codechef`)
- Statistics (`CGPA`, `LeetCode rating`, `problems solved`)
- Projects (features, tech stacks, links)
- Skills (add or remove technologies)

---

## 🌐 1-Click Deployment (Vercel / Render / Netlify)

### Deploy to Vercel:
1. Push your repository to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**!
