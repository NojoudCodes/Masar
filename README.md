# Masar (مسار) 🚚
 
A concept marketing website for a fictional logistics & shipping company — built as a portfolio project to showcase front-end development with a modern React stack.
 
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
 
<!-- Optional: add a real screenshot once deployed -->
<!-- ![Masar preview](./preview.png) -->
 
## ✨ Overview
 
Masar ("route/path" in Arabic) is positioned as a precision-focused logistics brand — the design leans into speed, tracking, and data rather than the usual truck/plane clichés. Key ideas:
 
- A dot-grid background evoking a map/route interface
- A live-feeling shipment tracking widget
- Monospace numerals for stats and hub coordinates, set against bold Arabic display type
- A single high-contrast accent color (lime) on near-black, instead of the typical orange/navy logistics palette
## 🛠 Tech Stack
 
- **React** + **TypeScript**
- **Vite** — build tool & dev server
- **Tailwind CSS** — styling
- **React Router** — client-side routing
- **React Icons** — iconography
## 🚀 Getting Started
 
### Prerequisites
- Node.js ≥ 18
- npm / pnpm / yarn
### Installation
 
```bash
# clone the repo
git clone https://github.com/<your-username>/masar.git
cd masar
 
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
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Contact.tsx
│   │   ├── Services.tsx
│   │   ├── Network.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonial.tsx
│   │   ├── WorkProcess.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Logo.tsx
│   │   ├── ProcessCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── Subtitle.tsx
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
 
```
## 📄 Sections
 
- **Hero** — headline, dot-grid background, interactive tracking widget, stat strip
- **Services** — land / sea / air / warehousing
- **Network** — hub cities with coordinates
- **Process** — 4-step "how it works"
- **Testimonial** — client quote
- **Footer** — company info, nav, contact
## 📝 Notes
 
All company details, statistics, hub cities, and testimonials are fictional — created for portfolio/demo purposes only.
 
## 📜 License
 
MIT — feel free to fork and adapt.
 
