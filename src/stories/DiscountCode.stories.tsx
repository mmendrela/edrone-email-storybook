import type { Meta, StoryObj } from '@storybook/react';
import { DiscountCode } from '../components/DiscountCode';

const meta: Meta<typeof DiscountCode> = {
  title: 'Email Components/DiscountCode',
  component: DiscountCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    codeBackgroundColor: { control: 'color' },
    codeTextColor: { control: 'color' },
    titleColor: { control: 'color' },
    descriptionColor: { control: 'color' },
    borderColor: { control: 'color' },
    style: {
      control: { type: 'radio' },
      options: ['default', 'outlined', 'gradient', 'minimal', 'bold'],
    },
    showCopyHint: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DiscountCode>;

// ===== BASIC EXAMPLES =====

export const Default: Story = {
  args: {
    code: 'WEEKEND20',
    title: 'Twój kod rabatowy',
    description: 'Użyj kodu przy kasie i otrzymaj 20% zniżki na całe zamówienie',
    validUntil: '31.12.2024',
    style: 'default',
  },
};

export const Outlined: Story = {
  args: {
    code: 'SAVE25',
    title: 'Specjalna oferta dla Ciebie',
    description: 'Otrzymujesz 25% rabatu na wybrane produkty',
    validUntil: '15.12.2024',
    style: 'outlined',
    borderColor: '#6AA306',
  },
};

export const Gradient: Story = {
  args: {
    code: 'FLASH50',
    title: 'Flash Sale!',
    description: 'Tylko dziś - użyj tego kodu i zyskaj 50% zniżki',
    validUntil: '24.11.2024, 23:59',
    style: 'gradient',
  },
};

export const Bold: Story = {
  args: {
    code: 'BLACKFRIDAY',
    title: 'Black Friday 2024',
    description: 'Niezwykła okazja - maksymalna zniżka w tym roku!',
    validUntil: '30.11.2024',
    style: 'bold',
    borderColor: '#ffcc00',
  },
};

export const Minimal: Story = {
  args: {
    code: 'WELCOME10',
    title: 'Witamy w naszym sklepie!',
    description: 'Na początek dajemy Ci 10% rabatu na pierwsze zakupy',
    style: 'minimal',
  },
};

// ===== WITH DISCOUNT AMOUNT =====

export const WithDiscountAmount: Story = {
  args: {
    code: 'MEGA30',
    discountAmount: '-30%',
    title: 'Mega Rabat',
    description: 'Skorzystaj z promocji i zaoszczędź na swoich ulubionych produktach',
    validUntil: '25.12.2024',
    style: 'outlined',
    borderColor: '#e74c3c',
    titleColor: '#e74c3c',
  },
};

export const BigDiscount: Story = {
  args: {
    code: 'SUPER50',
    discountAmount: '50% OFF',
    title: 'Największa wyprzedaż roku',
    description: 'Nie przegap tej okazji - połowa ceny na wszystko!',
    validUntil: '31.12.2024',
    style: 'bold',
    backgroundColor: '#000000',
    titleColor: '#ffffff',
    descriptionColor: '#cccccc',
  },
};

// ===== MINIMAL VARIANTS =====

export const CodeOnly: Story = {
  args: {
    code: 'QUICK15',
    style: 'outlined',
    showCopyHint: false,
  },
};

export const CodeWithTitle: Story = {
  args: {
    code: 'VIP20',
    title: 'Kod VIP dla stałych klientów',
    style: 'gradient',
    showCopyHint: false,
  },
};

// ===== E-COMMERCE EXAMPLES =====

export const FreeShipping: Story = {
  args: {
    code: 'FREESHIP',
    title: 'Darmowa dostawa',
    description: 'Użyj tego kodu i nie płać za przesyłkę',
    validUntil: '31.12.2024',
    style: 'outlined',
    borderColor: '#6AA306',
    titleColor: '#6AA306',
    codeBackgroundColor: '#f0fff0',
  },
};

export const FirstOrder: Story = {
  args: {
    code: 'FIRST15',
    discountAmount: '-15%',
    title: 'Twoje pierwsze zamówienie',
    description: 'Cieszymy się, że z nami jesteś! Oto kod powitalny',
    validUntil: '30 dni od rejestracji',
    style: 'minimal',
    backgroundColor: '#fff9f0',
    borderColor: '#ffb84d',
  },
};

export const LoyaltyReward: Story = {
  args: {
    code: 'THANKYOU25',
    discountAmount: '-25%',
    title: 'Dziękujemy za lojalność!',
    description: 'Jesteś z nami już rok - odbierz specjalny rabat',
    validUntil: '15.01.2025',
    style: 'bold',
    backgroundColor: '#f5f0ff',
    borderColor: '#9b59b6',
  },
};

// ===== SEASONAL EXAMPLES =====

export const ChristmasSale: Story = {
  args: {
    code: 'XMAS2024',
    discountAmount: '🎄 -40%',
    title: 'Świąteczna wyprzedaż',
    description: 'Przygotuj prezenty z rabatem - najlepsza oferta grudnia!',
    validUntil: '24.12.2024',
    style: 'gradient',
  },
};

export const NewYear: Story = {
  args: {
    code: 'NEWYEAR2025',
    discountAmount: '🎉 -35%',
    title: 'Noworoczna promocja',
    description: 'Rozpocznij nowy rok z oszczędnościami',
    validUntil: '15.01.2025',
    style: 'outlined',
    borderColor: '#3498db',
    titleColor: '#3498db',
  },
};

export const ValentinesDay: Story = {
  args: {
    code: 'LOVE20',
    discountAmount: '❤️ -20%',
    title: 'Walentynkowa niespodzianka',
    description: 'Podaruj bliskim coś wyjątkowego w specjalnej cenie',
    validUntil: '14.02.2025',
    style: 'bold',
    backgroundColor: '#ffe6f0',
    codeBackgroundColor: '#ff1744',
    codeTextColor: '#ffffff',
    titleColor: '#e91e63',
    borderColor: '#ff4081',
  },
};

// ===== FASHION/LIFESTYLE =====

export const FashionWeekend: Story = {
  args: {
    code: 'STYLE30',
    discountAmount: '-30%',
    title: 'Weekend z modą',
    description: 'Odśwież swoją garderobę - rabat na nową kolekcję',
    validUntil: '26.11.2024',
    style: 'minimal',
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    codeTextColor: '#000000',
  },
};

export const LuxuryDiscount: Story = {
  args: {
    code: 'LUXURY15',
    title: 'Ekskluzywna oferta',
    description: 'Dla wybranych klientów - rabat na kolekcję premium',
    validUntil: '31.12.2024',
    style: 'bold',
    backgroundColor: '#1a1a1a',
    titleColor: '#ffffff',
    descriptionColor: '#cccccc',
    borderColor: '#d4af37',
    showCopyHint: false,
  },
};

// ===== CUSTOM COLORS =====

export const CustomGreen: Story = {
  args: {
    code: 'GREEN20',
    discountAmount: '-20%',
    title: 'Eco-friendly rabat',
    description: 'Zniżka na produkty ekologiczne',
    validUntil: '30.11.2024',
    style: 'outlined',
    backgroundColor: '#e8f5e9',
    borderColor: '#4caf50',
    titleColor: '#2e7d32',
    codeBackgroundColor: '#ffffff',
  },
};

export const CustomOrange: Story = {
  args: {
    code: 'AUTUMN25',
    discountAmount: '🍂 -25%',
    title: 'Jesienna wyprzedaż',
    description: 'Ciepłe kolory, gorące ceny',
    validUntil: '30.11.2024',
    style: 'outlined',
    backgroundColor: '#fff3e0',
    borderColor: '#ff6f00',
    titleColor: '#e65100',
  },
};
