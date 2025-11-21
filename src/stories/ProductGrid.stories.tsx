import type { Meta, StoryObj } from '@storybook/react';
import { ProductGrid } from '../components/ProductGrid';

const meta: Meta<typeof ProductGrid> = {
  title: 'Email Components/ProductGrid',
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

// Fashion products
const sampleProducts = [
  {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137588898_bbac804c66edc9593c71dc2ce960695e.jpg',
    title: 'SILK MIDI DRESS',
    price: '899 PLN',
    href: '#',
  },
  {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137589225_c9d4f58d12cb3dfdfa99cc1cf1dea457.jpg',
    title: 'CASHMERE SWEATER',
    price: '1,299 PLN',
    href: '#',
  },
  {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/166873587_66933bd3f67f78635d838184314dc01c.jpg',
    title: 'TAILORED BLAZER',
    price: '1,799 PLN',
    href: '#',
  },
  {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/187827374_a8ebb90939e1c7a1bde9e44377c703d7.jpg',
    title: 'LEATHER JACKET',
    price: '2,499 PLN',
    href: '#',
  },
  {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6908/118187140_b968c2f9209cdcf612d1eaf753bf6645.jpg',
    title: 'LEATHER HANDBAG',
    price: '1,599 PLN',
    href: '#',
  },
  {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6167/33186674_1378dc77cb852d21f39508f7149fd1de.jpg',
    title: 'SLIM FIT SUIT',
    price: '2,999 PLN',
    href: '#',
  },
];

// ===== 2 COLUMN GRIDS WITH TEXT =====

export const Grid2x1: Story = {
  args: {
    products: sampleProducts.slice(0, 2),
    columns: 2,
    showText: true,
  },
};

export const Grid2x2: Story = {
  args: {
    products: sampleProducts.slice(0, 4),
    columns: 2,
    showText: true,
  },
};

export const Grid2x3: Story = {
  args: {
    products: sampleProducts,
    columns: 2,
    showText: true,
  },
};

// ===== IMAGE ONLY GRIDS (Fashion/Lookbook) =====

export const ImageGrid2x1: Story = {
  args: {
    products: sampleProducts.slice(0, 2),
    columns: 2,
    showText: false,
    gap: '16px',
  },
};

export const ImageGrid2x2: Story = {
  args: {
    products: sampleProducts.slice(0, 4),
    columns: 2,
    showText: false,
    gap: '16px',
  },
};

export const ImageGrid2x3: Story = {
  args: {
    products: sampleProducts,
    columns: 2,
    showText: false,
    gap: '12px',
  },
};

// ===== CUSTOM STYLING =====

export const MinimalGap: Story = {
  args: {
    products: sampleProducts.slice(0, 4),
    columns: 2,
    showText: true,
    gap: '4px',
  },
};

export const LargeGap: Story = {
  args: {
    products: sampleProducts.slice(0, 4),
    columns: 2,
    showText: true,
    gap: '32px',
  },
};

export const WhiteBackground: Story = {
  args: {
    products: sampleProducts.slice(0, 4),
    columns: 2,
    showText: true,
    backgroundColor: '#ffffff',
  },
};

export const CompactNoText: Story = {
  args: {
    products: sampleProducts.slice(0, 4),
    columns: 2,
    showText: false,
    gap: '8px',
  },
};

// ===== ROUNDED IMAGES =====

export const RoundedImagesWithText: Story = {
  args: {
    products: sampleProducts.slice(0, 4),
    columns: 2,
    showText: true,
    imageBorderRadius: '12px',
  },
};

export const RoundedImagesNoText: Story = {
  args: {
    products: sampleProducts.slice(0, 4),
    columns: 2,
    showText: false,
    gap: '12px',
    imageBorderRadius: '12px',
  },
};
