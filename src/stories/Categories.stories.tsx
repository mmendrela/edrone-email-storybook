import type { Meta, StoryObj } from '@storybook/react';
import { Categories } from '../components/Categories';

const meta: Meta<typeof Categories> = {
  title: 'Email Components/🟢 Categories',
  component: Categories,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    separatorColor: { control: 'color' },
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
    separator: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Categories>;

// ===== READY TO DEVELOP =====

const twoCategories = [
  { label: 'Women', href: '#' },
  { label: 'Men', href: '#' },
];

const threeCategories = [
  { label: 'Women', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Sale', href: '#' },
];

const fourCategories = [
  { label: 'Women', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Sale', href: '#' },
];

const fiveCategories = [
  { label: 'New In', href: '#' },
  { label: 'Women', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Sale', href: '#' },
];

// ===== 2 ELEMENTS =====

export const TwoElementsDotLight: Story = {
  name: '🟢 2 Elements - Dot - Light',
  args: {
    categories: twoCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '•',
  },
};

export const TwoElementsLineLight: Story = {
  name: '🟢 2 Elements - Line - Light',
  args: {
    categories: twoCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '|',
  },
};

export const TwoElementsSlashLight: Story = {
  name: '🟢 2 Elements - Slash - Light',
  args: {
    categories: twoCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '/',
  },
};

export const TwoElementsSpaceLight: Story = {
  name: '🟢 2 Elements - Space - Light',
  args: {
    categories: twoCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '',
  },
};

// ===== 3 ELEMENTS =====

export const ThreeElementsDotLight: Story = {
  name: '🟢 3 Elements - Dot - Light',
  args: {
    categories: threeCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '•',
  },
};

export const ThreeElementsLineLight: Story = {
  name: '🟢 3 Elements - Line - Light',
  args: {
    categories: threeCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '|',
  },
};

export const ThreeElementsSlashLight: Story = {
  name: '🟢 3 Elements - Slash - Light',
  args: {
    categories: threeCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '/',
  },
};

export const ThreeElementsSpaceLight: Story = {
  name: '🟢 3 Elements - Space - Light',
  args: {
    categories: threeCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '',
  },
};

// ===== 4 ELEMENTS =====

export const FourElementsDotLight: Story = {
  name: '🟢 4 Elements - Dot - Light',
  args: {
    categories: fourCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '•',
  },
};

export const FourElementsLineLight: Story = {
  name: '🟢 4 Elements - Line - Light',
  args: {
    categories: fourCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '|',
  },
};

export const FourElementsSlashLight: Story = {
  name: '🟢 4 Elements - Slash - Light',
  args: {
    categories: fourCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '/',
  },
};

export const FourElementsSpaceLight: Story = {
  name: '🟢 4 Elements - Space - Light',
  args: {
    categories: fourCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '',
  },
};

// ===== 5 ELEMENTS =====

export const FiveElementsDotLight: Story = {
  name: '🟢 5 Elements - Dot - Light',
  args: {
    categories: fiveCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '11px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '•',
  },
};

export const FiveElementsLineLight: Story = {
  name: '🟢 5 Elements - Line - Light',
  args: {
    categories: fiveCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '11px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '|',
  },
};

export const FiveElementsSlashLight: Story = {
  name: '🟢 5 Elements - Slash - Light',
  args: {
    categories: fiveCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '11px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '/',
  },
};

export const FiveElementsSpaceLight: Story = {
  name: '🟢 5 Elements - Space - Light',
  args: {
    categories: fiveCategories,
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 25px',
    fontSize: '11px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '',
  },
};

// ===== DARK BACKGROUND =====

export const ThreeElementsDotDark: Story = {
  name: '🟢 3 Elements - Dot - Dark',
  args: {
    categories: threeCategories,
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '•',
  },
};

export const ThreeElementsLineDark: Story = {
  name: '🟢 3 Elements - Line - Dark',
  args: {
    categories: threeCategories,
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '|',
  },
};

export const ThreeElementsSlashDark: Story = {
  name: '🟢 3 Elements - Slash - Dark',
  args: {
    categories: threeCategories,
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '/',
  },
};

export const ThreeElementsSpaceDark: Story = {
  name: '🟢 3 Elements - Space - Dark',
  args: {
    categories: threeCategories,
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '15px 25px',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    separator: '',
  },
};
