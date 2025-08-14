# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. It's a single-page application showcasing professional experience, skills, education, and personal projects with optimal performance, SEO, and maintainability.

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run type-check` - Run TypeScript type checking without emitting files

### Package Management
The project uses npm with dependencies managed in `package.json`. All legacy Create React App dependencies have been removed.

## Architecture & Code Organization

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion for smooth animations
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Rubik) with Next.js font optimization
- **Analytics**: Modern analytics setup (configurable)

### Directory Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with font and metadata
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global Tailwind CSS styles
├── components/
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── sections/          # Page sections (Hero, Experience, Skills, Education)
│   └── ui/                # Reusable UI components
├── data/                  # Structured content data
│   ├── experiences.ts     # Professional experience data
│   ├── projects.ts        # Personal projects data
│   ├── skills.ts          # Technical skills data
│   └── education.ts       # Educational background data
├── lib/                   # Utilities and configurations
│   ├── utils.ts           # Utility functions (cn for class merging)
│   └── analytics.ts       # Analytics tracking functions
└── types/                 # TypeScript type definitions
    └── portfolio.ts       # Portfolio-related interfaces
```

### Key Architectural Patterns

**Next.js App Router**: Uses the modern App Router for better performance, SEO, and developer experience with file-based routing.

**Component-First Design**: Components are organized by purpose (layout, sections, ui) for better maintainability and reusability.

**Type-Safe Data Layer**: All portfolio content is strongly typed with TypeScript interfaces, making content updates safe and predictable.

**Tailwind CSS Design System**: Uses a custom Tailwind configuration with design tokens, animations, and utility classes for consistent styling.

**Responsive-First Design**: Mobile-first approach with responsive breakpoints using Tailwind's responsive utilities.

**Performance Optimizations**: 
- Next.js automatic image optimization
- Font optimization with `@next/font`
- Component code splitting
- Static generation for optimal loading

### Key Files to Understand
- `src/app/layout.tsx` - Root layout with SEO metadata and font configuration
- `src/app/page.tsx` - Main page composition
- `src/types/portfolio.ts` - TypeScript interfaces for all data structures
- `src/data/*.ts` - Content data files (easily editable)
- `tailwind.config.js` - Design system configuration
- `src/lib/utils.ts` - Utility functions for class merging

### Content Management
- **Easy Updates**: Content is separated into typed data files in `src/data/`
- **Type Safety**: All content changes are validated at compile time
- **Structured Data**: Uses consistent interfaces for experiences, projects, skills, and education
- **Extensible**: Easy to add new sections or modify existing ones

### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Design Tokens**: Consistent colors, spacing, and typography through Tailwind config
- **Component Classes**: Custom component classes in `globals.css` for common patterns
- **Responsive Design**: Mobile-first with responsive breakpoints
- **Animation**: Smooth animations with Framer Motion and Tailwind transitions

### Development Best Practices
- **TypeScript Strict Mode**: Full type safety throughout the application
- **Path Aliases**: Absolute imports using `@/` prefix for cleaner imports
- **ESLint**: Next.js recommended linting rules for code quality
- **Component Organization**: Clear separation of concerns with dedicated folders

### Adding New Content
1. **Experience**: Add to `src/data/experiences.ts` following the `Experience` interface
2. **Projects**: Add to `src/data/projects.ts` following the `Project` interface  
3. **Skills**: Add to `src/data/skills.ts` with appropriate category
4. **Education**: Add to `src/data/education.ts` following the `Education` interface

All data structures are fully typed, making content updates safe and predictable.