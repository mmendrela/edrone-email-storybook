import type { Meta, StoryObj } from '@storybook/react';
import { DiscountCode } from '../components/DiscountCode';

const meta: Meta<typeof DiscountCode> = {
  title: 'Email Components/🟢 DiscountCode',
  component: DiscountCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    codeBackgroundColor: { control: 'color' },
    codeTextColor: { control: 'color' },
    titleColor: { control: 'color' },
    descriptionColor: { control: 'color' },
    borderColor: { control: 'color' },
    style: {
      control: { type: 'radio' },
      options: ['default', 'outlined', 'gradient', 'minimal', 'bold'],
    },
    layout: {
      control: { type: 'radio' },
      options: ['text-only', 'banner'],
    },
    padding: { control: 'text' },
    showCopyHint: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DiscountCode>;

// ===== READY TO DEVELOP =====

// ===== SMALL =====

export const SmallLight: Story = {
  name: '🟢 Small - Light',
  args: {
    code: 'WELCOME15',
    title: 'Welcome Discount',
    description: 'Start shopping with 15% off your first order',
    layout: 'text-only',
    backgroundColor: '#ffffff',
    codeBackgroundColor: '#f5f5f5',
    codeTextColor: '#000000',
    titleColor: '#000000',
    descriptionColor: '#666666',
    borderColor: '#e0e0e0',
    style: 'outlined',
    padding: '12px 20px',
    showCopyHint: false,
  },
};

export const SmallDark: Story = {
  name: '🟢 Small - Dark',
  args: {
    code: 'WELCOME15',
    title: 'Welcome Discount',
    description: 'Start shopping with 15% off your first order',
    layout: 'text-only',
    backgroundColor: '#000000',
    codeBackgroundColor: '#1a1a1a',
    codeTextColor: '#ffffff',
    titleColor: '#ffffff',
    descriptionColor: '#cccccc',
    borderColor: '#444444',
    style: 'outlined',
    padding: '12px 24px',
    showCopyHint: false,
  },
};

export const SmallWithDateLight: Story = {
  name: '🟢 Small - With Date - Light',
  args: {
    code: 'FLASH25',
    title: 'Flash Sale',
    description: 'Limited time offer - grab it while you can',
    validUntil: 'Valid until 31.12.2024',
    layout: 'text-only',
    backgroundColor: '#ffffff',
    codeBackgroundColor: '#f5f5f5',
    codeTextColor: '#000000',
    titleColor: '#000000',
    descriptionColor: '#666666',
    borderColor: '#e0e0e0',
    style: 'outlined',
    padding: '12px 20px',
    showCopyHint: false,
  },
};

export const SmallWithDateDark: Story = {
  name: '🟢 Small - With Date - Dark',
  args: {
    code: 'FLASH25',
    title: 'Flash Sale',
    description: 'Limited time offer - grab it while you can',
    validUntil: 'Valid until 31.12.2024',
    layout: 'text-only',
    backgroundColor: '#000000',
    codeBackgroundColor: '#1a1a1a',
    codeTextColor: '#ffffff',
    titleColor: '#ffffff',
    descriptionColor: '#cccccc',
    borderColor: '#444444',
    style: 'outlined',
    padding: '12px 24px',
    showCopyHint: false,
  },
};

// ===== COMPLEX =====

export const ComplexLight: Story = {
  name: '🟢 Complex - Light',
  args: {
    code: 'SPECIAL50',
    title: 'Special Offer',
    description: 'Get 50% off on your entire purchase with this amazing deal',
    layout: 'banner',
    backgroundColor: '#ffffff',
    codeBackgroundColor: '#f5f5f5',
    codeTextColor: '#000000',
    titleColor: '#000000',
    descriptionColor: '#666666',
    borderColor: '#e0e0e0',
    style: 'default',
    padding: '40px 48px',
    showCopyHint: true,
  },
};

export const ComplexDark: Story = {
  name: '🟢 Complex - Dark',
  args: {
    code: 'SPECIAL50',
    title: 'Special Offer',
    description: 'Get 50% off on your entire purchase with this amazing deal',
    layout: 'banner',
    backgroundColor: '#000000',
    codeBackgroundColor: '#1a1a1a',
    codeTextColor: '#ffffff',
    titleColor: '#ffffff',
    descriptionColor: '#cccccc',
    borderColor: '#333333',
    style: 'default',
    padding: '40px 60px',
    showCopyHint: true,
  },
};

export const ComplexWithDateLight: Story = {
  name: '🟢 Complex - With Date - Light',
  args: {
    code: 'BLACKFRIDAY',
    title: 'Black Friday Sale',
    description: 'The biggest sale of the year - save up to 60% on everything',
    validUntil: 'Valid until 30.11.2024',
    layout: 'banner',
    backgroundColor: '#ffffff',
    codeBackgroundColor: '#f5f5f5',
    codeTextColor: '#000000',
    titleColor: '#000000',
    descriptionColor: '#666666',
    borderColor: '#e0e0e0',
    style: 'default',
    padding: '40px 48px',
    showCopyHint: true,
  },
};

export const ComplexWithDateDark: Story = {
  name: '🟢 Complex - With Date - Dark',
  args: {
    code: 'BLACKFRIDAY',
    title: 'Black Friday Sale',
    description: 'The biggest sale of the year - save up to 60% on everything',
    validUntil: 'Valid until 30.11.2024',
    layout: 'banner',
    backgroundColor: '#000000',
    codeBackgroundColor: '#1a1a1a',
    codeTextColor: '#ffffff',
    titleColor: '#ffffff',
    descriptionColor: '#cccccc',
    borderColor: '#333333',
    style: 'default',
    padding: '40px 60px',
    showCopyHint: true,
  },
};
