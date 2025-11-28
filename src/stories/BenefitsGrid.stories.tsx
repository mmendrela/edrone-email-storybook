import type { Meta, StoryObj } from '@storybook/react';
import { BenefitsGrid } from '../components/BenefitsGrid';

const meta: Meta<typeof BenefitsGrid> = {
  title: 'Email Components/🟢 BenefitsGrid',
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
    iconCircle: { control: 'boolean' },
    iconCircleSize: { control: 'text' },
    iconCircleBackgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof BenefitsGrid>;

// ===== READY TO DEVELOP =====

// ===== 2 ELEMENTS =====

export const TwoElementsSpecificIconsCenterLight: Story = {
  name: '🟢 2 Elements - Specific Icons - Center - Light',
  args: {
    benefits: [
      {
        icon: 'fas fa-truck-fast',
        iconType: 'fontawesome' as const,
        title: 'Free Shipping',
        description: 'On orders over $100',
      },
      {
        icon: 'fas fa-rotate-left',
        iconType: 'fontawesome' as const,
        title: 'Easy Returns',
        description: '30-day return policy',
      },
    ],
    columns: 2,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    iconSize: '28px',
  },
};

export const TwoElementsSpecificIconsCenterDark: Story = {
  name: '🟢 2 Elements - Specific Icons - Center - Dark',
  args: {
    benefits: [
      {
        icon: 'fas fa-truck-fast',
        iconType: 'fontawesome' as const,
        title: 'Free Shipping',
        description: 'On orders over $100',
      },
      {
        icon: 'fas fa-rotate-left',
        iconType: 'fontawesome' as const,
        title: 'Easy Returns',
        description: '30-day return policy',
      },
    ],
    columns: 2,
    backgroundColor: '#000000',
    titleColor: '#ffffff',
    descriptionColor: '#cccccc',
    iconColor: '#ffffff',
    textAlign: 'center',
    iconSize: '28px',
  },
};

// ===== 3 ELEMENTS =====

export const ThreeElementsSpecificIconsCenterLight: Story = {
  name: '🟢 3 Elements - Specific Icons - Center - Light',
  args: {
    benefits: [
      {
        icon: 'fas fa-truck-fast',
        iconType: 'fontawesome' as const,
        title: 'Free Shipping',
        description: 'On orders over $100',
      },
      {
        icon: 'fas fa-rotate-left',
        iconType: 'fontawesome' as const,
        title: 'Easy Returns',
        description: '30-day return policy',
      },
      {
        icon: 'fas fa-lock',
        iconType: 'fontawesome' as const,
        title: 'Secure Payment',
        description: 'Encrypted & safe',
      },
    ],
    columns: 3,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    iconSize: '28px',
  },
};

export const ThreeElementsSpecificIconsCenterDark: Story = {
  name: '🟢 3 Elements - Specific Icons - Center - Dark',
  args: {
    benefits: [
      {
        icon: 'fas fa-truck-fast',
        iconType: 'fontawesome' as const,
        title: 'Free Shipping',
        description: 'On orders over $100',
      },
      {
        icon: 'fas fa-rotate-left',
        iconType: 'fontawesome' as const,
        title: 'Easy Returns',
        description: '30-day return policy',
      },
      {
        icon: 'fas fa-lock',
        iconType: 'fontawesome' as const,
        title: 'Secure Payment',
        description: 'Encrypted & safe',
      },
    ],
    columns: 3,
    backgroundColor: '#000000',
    titleColor: '#ffffff',
    descriptionColor: '#cccccc',
    iconColor: '#ffffff',
    textAlign: 'center',
    iconSize: '28px',
  },
};

export const ThreeElementsCheckIconsCenterLight: Story = {
  name: '🟢 3 Elements - Check Icons - Center - Light',
  args: {
    benefits: [
      {
        icon: 'fas fa-check',
        iconType: 'fontawesome' as const,
        title: 'Free Shipping',
        description: 'On all orders',
      },
      {
        icon: 'fas fa-check',
        iconType: 'fontawesome' as const,
        title: 'Easy Returns',
        description: '30-day policy',
      },
      {
        icon: 'fas fa-check',
        iconType: 'fontawesome' as const,
        title: 'Secure Payment',
        description: 'Encrypted & safe',
      },
    ],
    columns: 3,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    iconSize: '24px',
  },
};

export const ThreeElementsNoIconsCenterLight: Story = {
  name: '🟢 3 Elements - No Icons - Center - Light',
  args: {
    benefits: [
      {
        icon: '',
        title: 'Free Shipping',
        description: 'On orders over $100',
      },
      {
        icon: '',
        title: 'Easy Returns',
        description: '30-day return policy',
      },
      {
        icon: '',
        title: 'Secure Payment',
        description: 'Encrypted & safe',
      },
    ],
    columns: 3,
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
};

export const ThreeElementsIconsCircleCenterLight: Story = {
  name: '🟢 3 Elements - Icons Circle - Center - Light',
  args: {
    benefits: [
      {
        icon: 'fas fa-truck-fast',
        iconType: 'fontawesome' as const,
        title: 'Free Shipping',
        description: 'On orders over $100',
      },
      {
        icon: 'fas fa-rotate-left',
        iconType: 'fontawesome' as const,
        title: 'Easy Returns',
        description: '30-day return policy',
      },
      {
        icon: 'fas fa-lock',
        iconType: 'fontawesome' as const,
        title: 'Secure Payment',
        description: 'Encrypted & safe',
      },
    ],
    columns: 3,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    iconSize: '24px',
    iconCircle: true,
    iconCircleSize: '60px',
    iconCircleBackgroundColor: '#f5f5f5',
  },
};

// ===== 4 ELEMENTS =====

export const FourElementsSpecificIconsCenterLight: Story = {
  name: '🟢 4 Elements - Specific Icons - Center - Light',
  args: {
    benefits: [
      {
        icon: 'fas fa-truck-fast',
        iconType: 'fontawesome' as const,
        title: 'Free Shipping',
        description: 'On orders over $100',
      },
      {
        icon: 'fas fa-rotate-left',
        iconType: 'fontawesome' as const,
        title: 'Easy Returns',
        description: '30-day return policy',
      },
      {
        icon: 'fas fa-lock',
        iconType: 'fontawesome' as const,
        title: 'Secure Payment',
        description: 'Encrypted & safe',
      },
      {
        icon: 'fas fa-headset',
        iconType: 'fontawesome' as const,
        title: '24/7 Support',
        description: 'Always here to help',
      },
    ],
    columns: 4,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    iconSize: '24px',
  },
};

export const FourElementsCheckIconsCenterLight: Story = {
  name: '🟢 4 Elements - Check Icons - Center - Light',
  args: {
    benefits: [
      {
        icon: 'fas fa-check',
        iconType: 'fontawesome' as const,
        title: 'Free Shipping',
        description: 'On all orders',
      },
      {
        icon: 'fas fa-check',
        iconType: 'fontawesome' as const,
        title: 'Easy Returns',
        description: '30-day policy',
      },
      {
        icon: 'fas fa-check',
        iconType: 'fontawesome' as const,
        title: 'Secure Payment',
        description: 'Encrypted & safe',
      },
      {
        icon: 'fas fa-check',
        iconType: 'fontawesome' as const,
        title: '24/7 Support',
        description: 'Always available',
      },
    ],
    columns: 4,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    iconSize: '20px',
  },
};

export const FourElementsIconsCircleCenterLight: Story = {
  name: '🟢 4 Elements - Icons Circle - Center - Light',
  args: {
    benefits: [
      {
        icon: 'fas fa-truck-fast',
        iconType: 'fontawesome' as const,
        title: 'Free Shipping',
        description: 'On orders over $100',
      },
      {
        icon: 'fas fa-rotate-left',
        iconType: 'fontawesome' as const,
        title: 'Easy Returns',
        description: '30-day return policy',
      },
      {
        icon: 'fas fa-lock',
        iconType: 'fontawesome' as const,
        title: 'Secure Payment',
        description: 'Encrypted & safe',
      },
      {
        icon: 'fas fa-headset',
        iconType: 'fontawesome' as const,
        title: '24/7 Support',
        description: 'Always here to help',
      },
    ],
    columns: 4,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    iconSize: '20px',
    iconCircle: true,
    iconCircleSize: '50px',
    iconCircleBackgroundColor: '#f5f5f5',
  },
};

