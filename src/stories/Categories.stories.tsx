import type { Meta, StoryObj } from '@storybook/react';
import { Categories } from '../components/Categories';

const meta: Meta<typeof Categories> = {
  title: 'Email Components/Categories',
  component: Categories,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    separatorColor: { control: 'color' },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    textTransform: {
      control: { type: 'select' },
      options: ['none', 'uppercase', 'lowercase', 'capitalize'],
    },
    padding: { control: 'text' },
    fontSize: { control: 'text' },
    letterSpacing: { control: 'text' },
    separator: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Categories>;

const fashionCategories = [
  { label: 'Women', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Sale', href: '#' },
];

const extendedFashionCategories = [
  { label: 'New In', href: '#' },
  { label: 'Women', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Accessories', href: '#' },
  { label: 'Sale', href: '#' },
];

const ecommerceCategories = [
  { label: 'Shop', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'FAQ', href: '#' },
];

// ===== FASHION STYLES =====

export const FashionMinimal: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '|',
  },
};

export const FashionBold: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '18px 25px',
    fontSize: '13px',
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    separator: '•',
  },
};

export const FashionExtended: Story = {
  args: {
    categories: extendedFashionCategories,
    backgroundColor: '#f5f5f5',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '11px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    separator: '|',
  },
};

export const FashionClean: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#ffffff',
    color: '#333333',
    padding: '16px 25px',
    fontSize: '13px',
    fontWeight: '400',
    textAlign: 'center',
    textTransform: 'none',
    letterSpacing: '0.5px',
    separator: '•',
  },
};

// ===== DIFFERENT SEPARATORS =====

export const DotSeparator: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '•',
  },
};

export const SlashSeparator: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '/',
  },
};

export const NoSeparator: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '',
  },
};

// ===== ALIGNMENT =====

export const LeftAligned: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'left',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '|',
  },
};

export const RightAligned: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'right',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '|',
  },
};

// ===== COLOR VARIATIONS =====

export const DarkBackground: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '16px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '|',
  },
};

export const GrayBackground: Story = {
  args: {
    categories: extendedFashionCategories,
    backgroundColor: '#f9f9f9',
    color: '#333333',
    padding: '14px 25px',
    fontSize: '11px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    separator: '•',
  },
};

export const ColoredSeparator: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    separatorColor: '#e74c3c',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '•',
  },
};

// ===== E-COMMERCE =====

export const EcommerceSimple: Story = {
  args: {
    categories: ecommerceCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '14px 25px',
    fontSize: '13px',
    fontWeight: '400',
    textAlign: 'center',
    textTransform: 'none',
    letterSpacing: '0.5px',
    separator: '|',
  },
};

export const EcommerceUppercase: Story = {
  args: {
    categories: ecommerceCategories,
    backgroundColor: '#f5f5f5',
    color: '#2c3e50',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    separator: '•',
  },
};

// ===== COMPACT =====

export const Compact: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '10px 25px',
    fontSize: '11px',
    fontWeight: '400',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    separator: '•',
  },
};

// ===== LUXURY =====

export const Luxury: Story = {
  args: {
    categories: fashionCategories,
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '20px 25px',
    fontSize: '11px',
    fontWeight: '400',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    separator: '|',
  },
};
