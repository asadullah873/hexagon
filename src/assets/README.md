# Assets Directory

This directory contains static assets used throughout the application.

## Purpose

The `assets` folder is designed to store and organize static resources that are imported and used in your Next.js application components.

## Structure

```
assets/
├── images/          # Image files (PNG, JPG, SVG, etc.)
├── icons/           # Icon files and icon components
├── fonts/           # Custom font files
├── styles/          # Additional CSS/SCSS files
└── data/            # Static JSON data files
```

## Usage

### Images
Store image files that will be imported in your components:
```typescript
import heroImage from '@/assets/images/hero.jpg';
```

### Icons
Store SVG icons or icon components:
```typescript
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg';
```

### Fonts
Store custom font files:
```typescript
// Import in your CSS or use with next/font
@font-face {
  font-family: 'CustomFont';
  src: url('@/assets/fonts/custom-font.woff2');
}
```

### Data
Store static JSON data files:
```typescript
import siteConfig from '@/assets/data/site-config.json';
```

## Best Practices

- Use descriptive file names
- Organize files into subdirectories by type
- Optimize images before adding them
- Use appropriate file formats (WebP for images, SVG for icons)
- Keep file sizes reasonable for web performance

## Note

This folder is separate from the `public` directory. Files in `assets` are processed by the build system and can be optimized, while files in `public` are served statically.
