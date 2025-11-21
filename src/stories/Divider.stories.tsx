import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../components/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Email Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
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

export const Default: Story = {
  args: {
    borderColor: '#cccccc',
    borderWidth: '1px',
    borderStyle: 'solid',
    width: '100%',
    padding: '20px 25px',
    backgroundColor: '#fff',
  },
};

export const Dashed: Story = {
  args: {
    ...Default.args,
    borderStyle: 'dashed',
  },
};

export const Dotted: Story = {
  args: {
    ...Default.args,
    borderStyle: 'dotted',
  },
};

export const Thick: Story = {
  args: {
    ...Default.args,
    borderWidth: '2px',
    borderColor: '#999999',
  },
};

export const ColoredDivider: Story = {
  args: {
    ...Default.args,
    borderColor: '#3498db',
    borderWidth: '2px',
  },
};

export const ShortDivider: Story = {
  args: {
    ...Default.args,
    width: '50%',
  },
};

export const WithPadding: Story = {
  args: {
    ...Default.args,
    padding: '30px 25px',
  },
};
