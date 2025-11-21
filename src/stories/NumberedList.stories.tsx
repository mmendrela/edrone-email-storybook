import type { Meta, StoryObj } from '@storybook/react';
import { NumberedList } from '../components/NumberedList';

const meta: Meta<typeof NumberedList> = {
  title: 'Email Components/NumberedList',
  component: NumberedList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    numberBackgroundColor: { control: 'color' },
    numberTextColor: { control: 'color' },
    titleColor: { control: 'color' },
    descriptionColor: { control: 'color' },
    padding: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof NumberedList>;

const exerciseItems = [
  {
    title: 'Rozciąganie karku',
    description: 'Pochyl głowę w bok, trzymaj 20–30 sekund, powtórz na drugą stronę.',
  },
  {
    title: 'Krążenia ramion',
    description: 'Wykonaj 10 powolnych krążeń w przód i 10 w tył, aby rozluźnić barki.',
  },
  {
    title: 'Rozciąganie łydek',
    description: 'Postaw jedną stopę do przodu, zegnij kolano i przytrzymaj przez 20–30 sekund.',
  },
];

const stepsItems = [
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

const tipsItems = [
  {
    title: 'Pij regularnie wodę',
    description: 'Nawodnienie organizmu jest kluczowe dla zdrowia.',
  },
  {
    title: 'Jedz więcej warzyw',
    description: 'Warzywa dostarczają niezbędnych witamin i minerałów.',
  },
  {
    title: 'Regularny sen',
    description: 'Wyśpij się 7-8 godzin każdej nocy dla lepszego samopoczucia.',
  },
  {
    title: 'Aktywność fizyczna',
    description: 'Minimum 30 minut ruchu dziennie poprawia zdrowie.',
  },
  {
    title: 'Redukcja stresu',
    description: 'Znajdź czas na relaks i techniki zarządzania stresem.',
  },
];

export const ExerciseList: Story = {
  args: {
    items: exerciseItems,
    backgroundColor: '#f9f9fb',
    numberBackgroundColor: '#ffd403',
    numberTextColor: '#ffffff',
  },
};

export const StepsList: Story = {
  args: {
    items: stepsItems,
    backgroundColor: '#f9f9fb',
    numberBackgroundColor: '#3498db',
    numberTextColor: '#ffffff',
  },
};

export const TipsList: Story = {
  args: {
    items: tipsItems,
    backgroundColor: '#ffffff',
    numberBackgroundColor: '#6AA306',
    numberTextColor: '#121212',
  },
};

export const CustomColors: Story = {
  args: {
    items: exerciseItems,
    backgroundColor: '#e8f5e9',
    numberBackgroundColor: '#4caf50',
    numberTextColor: '#ffffff',
    titleColor: '#1b5e20',
    descriptionColor: '#2e7d32',
  },
};

export const CompactPadding: Story = {
  args: {
    items: stepsItems,
    backgroundColor: '#f9f9fb',
    numberBackgroundColor: '#ff5722',
    numberTextColor: '#ffffff',
    padding: '16px',
  },
};

export const LargePadding: Story = {
  args: {
    items: tipsItems,
    backgroundColor: '#fff3e0',
    numberBackgroundColor: '#ff9800',
    numberTextColor: '#ffffff',
    padding: '32px',
  },
};
