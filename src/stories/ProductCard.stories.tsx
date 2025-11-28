import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '../components/ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Email Components/🟢 ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    ctaBackgroundColor: { control: 'color' },
    ctaTextColor: { control: 'color' },
    imagePosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    layout: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical', 'image-only'],
    },
    imageBorderRadius: { control: 'text' },
    price: { control: 'number' },
    salePrice: { control: 'number' },
    currency: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

// ===== READY TO DEVELOP =====

// ===== HORIZONTAL LAYOUTS =====

export const HorizontalLeft: Story = {
  name: '🟢 Horizontal Left',
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    title: 'SZALIK PUFFY CLOUD',
    price: 149.50,
    currency: 'PLN',
    description: 'Ciepły i stylowy dodatek na chłodne dni - mięciutka dzianina',
    href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
    ctaText: 'Discover',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    ctaArrow: 'right',
    layout: 'horizontal',
    imagePosition: 'left',
  },
};

export const HorizontalRight: Story = {
  name: '🟢 Horizontal Right',
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
    title: 'CZAPKA FLUFFY BUBBLEGUM',
    price: 127.00,
    currency: 'PLN',
    description: 'Modna czapka w pięknym kolorze - idealny dodatek do jesienno-zimowej stylizacji',
    href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
    ctaText: 'Explore',
    ctaBackgroundColor: 'transparent',
    ctaTextColor: '#000000',
    ctaBorder: '1px solid #000000',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    ctaArrow: 'right',
    layout: 'horizontal',
    imagePosition: 'right',
  },
};

// ===== VERTICAL LAYOUTS =====

export const VerticalFull: Story = {
  name: '🟢 Vertical Full',
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
    title: 'SZALIK PUFFY EMERALD',
    price: 149.50,
    currency: 'PLN',
    description: 'Elegancki szalik z miękkiej dzianiny - idealny na chłodne dni',
    href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
    ctaText: 'Add to Bag',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    layout: 'vertical',
  },
};

export const VerticalMinimal: Story = {
  name: '🟢 Vertical Minimal',
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    title: 'SZALIK PUFFY CLOUD',
    price: 149.50,
    currency: 'PLN',
    href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
    ctaText: 'View',
    ctaBackgroundColor: 'transparent',
    ctaTextColor: '#000000',
    ctaBorder: '1px solid #000000',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    ctaArrow: 'right',
    layout: 'vertical',
  },
};

// ===== IMAGE ONLY LAYOUTS (Fashion/Lookbook) =====

export const ImageOnlyClickable: Story = {
  name: '🟢 Image Only Clickable',
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
    href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
    layout: 'image-only',
  },
};

export const ImageOnlyNoLink: Story = {
  name: '🟢 Image Only No Link',
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    layout: 'image-only',
  },
};

export const ImageOnlyRounded: Story = {
  name: '🟢 Image Only Rounded',
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
    href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
    layout: 'image-only',
    imageBorderRadius: '12px',
  },
};

