import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from '../components/Spacer';

const meta: Meta<typeof Spacer> = {
  title: 'Email Components/🟢 Spacer',
  component: Spacer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    height: { control: 'text' },
    backgroundColor: { control: 'color' },
    showBorder: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

// ===== READY TO DEVELOP =====

export const Small: Story = {
  name: '🟢 Small (20px)',
  args: {
    height: '20px',
    backgroundColor: 'transparent',
    showBorder: true,
  },
};

export const Medium: Story = {
  name: '🟢 Medium (40px)',
  args: {
    height: '40px',
    backgroundColor: 'transparent',
    showBorder: true,
  },
};

export const Large: Story = {
  name: '🟢 Large (60px)',
  args: {
    height: '60px',
    backgroundColor: 'transparent',
    showBorder: true,
  },
};

export const ExtraLarge: Story = {
  name: '🟢 Extra Large (80px)',
  args: {
    height: '80px',
    backgroundColor: 'transparent',
    showBorder: true,
  },
};
