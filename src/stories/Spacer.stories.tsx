import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from '../components/Spacer';

const meta: Meta<typeof Spacer> = {
  title: 'Email Components/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    height: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Small: Story = {
  args: {
    height: '10px',
    backgroundColor: '#fff',
  },
};

export const Medium: Story = {
  args: {
    height: '20px',
    backgroundColor: '#fff',
  },
};

export const Large: Story = {
  args: {
    height: '40px',
    backgroundColor: '#fff',
  },
};

export const ExtraLarge: Story = {
  args: {
    height: '60px',
    backgroundColor: '#fff',
  },
};

export const WithBackground: Story = {
  args: {
    height: '30px',
    backgroundColor: '#f5f5f5',
  },
};
