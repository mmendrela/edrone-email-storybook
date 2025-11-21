# Edrone Email Storybook

Email template component library built with React, TypeScript, and Storybook. Includes reusable components and complete email templates designed for fashion e-commerce brands.

## Features

- **Reusable Components**: Modular email components (Banner, Hero, ProductCard, ProductGrid, Footer, etc.)
- **Complete Templates**: Pre-built email templates in different styles (Minimal, Maximal, Luxury, Sale)
- **Email-Safe HTML**: Table-based layouts compatible with all major email clients
- **TypeScript Support**: Full type safety for component props
- **Live Preview**: Interactive Storybook interface for component development
- **Production Ready**: Optimized for deployment on AWS Amplify

## Tech Stack

- React 19.2.0
- TypeScript 5.7.2
- Storybook 8.6.14
- Vite 6.0.5
- MJML 4.17.1

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the Storybook development server:

```bash
npm run storybook
```

The Storybook will be available at `http://localhost:6006`

### Build

Build the static Storybook site:

```bash
npm run build-storybook
```

Output will be in the `storybook-static` directory.

## Project Structure

```
src/
├── components/        # Reusable email components
│   ├── Banner.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── Footer.tsx
│   └── ...
├── templates/         # Complete email templates
│   ├── FashionMinimal.tsx
│   ├── FashionMaximal.tsx
│   ├── FashionLuxury.tsx
│   └── FashionSale.tsx
└── stories/           # Storybook stories
    ├── Components/
    └── EmailTemplates.stories.tsx
```

## Components

### Core Components

- **Banner**: Promotional banner with customizable text and styling
- **Logo**: Centered logo with link support
- **Categories**: Navigation menu with separator support
- **Hero**: Large hero image with text overlay or below-text layout
- **Text**: Styled text block with typography controls
- **Button**: Call-to-action button with custom styling
- **ProductCard**: Product display with image, title, price, and CTA
- **ProductGrid**: Grid layout for multiple products (2-4 columns)
- **BenefitsGrid**: Benefits/features section with icons
- **Spacer**: Vertical spacing control
- **Divider**: Horizontal line separator
- **Footer**: Footer section with HTML content support

## Email Templates

### Fashion Minimal
Clean, minimalist design with black and white color scheme. Perfect for luxury brands.

### Fashion Maximal
Rich, content-heavy template with multiple sections and product showcases. Ideal for product launches.

### Fashion Luxury
Elegant design with generous spacing and sophisticated typography. Best for high-end brands.

### Fashion Sale
Dynamic promotional template with urgency elements and bold colors. Perfect for flash sales.

## Deployment to AWS Amplify

This project is configured for deployment on AWS Amplify.

### Setup Instructions

1. **Push to GitHub**
   - Ensure your code is pushed to a GitHub repository

2. **Connect to AWS Amplify**
   - Log in to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your GitHub repository

3. **Configure Build Settings**
   - Amplify will automatically detect the `amplify.yml` file
   - Build command: `npm run build-storybook`
   - Output directory: `storybook-static`
   - Node version: 18 or higher

4. **Deploy**
   - Click "Save and deploy"
   - Amplify will build and deploy your Storybook
   - You'll receive a URL like: `https://main.xxxxx.amplifyapp.com`

### Manual Build Settings

If `amplify.yml` is not detected, configure manually in Amplify Console:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build-storybook
  artifacts:
    baseDirectory: storybook-static
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Environment Variables

No environment variables required for basic deployment.

### Custom Domain (Optional)

1. In Amplify Console, go to "Domain management"
2. Add your custom domain
3. Follow AWS instructions to configure DNS

## Development Workflow

1. Create/modify components in `src/components/`
2. Create stories in `src/stories/`
3. Test in local Storybook (`npm run storybook`)
4. Build and verify (`npm run build-storybook`)
5. Commit and push to GitHub
6. AWS Amplify auto-deploys on push to main branch

## Customization

Each component has full configuration through props:
- Colors (backgroundColor, color, borderColor)
- Typography (fontSize, fontWeight, fontFamily, letterSpacing)
- Layout (padding, align, width)
- Styles (borderRadius, borderStyle, borderWidth)

All controls are available in the Storybook Controls panel.

## Contributing

When adding new components:
1. Create component in `src/components/ComponentName.tsx`
2. Export from component file
3. Create corresponding story in `src/stories/ComponentName.stories.tsx`
4. Document props and usage examples
5. Test in multiple email clients if possible

## License

ISC

## Support

For issues or questions, please open an issue on GitHub.
