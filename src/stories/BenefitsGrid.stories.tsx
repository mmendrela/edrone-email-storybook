import type { Meta, StoryObj } from '@storybook/react';
import { BenefitsGrid } from '../components/BenefitsGrid';

const meta: Meta<typeof BenefitsGrid> = {
  title: 'Email Components/BenefitsGrid',
  component: BenefitsGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'select' },
      options: [2, 3, 4],
    },
    backgroundColor: { control: 'color' },
    itemBackgroundColor: { control: 'color' },
    titleColor: { control: 'color' },
    descriptionColor: { control: 'color' },
    iconColor: { control: 'color' },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    titleTextTransform: {
      control: { type: 'select' },
      options: ['none', 'uppercase', 'lowercase', 'capitalize'],
    },
    padding: { control: 'text' },
    itemPadding: { control: 'text' },
    iconSize: { control: 'text' },
    titleFontSize: { control: 'text' },
    descriptionFontSize: { control: 'text' },
    spacing: { control: 'text' },
    borderRadius: { control: 'text' },
    border: { control: 'text' },
    titleLetterSpacing: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof BenefitsGrid>;

const basicBenefits = [
  {
    icon: '🚚',
    title: 'Darmowa dostawa',
    description: 'Przy zamówieniach powyżej 200 zł',
  },
  {
    icon: '↩️',
    title: 'Łatwy zwrot',
    description: 'Zwrot do 30 dni bez podania przyczyny',
  },
  {
    icon: '🔒',
    title: 'Bezpieczne płatności',
    description: 'Szyfrowane i bezpieczne transakcje',
  },
];

const extendedBenefits = [
  {
    icon: '🚚',
    title: 'Free Shipping',
    description: 'On orders over $100',
  },
  {
    icon: '↩️',
    title: 'Easy Returns',
    description: '30-day return policy',
  },
  {
    icon: '🔒',
    title: 'Secure Payment',
    description: 'Encrypted & safe',
  },
  {
    icon: '💬',
    title: '24/7 Support',
    description: 'Always here to help',
  },
];

const minimalBenefits = [
  {
    icon: '✓',
    title: 'Free Delivery',
  },
  {
    icon: '✓',
    title: 'Easy Returns',
  },
  {
    icon: '✓',
    title: 'Quality Guarantee',
  },
];

const fashionBenefits = [
  {
    icon: '🚚',
    title: 'FREE WORLDWIDE SHIPPING',
    description: 'Express delivery available',
  },
  {
    icon: '↩️',
    title: 'COMPLIMENTARY RETURNS',
    description: 'Free returns within 30 days',
  },
  {
    icon: '✨',
    title: 'EXCLUSIVE DESIGNS',
    description: 'Limited edition collections',
  },
  {
    icon: '💎',
    title: 'PREMIUM QUALITY',
    description: 'Finest materials & craftsmanship',
  },
];

// ===== 3 COLUMNS (DEFAULT) =====

export const ThreeColumnsDefault: Story = {
  args: {
    benefits: basicBenefits,
    columns: 3,
  },
};

export const ThreeColumnsLight: Story = {
  args: {
    benefits: extendedBenefits.slice(0, 3),
    columns: 3,
    backgroundColor: '#f9f9f9',
    padding: '40px 25px',
  },
};

export const ThreeColumnsWithBorder: Story = {
  args: {
    benefits: basicBenefits,
    columns: 3,
    itemBackgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    itemPadding: '25px 20px',
    backgroundColor: '#f5f5f5',
  },
};

// ===== 2 COLUMNS =====

export const TwoColumns: Story = {
  args: {
    benefits: extendedBenefits.slice(0, 2),
    columns: 2,
  },
};

export const TwoColumnsRounded: Story = {
  args: {
    benefits: basicBenefits.slice(0, 2),
    columns: 2,
    itemBackgroundColor: '#f5f5f5',
    borderRadius: '8px',
    itemPadding: '30px 20px',
  },
};

