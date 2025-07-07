# ScanPick - Industrial Automation Solutions

A modern landing page for ScanPick, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 14 and TypeScript
- 🎨 Modern UI with Tailwind CSS and Shadcn/ui components
- ✨ Custom animations and star field effects
- 📱 Fully responsive design
- 🎯 Optimized for performance and SEO

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS animations and Canvas API

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cosmic-red-star-landing-main
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── contact/        # Contact page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # Shadcn/ui components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── StarField.tsx  # Animated background
│   └── ...           # Other components
└── lib/               # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

The project uses a custom ScanPick color palette defined in `tailwind.config.ts`:

- `scanpick-red`: Primary brand color
- `scanpick-black`: Background color
- `scanpick-white`: Text color
- `scanpick-gray`: Secondary elements

### Animations

Custom animations are defined in the Tailwind config:

- `star-field`: Animated star background
- `scroll`: Logo carousel animation
- `fade-in-up`: Content entrance animations

## Deployment

The project can be deployed to Vercel, Netlify, or any other platform that supports Next.js.

## License

This project is private and proprietary to ScanPick.
