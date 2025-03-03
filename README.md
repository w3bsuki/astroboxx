# Astrobox Portfolio Website

A clean, modern portfolio website for Astrobox, showcasing products and services with a beautiful and easy-to-navigate design.

## Tech Stack

- **Frontend Framework**: Next.js 15.2 (App Router)
- **UI Library**: React 19.0
- **Language**: TypeScript 5.4
- **Styling**: Tailwind CSS 3.4
- **Component Library**: Radix UI Primitives
- **Animations**: Framer Motion 12.4
- **Icons**: Lucide Icons 0.477
- **Utilities**: Class Variance Authority, clsx, tailwind-merge
- **Package Manager**: PNPM

## Features

- Responsive design that works on all devices
- Dark mode support with system preference detection
- Clean, boxed layout for better readability
- Animated navigation with active state indicators
- Showcase for products and services
- Modern UI components built with Radix UI primitives

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- PNPM package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/astrobox.git
cd astrobox
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
astrobox/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   │   ├── ui/         # UI components (buttons, dropdowns, etc.)
│   │   ├── header.tsx  # Site header with navigation
│   │   ├── footer.tsx  # Site footer
│   │   └── ...
│   ├── lib/            # Utility functions and shared code
│   └── ...
├── tailwind.config.ts  # Tailwind CSS configuration
├── next.config.ts      # Next.js configuration
└── ...
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by editing the `tailwind.config.ts` file.

### Components

UI components are built using Radix UI primitives and can be found in the `src/components/ui` directory. These components are designed to be accessible and customizable.

### Content

Update the content in the page files located in the `src/app` directory to match your requirements.

## Deployment

The project can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or a custom server.

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