export const TwoColumnsDark: Story = {
  args: {
    benefits: [
      {
        icon: '🚚',
        title: 'Free Delivery',
        description: 'On all orders',
      },
      {
        icon: '↩️',
        title: 'Easy Returns',
        description: '30-day policy',
      },
    ],
    columns: 2,
    backgroundColor: '#000000',
    titleColor: '#ffffff',
    descriptionColor: '#cccccc',
    iconColor: '#ffffff',
  },
};

// ===== 4 COLUMNS =====

export const FourColumns: Story = {
  args: {
    benefits: extendedBenefits,
    columns: 4,
    padding: '40px 15px',
    itemPadding: '15px 10px',
    iconSize: '28px',
    titleFontSize: '13px',
    descriptionFontSize: '11px',
    spacing: '15px',
  },
};

export const FourColumnsMinimal: Story = {
  args: {
    benefits: [
      { icon: '✓', title: 'Free Shipping' },
      { icon: '✓', title: 'Easy Returns' },
      { icon: '✓', title: 'Secure Payment' },
      { icon: '✓', title: '24/7 Support' },
    ],
    columns: 4,
    padding: '30px 15px',
    itemPadding: '10px',
    iconSize: '24px',
    titleFontSize: '12px',
    spacing: '10px',
  },
};

// ===== FASHION STYLES =====

export const FashionMinimal: Story = {
  args: {
    benefits: [
      { icon: '✓', title: 'FREE SHIPPING' },
      { icon: '✓', title: 'EASY RETURNS' },
      { icon: '✓', title: 'PREMIUM QUALITY' },
    ],
    columns: 3,
    backgroundColor: '#ffffff',
    titleColor: '#000000',
    iconColor: '#000000',
    iconSize: '20px',
    titleFontSize: '11px',
    titleFontWeight: '500',
    titleTextTransform: 'uppercase',
    titleLetterSpacing: '2px',
    padding: '40px 25px',
    itemPadding: '15px 10px',
  },
};

export const FashionElegant: Story = {
  args: {
    benefits: fashionBenefits.slice(0, 3),
    columns: 3,
    backgroundColor: '#000000',
    titleColor: '#ffffff',
    descriptionColor: '#cccccc',
    iconColor: '#ffffff',
    titleTextTransform: 'uppercase',
    titleLetterSpacing: '1.5px',
    titleFontSize: '12px',
    titleFontWeight: '500',
    descriptionFontSize: '11px',
    padding: '50px 25px',
    iconSize: '32px',
  },
};

export const FashionLuxury: Story = {
  args: {
    benefits: fashionBenefits,
    columns: 4,
    backgroundColor: '#f5f5f5',
    titleColor: '#000000',
    descriptionColor: '#666666',
    iconColor: '#000000',
    titleTextTransform: 'uppercase',
    titleLetterSpacing: '1px',
    titleFontSize: '11px',
    titleFontWeight: '600',
    descriptionFontSize: '10px',
    padding: '40px 15px',
    itemPadding: '15px 10px',
    spacing: '15px',
    iconSize: '28px',
  },
};

export const FashionClean: Story = {
  args: {
    benefits: [
      {
        icon: '🚚',
        title: 'FREE WORLDWIDE DELIVERY',
        description: 'On all orders',
      },
      {
        icon: '↩️',
        title: 'COMPLIMENTARY RETURNS',
        description: 'Within 30 days',
      },
      {
        icon: '💎',
        title: 'PREMIUM QUALITY',
        description: 'Finest materials',
      },
    ],
    columns: 3,
    backgroundColor: '#ffffff',
    titleColor: '#000000',
    descriptionColor: '#666666',
    iconColor: '#000000',
    titleTextTransform: 'uppercase',
    titleLetterSpacing: '1.5px',
    titleFontSize: '12px',
    titleFontWeight: '500',
    descriptionFontSize: '11px',
    itemPadding: '20px 15px',
  },
};

// ===== WITH BACKGROUNDS =====

