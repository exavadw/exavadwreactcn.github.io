# Henry's Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Framer Motion.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Framer Motion** for smooth animations
- **Responsive Design** for all devices
- **Email Integration** with EmailJS
- **Smooth Scrolling** navigation
- **Modern UI/UX** with custom CSS variables

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules with custom properties
- **Animations**: Framer Motion
- **Email**: EmailJS
- **Package Manager**: pnpm
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── NavBar/           # Navigation component
│   ├── Intro/            # Hero section
│   ├── Skills/           # Skills & About section
│   ├── Experience/       # Work experience
│   ├── Projects/         # Portfolio projects
│   ├── Contact/          # Contact form
│   └── Footer/           # Footer component
├── styles/               # Global styles
│   └── globals.css       # Global CSS with variables
└── assets/               # Images and assets
```

## 🎨 Design System

The project uses a centralized design system with CSS custom properties:

### Colors
- `--primary-bg`: Main background color
- `--secondary-bg`: Card backgrounds
- `--accent-color`: Highlight color
- `--text-primary`: Primary text color

### Typography
- `--font-size-xl`: Large titles (3rem)
- `--font-size-lg`: Subtitle size (1.75rem)
- `--font-size-md`: Body text (1rem)
- `--font-weight-*`: Various font weights

### Spacing
- `--spacing-xs` to `--spacing-3xl`: Consistent spacing scale

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run development server**:
   ```bash
   pnpm dev
   ```

3. **Build for production**:
   ```bash
   pnpm build
   ```

4. **Start production server**:
   ```bash
   pnpm start
   ```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## 🔧 Configuration

### Next.js Config
- App Router enabled
- Image optimization configured
- TypeScript support

### TypeScript Config
- Strict mode enabled
- Path aliases configured (`@/*`)
- Next.js types included

## 🎯 Key Features

### Global Style System
All common styles are centralized in `src/styles/globals.css` with CSS custom properties for easy theming and consistency.

### Type Safety
Full TypeScript implementation with proper interfaces for all data structures and component props.

### Animations
Smooth, performant animations using Framer Motion with proper TypeScript support.

### Responsive Design
Mobile-first approach with breakpoints for tablets and desktop.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Node.js applications.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, TypeScript, and Framer Motion

<!-- Updated for custom domain deployment --> 