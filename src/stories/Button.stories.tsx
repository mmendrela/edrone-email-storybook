import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Email Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    padding: { control: 'text' },
    borderRadius: { control: 'text' },
    fontSize: { control: 'text' },
    borderWidth: { control: 'text' },
    letterSpacing: { control: 'text' },
    textTransform: {
      control: { type: 'select' },
      options: ['none', 'uppercase', 'lowercase', 'capitalize'],
    },
    textDecoration: {
      control: { type: 'select' },
      options: ['none', 'underline'],
    },
    arrow: {
      control: { type: 'select' },
      options: ['none', 'right', 'left'],
    },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#3498db',
    color: '#ffffff',
    padding: '10px 25px',
    borderRadius: '4px',
    fontSize: '15px',
    fontWeight: '600',
    align: 'center',
  },
};

export const Success: Story = {
  args: {
    ...Primary.args,
    text: 'Confirm Order',
    backgroundColor: '#2ecc71',
  },
};

export const Danger: Story = {
  args: {
    ...Primary.args,
    text: 'Cancel',
    backgroundColor: '#e74c3c',
  },
};

export const Dark: Story = {
  args: {
    ...Primary.args,
    text: 'View Collection',
    backgroundColor: '#2c3e50',
  },
};

export const LeftAligned: Story = {
  args: {
    ...Primary.args,
    align: 'left',
  },
};

export const RightAligned: Story = {
  args: {
    ...Primary.args,
    align: 'right',
  },
};

export const Rounded: Story = {
  args: {
    ...Primary.args,
    borderRadius: '25px',
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    padding: '10px 25px',
    fontSize: '15px',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    padding: '8px 20px',
    fontSize: '14px',
  },
};

// ===== FASHION/MINIMALIST STYLES =====

export const OutlineBlack: Story = {
  args: {
    text: 'Shop Collection',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    borderColor: '#000000',
    borderWidth: '1px',
    padding: '12px 30px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  },
};

export const OutlineWhite: Story = {
  args: {
    ...OutlineBlack.args,
    text: 'Discover More',
    backgroundColor: 'transparent',
    color: '#ffffff',
    borderColor: '#ffffff',
  },
};

export const MinimalistUppercase: Story = {
  args: {
    text: 'View Details',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '14px 35px',
    borderRadius: '0px',
    fontSize: '12px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
};

export const UnderlineLink: Story = {
  args: {
    text: 'Explore Collection',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    padding: '8px 0px',
    borderRadius: '0px',
    fontSize: '14px',
    fontWeight: '400',
    textDecoration: 'underline',
    border: 'none',
  },
};

export const ArrowRight: Story = {
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '12px 28px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    arrow: 'right',
  },
};

export const ArrowRightOutline: Story = {
  args: {
    text: 'Discover',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    borderColor: '#000000',
    borderWidth: '1px',
    padding: '12px 28px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '400',
    arrow: 'right',
  },
};

export const PillShaped: Story = {
  args: {
    text: 'Add to Cart',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '12px 32px',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export const PillOutline: Story = {
  args: {
    text: 'Learn More',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    borderColor: '#000000',
    borderWidth: '1px',
    padding: '12px 32px',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: '400',
  },
};

export const ThinBorder: Story = {
  args: {
    text: 'CONTINUE SHOPPING',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    borderColor: '#000000',
    borderWidth: '0.5px',
    padding: '14px 40px',
    borderRadius: '0px',
    fontSize: '11px',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
  },
};

export const MinimalGray: Story = {
  args: {
    text: 'View All',
    href: '#',
    backgroundColor: '#f5f5f5',
    color: '#000000',
    padding: '12px 28px',
    borderRadius: '2px',
    fontSize: '13px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const FashionPrimary: Story = {
  args: {
    text: 'Shop Women',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '14px 36px',
    borderRadius: '0px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
};

export const FashionSecondary: Story = {
  args: {
    text: 'Shop Men',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    borderColor: '#000000',
    borderWidth: '1px',
    padding: '14px 36px',
    borderRadius: '0px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
};

export const FullWidthBlack: Story = {
  args: {
    text: 'Complete Purchase',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '16px 0px',
    borderRadius: '0px',
    fontSize: '14px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fullWidth: true,
  },
};

export const SubtleLink: Story = {
  args: {
    text: 'View size guide',
    href: '#',
    backgroundColor: 'transparent',
    color: '#666666',
    padding: '6px 0px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '400',
    textDecoration: 'underline',
    border: 'none',
  },
};
