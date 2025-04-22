# Neeraj Pant • Developer Portfolio

A modern, animated personal portfolio showcasing projects, skills, and contact information. Built with React, TypeScript, Tailwind CSS, Vite, and powerful animation libraries for an engaging user experience.

## 🚀 Features

- Permanent dark theme with smooth transitions
- Animated Navbar with gooey particle effect
- Dynamic gradient-text logo
- Three.js Hyperspeed background animation
- SpotlightCard: Interactive cards with cursor-driven spotlight
- PixelCard: Shimmering pixel effect on hover/focus
- Section entrance animations (framer-motion + intersection-observer)
- Skills bar charts with animated progress
- Contact form with validation and submission feedback
- Responsive design for mobile & desktop

## 🛠 Tech Stack

- React & React DOM
- TypeScript
- Vite (fast development bundler)
- Tailwind CSS & custom animations
- Framer Motion (motion & animation)
- react-intersection-observer (scroll-triggered animations)
- Three.js & Postprocessing (Hyperspeed background)
- Heroicons for SVG icons

## 📁 Project Structure

```
portfolio/
├─ public/           # Static assets & index.html
├─ src/
│  ├─ assets/        # Images (e.g., profile.jpg)
│  ├─ components/    # Reusable React components
│  │  ├─ bg/         # Background animations (Hyperspeed)
│  │  ├─ About.tsx
│  │  ├─ Contact.tsx
│  │  ├─ GooeyNav.tsx
│  │  ├─ GradientText.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ PixelCard.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Skills.tsx
│  │  ├─ SpotlightCard.tsx
│  ├─ App.tsx        # Root component
│  └─ main.tsx       # Entry point
├─ tailwind.config.js
├─ tsconfig.json
└─ package.json
```

## ⚙️ Installation & Development

```bash
# Clone the repo
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

## 📦 Build & Deployment

```bash
# Generate production build
npm run build

# Preview locally
npm run preview
```

## 🤝 Contributing

Contributions, improvements, and PRs are welcome! Please open an issue or submit a PR.

## 📄 License

This project is licensed under the MIT License.
