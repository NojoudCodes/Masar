# Masar — Logistics & Shipping Landing Page

A concept marketing site for a fictional logistics & shipping company — built as a portfolio project to showcase modern front-end practices with React, TypeScript, and Tailwind CSS.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat&logo=framer&logoColor=0055FF)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)

<!-- Optional: add a real screenshot once deployed -->
<!-- ![Masar preview](./preview.png) -->

## ✨ Overview

Masar — meaning “route” or “path” in Arabic — is a modern Arabic-first landing page concept for a logistics and shipping company.

The design uses a dark, high-contrast visual identity with lime accents to create a sense of speed, reliability, and movement while keeping the interface clean and focused on conversion.

Key design ideas include:

- A strong RTL-first Arabic layout with bold typography and clear visual hierarchy.
- A near-black and lime color palette that gives the brand a modern and distinctive logistics identity.
- Clean, structured sections for introducing the company, its services, and its value proposition.
- A responsive layout designed to work across desktop and mobile screen sizes.
- A focused quote-request form that allows potential customers to submit their company information, email, and preferred shipping method.
- Interactive UI feedback after submitting the form, giving users a clear confirmation that their request has been received.
- A reusable React component structure for sections, buttons, subtitles, and page content.

## 🛠 Tech Stack

- **React** + **TypeScript**
- **Vite** — build tool & dev server
- **Tailwind CSS** — styling
- **React Router** — client-side routing
- **Framer Motion** — animated form-submission feedback
- **React Icons** — iconography

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm / pnpm / yarn

### Installation

```bash
# clone the repo
git clone https://github.com/NojoudCodes/Masar.git
cd Masar

# install dependencies
npm install

# start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
masar/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Network.tsx
│   │   │   ├── WorkProcess.tsx
│   │   │   ├── Testimonial.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Section.tsx
│   │       ├── Button.tsx
│   │       ├── Logo.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── ProcessCard.tsx
│   │       └── Subtitle.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Design Tokens

| Token | Value | Use |
|---|---|---|
| Ink | `#0B1220` | Primary dark section background |
| Ink 2 | `#131D33` | Dark card background |
| Ink 3 | `#1D2A48` | Form field backgrounds |
| Lime | `#C6FF3D` | Primary accent — buttons, highlights |
| Lime dim | `#98C72E` | Secondary accent on dark backgrounds |
| Paper | `#F3F4EE` | Light section background |
| Paper 2 | `#E9EBE0` | Secondary light section background |
| Muted | `#8991A6` | Secondary / supporting text |
| Line | `#26314C` | Hairline borders on dark backgrounds |
| Line light | `#DCDED2` | Hairline borders on light backgrounds |

**Fonts:** Almarai (headings & body) — loaded via Google Fonts.

## 📄 Sections

- **Hero** — headline, dot-grid background, interactive tracking widget
- **Services** — land / sea / air / warehousing, rendered from a typed data array
- **Network** — hub cities with coordinates, rendered from a typed data array
- **Work Process** — 4-step "how it works," rendered from a typed data array
- **Testimonial** — client quote
- **Contact** — fully controlled, validated form (company, email, shipping method) with an animated success state powered by Framer Motion
- **Footer** — company info, nav, contact

## 🧩 Architecture Notes

- **`Section`** is a shared layout wrapper (`src/components/ui/Section.tsx`) that centralizes common section padding and an optional `id` for in-page anchor navigation, so individual sections only pass the styling that's actually unique to them.
- **Content is data-driven, not hardcoded.** Services, process steps, network cities, and shipping options are each defined as a typed array and rendered with `.map()`, so adding or editing an item never requires touching JSX markup.
- **The contact form is fully controlled.** All fields are backed by React state (`useState`), updated through a single shared `handleChange`, validated on submit, and logged before showing an animated confirmation — no field's value can silently go untracked.

## 📝 Notes

All company details, statistics, hub cities, and testimonials are fictional — created for portfolio/demo purposes only.

## 📜 License

MIT — feel free to fork and adapt.
