import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from '../components/Banner';

const meta: Meta<typeof Banner> = {
  title: 'Email Components/🟢 Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    border: { control: 'text' },
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

// ===== READY TO DEVELOP =====

export const SolidBackground: Story = {
  name: '🟢 Solid Background',
  args: {
    text: 'FREE SHIPPING ON ALL ORDERS OVER $50',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const WithStroke: Story = {
  name: '🟢 With Stroke',
  args: {
    text: 'NEW ARRIVALS - SHOP THE LATEST COLLECTION',
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '2px solid #000000',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const TextOnly: Story = {
  name: '🟢 Text Only',
  args: {
    text: 'Limited Time Offer - Up to 50% Off',
    backgroundColor: 'transparent',
    color: '#000000',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
  },
};

export const SolidBackgroundWithCode: Story = {
  name: '🟢 Solid Background + Code',
  args: {
    text: 'Use code <strong>SAVE20</strong> for 20% off your order',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const WithStrokeWithCode: Story = {
  name: '🟢 With Stroke + Code',
  args: {
    text: 'Get 30% off with code <strong>FASHION30</strong>',
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '2px solid #000000',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export const TextOnlyWithCode: Story = {
  name: '🟢 Text Only + Code',
  args: {
    text: 'Use <strong>WELCOME15</strong> for 15% off your first order',
    backgroundColor: 'transparent',
    color: '#000000',
    padding: '12px 25px',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
  },
};

