import type { Meta, StoryObj } from '@storybook/react';
import { CountdownTimer } from '../components/CountdownTimer';

const meta: Meta<typeof CountdownTimer> = {
  title: 'Email Components/🟢 CountdownTimer',
  component: CountdownTimer,
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
    days: { control: 'number' },
    hours: { control: 'number' },
    minutes: { control: 'number' },
    seconds: { control: 'number' },
    backgroundColor: { control: 'color' },
    boxBackgroundColor: { control: 'color' },
    boxTextColor: { control: 'color' },
    boxLabelColor: { control: 'color' },
    titleColor: { control: 'color' },
    subtitleColor: { control: 'color' },
    style: {
      control: { type: 'radio' },
      options: ['default', 'bold', 'minimal', 'outlined', 'gradient'],
    },
    layout: {
      control: { type: 'radio' },
      options: ['horizontal', 'compact'],
    },
    showLabels: { control: 'boolean' },
    showDays: { control: 'boolean' },
    showSeconds: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof CountdownTimer>;

// ===== READY TO DEVELOP =====

export const Modern: Story = {
  name: '🟢 Modern',
  args: {
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 48,
    title: 'Promocja kończy się za:',
    subtitle: 'Nie przegap ostatniej szansy na zakupy!',
    style: 'default',
    backgroundColor: '#ffffff',
    boxBackgroundColor: '#3498db',
    boxTextColor: '#ffffff',
  },
};

export const CleanOutlined: Story = {
  name: '🟢 Clean Outlined',
  args: {
    days: 3,
    hours: 12,
    minutes: 30,
    seconds: 0,
    title: 'Do końca wyprzedaży pozostało:',
    subtitle: 'Skorzystaj z wyjątkowych rabatów',
    style: 'outlined',
    backgroundColor: '#ffffff',
  },
};

export const MinimalLight: Story = {
  name: '🟢 Minimal Light',
  args: {
    hours: 12,
    minutes: 45,
    title: 'Flash Sale kończy się za:',
    subtitle: 'Limitowana oferta - tylko dziś!',
    style: 'minimal',
    showDays: false,
    showSeconds: false,
    backgroundColor: '#ffffff',
  },
};

export const OutlinedDark: Story = {
  name: '🟢 Outlined Dark',
  args: {
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 48,
    title: 'Promocja kończy się za:',
    subtitle: 'Nie przegap ostatniej szansy na zakupy!',
    style: 'default',
    backgroundColor: '#000000',
    boxBackgroundColor: 'transparent',
    boxTextColor: '#ffffff',
    titleColor: '#ffffff',
    subtitleColor: '#cccccc',
  },
};

export const MinimalDark: Story = {
  name: '🟢 Minimal Dark',
  args: {
    hours: 12,
    minutes: 45,
    title: 'Flash Sale kończy się za:',
    subtitle: 'Limitowana oferta - tylko dziś!',
    style: 'default',
    showDays: false,
    showSeconds: false,
    backgroundColor: '#000000',
    boxBackgroundColor: '#1a1a1a',
    boxTextColor: '#ffffff',
    titleColor: '#ffffff',
    subtitleColor: '#cccccc',
  },
};
