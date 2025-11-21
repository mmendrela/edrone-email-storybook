import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from '../components/Banner';

const meta: Meta<typeof Banner> = {
  title: 'Email Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
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
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

// ===== PROMO CODES =====

export const PromoCode: Story = {
  args: {
    text: 'Use code <strong>SAVE20</strong> for 20% off your order',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
  },
};

export const PromoCodeUppercase: Story = {
  args: {
    text: 'Get 30% off with code <strong>FASHION30</strong>',
    backgroundColor: '#e74c3c',
    color: '#ffffff',
    padding: '14px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const FlashSale: Story = {
  args: {
    text: '⚡ FLASH SALE: 50% OFF EVERYTHING | CODE: FLASH50',
    backgroundColor: '#ffd403',
    color: '#000000',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  },
};

// ===== FREE SHIPPING =====

export const FreeShipping: Story = {
  args: {
    text: 'Free shipping on orders over $100',
    backgroundColor: '#2ecc71',
    color: '#ffffff',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
  },
};

export const FreeShippingMinimal: Story = {
  args: {
    text: 'FREE WORLDWIDE SHIPPING',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '10px 25px',
    fontSize: '11px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
};

export const FreeShippingWithLink: Story = {
  args: {
    text: 'Free delivery on all orders',
    backgroundColor: '#f5f5f5',
    color: '#000000',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '400',
    textAlign: 'center',
    href: '#',
  },
};

// ===== ANNOUNCEMENT =====

export const NewCollection: Story = {
  args: {
    text: '✨ New Collection Available Now',
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
  },
};

export const SaleAnnouncement: Story = {
  args: {
    text: 'SUMMER SALE - UP TO 70% OFF',
    backgroundColor: '#ff6b6b',
    color: '#ffffff',
    padding: '14px 25px',
    fontSize: '14px',
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
};

export const LimitedTime: Story = {
  args: {
    text: '⏰ Limited Time Offer - Ends Tonight at Midnight',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
  },
};

// ===== MINIMAL/FASHION =====

export const MinimalBlack: Story = {
  args: {
    text: 'NEW ARRIVALS',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '10px 25px',
    fontSize: '11px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
  },
};

export const MinimalGray: Story = {
  args: {
    text: 'SPRING/SUMMER 2025 COLLECTION',
    backgroundColor: '#f5f5f5',
    color: '#000000',
    padding: '12px 25px',
    fontSize: '11px',
    fontWeight: '400',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
};

export const Subtle: Story = {
  args: {
    text: 'Complimentary gift wrapping on all orders',
    backgroundColor: '#ffffff',
    color: '#666666',
    padding: '10px 25px',
    fontSize: '12px',
    fontWeight: '400',
    textAlign: 'center',
  },
};

// ===== SEASONAL =====

export const Holiday: Story = {
  args: {
    text: '🎄 Holiday Sale: Shop gifts with 25% off',
    backgroundColor: '#c0392b',
    color: '#ffffff',
    padding: '14px 25px',
    fontSize: '13px',
    fontWeight: '600',
    textAlign: 'center',
  },
};

export const BlackFriday: Story = {
  args: {
    text: 'BLACK FRIDAY: UP TO 80% OFF + FREE SHIPPING',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '16px 25px',
    fontSize: '14px',
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
};

// ===== INFO =====

export const ReturnPolicy: Story = {
  args: {
    text: 'Free returns within 30 days',
    backgroundColor: '#ecf0f1',
    color: '#2c3e50',
    padding: '10px 25px',
    fontSize: '12px',
    fontWeight: '400',
    textAlign: 'center',
  },
};

export const CustomerService: Story = {
  args: {
    text: 'Questions? Contact our support team 24/7',
    backgroundColor: '#3498db',
    color: '#ffffff',
    padding: '11px 25px',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
    href: 'mailto:support@example.com',
  },
};
