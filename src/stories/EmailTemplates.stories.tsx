import type { Meta, StoryObj } from '@storybook/react';
import { FashionMinimal } from '../templates/FashionMinimal';
import { FashionMaximal } from '../templates/FashionMaximal';
import { FashionLuxury } from '../templates/FashionLuxury';
import { FashionSale } from '../templates/FashionSale';

const meta: Meta = {
  title: 'Email Templates/Complete Examples',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete email templates combining multiple components. These are full examples ready to use for different fashion brand styles and purposes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

// ===== FASHION MINIMAL =====

export const Minimal: StoryObj = {
  render: () => <FashionMinimal />,
  parameters: {
    docs: {
      description: {
        story: 'Minimalist fashion email with clean black and white design. Features: clean typography, uppercase text, generous white space, simple navigation, and focused product presentation. Perfect for luxury brands with a minimal aesthetic.',
      },
    },
  },
};

// ===== FASHION MAXIMAL =====

export const Maximal: StoryObj = {
  render: () => <FashionMaximal />,
  parameters: {
    docs: {
      description: {
        story: 'Rich, content-heavy fashion email with multiple sections and products. Features: promotional banner, featured product, product grid, extensive benefits section, and comprehensive navigation. Perfect for product launches or seasonal collections.',
      },
    },
  },
};

// ===== FASHION LUXURY =====

export const Luxury: StoryObj = {
  render: () => <FashionLuxury />,
  parameters: {
    docs: {
      description: {
        story: 'Elegant luxury fashion email with sophisticated spacing and typography. Features: minimal color palette, generous padding, large letter-spacing, exclusive tone, and premium feel. Perfect for high-end fashion brands and bespoke services.',
      },
    },
  },
};

// ===== FASHION SALE =====

export const Sale: StoryObj = {
  render: () => <FashionSale />,
  parameters: {
    docs: {
      description: {
        story: 'Dynamic sale email with urgency elements and bold colors. Features: attention-grabbing banners, countdown messaging, promotional colors (red, yellow), multiple CTAs, and sale pricing. Perfect for flash sales, seasonal clearances, and promotional campaigns.',
      },
    },
  },
};
