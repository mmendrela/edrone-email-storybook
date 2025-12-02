import type { Meta, StoryObj } from '@storybook/react';
import { NumberedList } from '../components/NumberedList';

const meta: Meta<typeof NumberedList> = {
  title: 'Email Components/🟢 NumberedList',
  component: NumberedList,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    numberBackgroundColor: { control: 'color' },
    numberTextColor: { control: 'color' },
    titleColor: { control: 'color' },
    descriptionColor: { control: 'color' },
    padding: { control: 'text' },
    numberSize: { control: 'text' },
    numberFontSize: { control: 'text' },
    numberFontWeight: { control: 'number' },
    numberBorderRadius: { control: 'text' },
    numberBorder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof NumberedList>;

const defaultItems = [
  {
    title: 'Zarejestruj się',
    description: 'Stwórz konto w kilka minut i zyskaj dostęp do wszystkich funkcji.',
  },
  {
    title: 'Wybierz plan',
    description: 'Dostosuj subskrypcję do swoich potrzeb i budżetu.',
  },
  {
    title: 'Rozpocznij naukę',
    description: 'Zacznij korzystać z platformy i osiągaj swoje cele.',
  },
];

// ===== READY TO DEVELOP =====

export const LightBackground: Story = {
  name: '🟢 Light Background',
  args: {
    items: defaultItems,
    backgroundColor: '#ffffff',
    numberBackgroundColor: '#3498db',
    numberTextColor: '#ffffff',
    titleColor: '#000000',
    descriptionColor: '#666666',
    padding: '24px',
  },
};

export const DarkBackground: Story = {
  name: '🟢 Dark Background',
  args: {
    items: defaultItems,
    backgroundColor: '#000000',
    numberBackgroundColor: '#3498db',
    numberTextColor: '#ffffff',
    titleColor: '#ffffff',
    descriptionColor: '#cccccc',
    padding: '24px',
  },
};

export const ColoredBackground: Story = {
  name: '🟢 Colored Background',
  args: {
    items: defaultItems,
    backgroundColor: '#3498db',
    numberBackgroundColor: '#ffffff',
    numberTextColor: '#3498db',
    titleColor: '#ffffff',
    descriptionColor: '#f0f8ff',
    padding: '24px',
  },
};

export const SquareBadges: Story = {
  name: '🟢 Square Badges',
  args: {
    items: defaultItems,
    backgroundColor: '#ffffff',
    numberBackgroundColor: '#000000',
    numberTextColor: '#ffffff',
    titleColor: '#000000',
    descriptionColor: '#666666',
    padding: '24px',
    numberBorderRadius: '4px',
    numberSize: '32px',
    numberFontSize: '16px',
    numberFontWeight: 700,
  },
};

export const OutlineCircles: Story = {
  name: '🟢 Outline Circles',
  args: {
    items: defaultItems,
    backgroundColor: '#ffffff',
    numberBackgroundColor: 'transparent',
    numberTextColor: '#3498db',
    titleColor: '#000000',
    descriptionColor: '#666666',
    padding: '24px',
    numberSize: '36px',
    numberFontSize: '16px',
    numberFontWeight: 600,
    numberBorderRadius: '9999px',
    numberBorder: '2px solid #3498db',
  },
};

export const RoundedMinimal: Story = {
  name: '🟢 Rounded Minimal',
  args: {
    items: defaultItems,
    backgroundColor: '#ffffff',
    numberBackgroundColor: '#f0f0f0',
    numberTextColor: '#000000',
    titleColor: '#000000',
    descriptionColor: '#666666',
    padding: '24px',
    numberSize: '28px',
    numberFontSize: '14px',
    numberFontWeight: 600,
    numberBorderRadius: '8px',
  },
};
