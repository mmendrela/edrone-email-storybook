import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../components/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Email Components/🟢 Divider',
  component: Divider,
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
    borderColor: { control: 'color' },
    borderWidth: { control: 'text' },
    borderStyle: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted'],
    },
    width: { control: 'text' },
    padding: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

// ===== READY TO DEVELOP =====

export const Solid: Story = {
  name: '🟢 Solid',
  args: {
    borderColor: '#cccccc',
    borderWidth: '1px',
    borderStyle: 'solid',
    width: '100%',
    padding: '20px 0',
    backgroundColor: 'transparent',
  },
};

export const Dashed: Story = {
  name: '🟢 Dashed',
  args: {
    borderColor: '#cccccc',
    borderWidth: '1px',
    borderStyle: 'dashed',
    width: '100%',
    padding: '20px 0',
    backgroundColor: 'transparent',
  },
};