export const WithItemBackgrounds: Story = {
  args: {
    benefits: basicBenefits,
    columns: 3,
    backgroundColor: '#ffffff',
    itemBackgroundColor: '#f9f9f9',
    borderRadius: '8px',
    itemPadding: '25px 20px',
    spacing: '20px',
  },
};

export const WithBorderedItems: Story = {
  args: {
    benefits: extendedBenefits.slice(0, 3),
    columns: 3,
    backgroundColor: '#ffffff',
    itemBackgroundColor: '#ffffff',
    border: '2px solid #000000',
    borderRadius: '0px',
    itemPadding: '25px 20px',
    spacing: '20px',
  },
};

// ===== NO DESCRIPTIONS =====

export const NoDescriptions: Story = {
  args: {
    benefits: minimalBenefits,
    columns: 3,
    backgroundColor: '#ffffff',
    titleFontSize: '14px',
    titleFontWeight: '500',
  },
};

export const NoDescriptionsFashion: Story = {
  args: {
    benefits: [
      { icon: '✓', title: 'FREE DELIVERY' },
      { icon: '✓', title: 'EASY RETURNS' },
      { icon: '✓', title: 'SECURE PAYMENT' },
      { icon: '✓', title: '24/7 SUPPORT' },
    ],
    columns: 4,
    backgroundColor: '#f5f5f5',
    titleColor: '#000000',
    iconColor: '#000000',
    titleTextTransform: 'uppercase',
    titleLetterSpacing: '1.5px',
    titleFontSize: '11px',
    titleFontWeight: '600',
    padding: '30px 15px',
    itemPadding: '15px 10px',
    iconSize: '20px',
  },
};

// ===== LEFT ALIGNED =====

export const LeftAligned: Story = {
  args: {
    benefits: basicBenefits,
    columns: 3,
    textAlign: 'left',
  },
};

export const LeftAlignedTwoColumns: Story = {
  args: {
    benefits: extendedBenefits.slice(0, 2),
    columns: 2,
    textAlign: 'left',
    itemBackgroundColor: '#f9f9f9',
    itemPadding: '25px 20px',
    borderRadius: '4px',
  },
};

// ===== COLORED ICONS =====

export const ColoredIcons: Story = {
  args: {
    benefits: basicBenefits,
    columns: 3,
    backgroundColor: '#ffffff',
    iconColor: '#e74c3c',
    titleColor: '#000000',
    descriptionColor: '#666666',
  },
};

export const GreenIcons: Story = {
  args: {
    benefits: [
      {
        icon: '✓',
        title: 'Eco-Friendly Shipping',
        description: 'Carbon neutral delivery',
      },
      {
        icon: '✓',
        title: 'Sustainable Materials',
        description: 'Ethically sourced',
      },
      {
        icon: '✓',
        title: 'Recyclable Packaging',
        description: '100% biodegradable',
      },
    ],
    columns: 3,
    backgroundColor: '#f0f9f4',
    iconColor: '#2ecc71',
    titleColor: '#000000',
    descriptionColor: '#666666',
  },
};

// ===== COMPACT =====

export const Compact: Story = {
  args: {
    benefits: extendedBenefits,
    columns: 4,
    backgroundColor: '#ffffff',
    padding: '25px 15px',
    itemPadding: '10px 5px',
    iconSize: '24px',
    titleFontSize: '12px',
    descriptionFontSize: '10px',
    spacing: '10px',
  },
};

// ===== TWO ROWS =====

export const TwoRows: Story = {
  args: {
    benefits: [
      { icon: '🚚', title: 'Free Shipping', description: 'On orders over $100' },
      { icon: '↩️', title: 'Easy Returns', description: '30-day policy' },
      { icon: '🔒', title: 'Secure Payment', description: 'Encrypted & safe' },
      { icon: '💬', title: '24/7 Support', description: 'Always here to help' },
      { icon: '⭐', title: 'Quality Guarantee', description: 'Premium products' },
      { icon: '🎁', title: 'Gift Wrapping', description: 'Free on request' },
    ],
    columns: 3,
    backgroundColor: '#ffffff',
    spacing: '25px',
  },
};
