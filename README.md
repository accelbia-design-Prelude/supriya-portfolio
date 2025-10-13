# Supriya Kumari - Portfolio

A modern, interactive portfolio website showcasing projects, skills, and achievements. Built with React, TypeScript, and Vite, featuring smooth animations and elegant design.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://accelbia-design-prelude.github.io/supriya-portfolio/)

## 🌟 Features

- **Horizontal Scrolling Sections**: Unique horizontal scroll effects with GSAP ScrollTrigger
- **Rich Animations**: Engaging visual effects using GSAP for text and element animations
- **Responsive Design**: Optimized for all device sizes and screen resolutions
- **Modern UI**: Built with Material-UI components for a polished look
- **Custom Typography**: Multiple custom font families for unique visual identity
- **Performance Optimized**: Fast loading times and smooth interactions
- **PWA Ready**: Progressive Web App capabilities with manifest configuration
- **Contact Integration**: Web3Forms integration for contact form submissions

## 🛠️ Tech Stack

### Core

- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling

### Styling & UI

- **Material-UI (MUI)** - Component library with icons
- **Emotion** - CSS-in-JS styling
- **CSS Modules** - Scoped component styles

### Animation

- **GSAP** - Professional-grade animation library with ScrollTrigger
- **Intersection Observer** - Scroll-based animations

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files
- **gh-pages** - GitHub Pages deployment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/accelbia-design-prelude/supriya-portfolio.git
   cd supriya-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📜 Available Scripts

| Script                 | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start development server with HMR    |
| `npm run build`        | Build for production                 |
| `npm run preview`      | Preview production build locally     |
| `npm run lint`         | Run ESLint to check code quality     |
| `npm run format`       | Format code with Prettier            |
| `npm run format:check` | Check if code is formatted correctly |
| `npm run deploy`       | Deploy to GitHub Pages               |

## 🎨 Project Structure

```
supriya-portfolio/
├── public/                  # Static assets
│   ├── assets/             # Images, fonts, icons
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── Page1/         # Landing page with hero section
│   │   ├── Page2/         # About section with animated text
│   │   │   └── HLAnimation/  # Text highlight animation component
│   │   ├── Page3/         # Horizontal scrolling portfolio section
│   │   └── Page4/         # Contact section
│   ├── utils/             # Utility files
│   │   ├── colors.css     # Color variables
│   │   └── fonts.css      # Font definitions
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## 🎯 Key Components

- **Page1**: Landing/hero section with custom typography and background image
- **Page2**: About section featuring animated text reveals and gradient text effects
- **Page3**: Horizontal scrolling portfolio showcase with GSAP-powered scroll effects
- **Page4**: Contact section with social links and email form integration

## 🌐 Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This will:

1. Build the production version
2. Deploy to the `gh-pages` branch
3. Make it available at the configured GitHub Pages URL

## 🔧 Configuration

### Base URL

The base URL is configured in `vite.config.ts`:

```typescript
base: '/supriya-portfolio/';
```

Update this if deploying to a different location.

### TypeScript

TypeScript configurations are split:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node/build tools settings

## 🤝 Code Quality

The project uses automated code quality tools:

- **Pre-commit hooks**: Automatically lint and format staged files
- **ESLint**: Enforces code quality standards
- **Prettier**: Ensures consistent code formatting

Configurations:

- ESLint: `eslint.config.js`
- Prettier: `.prettierrc`
- Husky: Git hooks in `.husky/`

## 📱 PWA Features

The portfolio includes Progressive Web App capabilities:

- App manifest for installation
- Theme colors for browser UI
- Adaptive icons for light/dark mode

## 🎓 Custom Fonts

The project includes several custom font families:

- **Bebas Neue** - Display font
- **Montserrat** - Primary body font
- **Sign Rathi** - Signature/script font
- **Very Vogue** - Stylish display font

## 📄 License

This project is private and proprietary.
