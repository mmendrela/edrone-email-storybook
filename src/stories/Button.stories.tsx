import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Email Components/🟢 Button',
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

// ===== READY TO DEVELOP =====

// ===== BIG SIZE =====

export const BigSolidNoIconSharp: Story = {
  name: '🟢 Big - Solid - No Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '16px 40px',
    borderRadius: '0px',
    fontSize: '15px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const BigSolidIconSharp: Story = {
  name: '🟢 Big - Solid - Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '16px 40px',
    borderRadius: '0px',
    fontSize: '15px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    arrow: 'right',
  },
};

export const BigStrokeNoIconSharp: Story = {
  name: '🟢 Big - Stroke - No Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    borderColor: '#000000',
    borderWidth: '2px',
    padding: '16px 40px',
    borderRadius: '0px',
    fontSize: '15px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const BigStrokeIconSharp: Story = {
  name: '🟢 Big - Stroke - Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    borderColor: '#000000',
    borderWidth: '2px',
    padding: '16px 40px',
    borderRadius: '0px',
    fontSize: '15px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    arrow: 'right',
  },
};

export const BigTextNoIconSharp: Story = {
  name: '🟢 Big - Text - No Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    padding: '8px 0px',
    borderRadius: '0px',
    fontSize: '15px',
    fontWeight: '400',
    align: 'center',
    textDecoration: 'underline',
    border: 'none',
  },
};

export const BigTextIconSharp: Story = {
  name: '🟢 Big - Text - Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    padding: '8px 0px',
    borderRadius: '0px',
    fontSize: '15px',
    fontWeight: '400',
    align: 'center',
    textDecoration: 'underline',
    border: 'none',
    arrow: 'right',
  },
};

// ===== SMALL SIZE =====

export const SmallSolidNoIconSharp: Story = {
  name: '🟢 Small - Solid - No Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '12px 28px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const SmallSolidIconSharp: Story = {
  name: '🟢 Small - Solid - Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '12px 28px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    arrow: 'right',
  },
};

export const SmallStrokeNoIconSharp: Story = {
  name: '🟢 Small - Stroke - No Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    borderColor: '#000000',
    borderWidth: '2px',
    padding: '12px 28px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const SmallStrokeIconSharp: Story = {
  name: '🟢 Small - Stroke - Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    borderColor: '#000000',
    borderWidth: '2px',
    padding: '12px 28px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    arrow: 'right',
  },
};

export const SmallTextNoIconSharp: Story = {
  name: '🟢 Small - Text - No Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    padding: '6px 0px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '400',
    align: 'center',
    textDecoration: 'underline',
    border: 'none',
  },
};

export const SmallTextIconSharp: Story = {
  name: '🟢 Small - Text - Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: 'transparent',
    color: '#000000',
    padding: '6px 0px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '400',
    align: 'center',
    textDecoration: 'underline',
    border: 'none',
    arrow: 'right',
  },
};

// ===== ROUNDED CORNERS =====

export const BigSolidNoIconRounded: Story = {
  name: '🟢 Big - Solid - No Icon - Rounded',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '16px 40px',
    borderRadius: '6px',
    fontSize: '15px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const SmallSolidNoIconRounded: Story = {
  name: '🟢 Small - Solid - No Icon - Rounded',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '12px 28px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

// ===== GHOST (LIGHT BACKGROUND) =====

export const BigGhostNoIconSharp: Story = {
  name: '🟢 Big - Ghost - No Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#f5f5f5',
    color: '#000000',
    padding: '16px 40px',
    borderRadius: '0px',
    fontSize: '15px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: 'none',
  },
};

export const BigGhostIconSharp: Story = {
  name: '🟢 Big - Ghost - Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#f5f5f5',
    color: '#000000',
    padding: '16px 40px',
    borderRadius: '0px',
    fontSize: '15px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: 'none',
    arrow: 'right',
  },
};

export const SmallGhostNoIconSharp: Story = {
  name: '🟢 Small - Ghost - No Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#f5f5f5',
    color: '#000000',
    padding: '12px 28px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: 'none',
  },
};

export const SmallGhostIconSharp: Story = {
  name: '🟢 Small - Ghost - Icon - Sharp',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#f5f5f5',
    color: '#000000',
    padding: '12px 28px',
    borderRadius: '0px',
    fontSize: '13px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: 'none',
    arrow: 'right',
  },
};

// ===== PILL SHAPE =====

export const BigSolidNoIconPill: Story = {
  name: '🟢 Big - Solid - No Icon - Pill',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '16px 40px',
    borderRadius: '30px',
    fontSize: '15px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const SmallSolidNoIconPill: Story = {
  name: '🟢 Small - Solid - No Icon - Pill',
  args: {
    text: 'Shop Now',
    href: '#',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '12px 28px',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: '600',
    align: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};
