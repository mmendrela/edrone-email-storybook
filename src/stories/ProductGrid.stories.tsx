import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { FeaturedProductGrid } from '../components/FeaturedProductGrid';

const meta: Meta<typeof ProductGrid> = {
  title: 'Email Components/🟢 ProductGrid',
  component: ProductGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    columns: {
      control: { type: 'radio' },
      options: [2],
    },
    gap: { control: 'text' },
    showText: { control: 'boolean' },
    imageBorderRadius: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ProductGrid>;

// ===== READY TO DEVELOP =====

// Naoko store products
const sampleProducts = [
  {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
    title: 'SZALIK PUFFY EMERALD',
    price: '149.50 PLN',
    href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
  },
  {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    title: 'SZALIK PUFFY CLOUD',
    price: '149.50 PLN',
    href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
  },
  {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
    title: 'CZAPKA FLUFFY BUBBLEGUM',
    price: '127.00 PLN',
    href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
  },
  {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
    title: 'SZALIK PUFFY EMERALD',
    price: '149.50 PLN',
    href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
  },
  {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    title: 'SZALIK PUFFY CLOUD',
    price: '149.50 PLN',
    href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
  },
  {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
    title: 'CZAPKA FLUFFY BUBBLEGUM',
    price: '127.00 PLN',
    href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
  },
];

// ===== 2 COLUMN GRIDS WITH TEXT =====

export const Grid2x1: Story = {
  name: '🟢 Grid 2x1',
  args: {
    products: sampleProducts.slice(0, 2),
    columns: 2,
    showText: true,
  },
};

export const Grid2x2: Story = {
  name: '🟢 Grid 2x2',
  args: {
    products: sampleProducts.slice(0, 4),
    columns: 2,
    showText: true,
  },
};

export const Grid2x3: Story = {
  name: '🟢 Grid 2x3',
  args: {
    products: sampleProducts,
    columns: 2,
    showText: true,
  },
};

// ===== IMAGE ONLY GRIDS (Fashion/Lookbook) =====

export const ImageGrid2x1: Story = {
  name: '🟢 Image Grid 2x1',
  args: {
    products: sampleProducts.slice(0, 2),
    columns: 2,
    showText: false,
    gap: '16px',
  },
};

export const ImageGrid2x2: Story = {
  name: '🟢 Image Grid 2x2',
  args: {
    products: sampleProducts.slice(0, 4),
    columns: 2,
    showText: false,
    gap: '16px',
  },
};

export const ImageGrid2x3: Story = {
  name: '🟢 Image Grid 2x3',
  args: {
    products: sampleProducts,
    columns: 2,
    showText: false,
    gap: '12px',
  },
};

// ===== FEATURED + GRID =====

export const FeaturedPlusGrid: Story = {
  name: '🟢 Featured + Grid',
  render: (args) => (
    <FeaturedProductGrid
      featuredProduct={sampleProducts[0]}
      gridProducts={sampleProducts.slice(1, 5)}
      columns={2}
      showText={true}
      backgroundColor={args.backgroundColor}
      gap={args.gap}
      imageBorderRadius={args.imageBorderRadius}
    />
  ),
};

export const FeaturedPlusGridImageOnly: Story = {
  name: '🟢 Featured + Grid (Images Only)',
  render: (args) => (
    <FeaturedProductGrid
      featuredProduct={sampleProducts[0]}
      gridProducts={sampleProducts.slice(1, 5)}
      columns={2}
      showText={false}
      backgroundColor={args.backgroundColor}
      gap={args.gap || '12px'}
      imageBorderRadius={args.imageBorderRadius}
    />
  ),
};

