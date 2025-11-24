import type { Meta, StoryObj } from '@storybook/react';
import { CountdownTimer } from '../components/CountdownTimer';

const meta: Meta<typeof CountdownTimer> = {
  title: 'Email Components/CountdownTimer',
  component: CountdownTimer,
  parameters: {
    layout: 'centered',
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

// ===== BASIC STYLES =====

export const Default: Story = {
  args: {
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 48,
    title: 'Promocja kończy się za:',
    style: 'default',
  },
};

export const Bold: Story = {
  args: {
    days: 1,
    hours: 8,
    minutes: 23,
    seconds: 15,
    title: 'BLACK FRIDAY KOŃCZY SIĘ ZA:',
    subtitle: 'Nie przegap ostatniej szansy na zakupy!',
    style: 'bold',
  },
};

export const Gradient: Story = {
  args: {
    hours: 23,
    minutes: 45,
    seconds: 30,
    title: 'Flash Sale kończy się za:',
    subtitle: 'Limitowana oferta - tylko dziś!',
    style: 'gradient',
    showDays: false,
  },
};

export const Outlined: Story = {
  args: {
    days: 3,
    hours: 12,
    minutes: 0,
    seconds: 0,
    title: 'Do końca wyprzedaży pozostało:',
    style: 'outlined',
  },
};

export const Minimal: Story = {
  args: {
    hours: 5,
    minutes: 30,
    seconds: 0,
    title: 'Oferta wygasa za:',
    style: 'minimal',
    showDays: false,
  },
};

// ===== WITHOUT ELEMENTS =====

export const WithoutSeconds: Story = {
  args: {
    days: 2,
    hours: 14,
    minutes: 35,
    title: 'Promocja kończy się za:',
    style: 'default',
    showSeconds: false,
  },
};

export const WithoutDays: Story = {
  args: {
    hours: 18,
    minutes: 45,
    seconds: 20,
    title: 'Ostatnie godziny promocji:',
    style: 'bold',
    showDays: false,
  },
};

export const HoursOnly: Story = {
  args: {
    hours: 6,
    minutes: 0,
    title: 'Zostało tylko:',
    subtitle: 'Pośpiesz się!',
    style: 'gradient',
    showDays: false,
    showSeconds: false,
  },
};

export const WithoutLabels: Story = {
  args: {
    days: 1,
    hours: 12,
    minutes: 30,
    seconds: 45,
    title: 'Czas do końca:',
    style: 'default',
    showLabels: false,
  },
};

// ===== COMPACT LAYOUT =====

export const CompactDefault: Story = {
  args: {
    hours: 12,
    minutes: 45,
    seconds: 30,
    title: 'Wyprzedaż kończy się za:',
    layout: 'compact',
    showDays: false,
  },
};

export const CompactBold: Story = {
  args: {
    days: 1,
    hours: 6,
    minutes: 30,
    seconds: 0,
    title: 'Promocja kończy się za:',
    style: 'bold',
    layout: 'compact',
  },
};

// ===== URGENCY EXAMPLES =====

export const LastHour: Story = {
  args: {
    hours: 0,
    minutes: 59,
    seconds: 45,
    title: '⚡ OSTATNIA GODZINA!',
    subtitle: 'To Twoja ostatnia szansa - nie zwlekaj!',
    style: 'bold',
    showDays: false,
  },
};

export const LastMinutes: Story = {
  args: {
    hours: 0,
    minutes: 15,
    seconds: 30,
    title: '🔥 OSTATNIE 15 MINUT!',
    subtitle: 'Promocja kończy się za chwilę!',
    style: 'bold',
    showDays: false,
    backgroundColor: '#000000',
    titleColor: '#ffd403',
    subtitleColor: '#ffffff',
  },
};

export const AlmostOver: Story = {
  args: {
    hours: 0,
    minutes: 5,
    seconds: 0,
    title: '⏰ TYLKO 5 MINUT!',
    subtitle: 'Ostatni moment na skorzystanie z oferty',
    style: 'gradient',
    showDays: false,
  },
};

// ===== E-COMMERCE EXAMPLES =====

export const BlackFriday: Story = {
  args: {
    days: 0,
    hours: 12,
    minutes: 0,
    seconds: 0,
    title: 'BLACK FRIDAY KOŃCZY SIĘ ZA:',
    subtitle: 'Rabaty do -70% - nie przegap!',
    style: 'bold',
    showDays: false,
  },
};

export const CyberMonday: Story = {
  args: {
    days: 0,
    hours: 8,
    minutes: 45,
    seconds: 12,
    title: 'CYBER MONDAY - OSTATNIE GODZINY',
    subtitle: 'Najlepsze oferty roku kończą się dzisiaj',
    style: 'gradient',
    showDays: false,
  },
};

export const FlashSale: Story = {
  args: {
    hours: 3,
    minutes: 0,
    seconds: 0,
    title: '⚡ FLASH SALE - 3 GODZINY',
    subtitle: 'Ekstra -50% na wszystko!',
    style: 'bold',
    showDays: false,
    showSeconds: false,
  },
};

export const WeekendSale: Story = {
  args: {
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0,
    title: 'WEEKEND SALE',
    subtitle: 'Promocja trwa do końca weekendu',
    style: 'minimal',
    showSeconds: false,
  },
};

// ===== SEASONAL EXAMPLES =====

export const ChristmasSale: Story = {
  args: {
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 0,
    title: '🎄 Świąteczna wyprzedaż kończy się za:',
    subtitle: 'Zdąż z zakupem prezentów!',
    style: 'outlined',
    showSeconds: false,
    backgroundColor: '#fff5f5',
    titleColor: '#c41e3a',
  },
};

export const NewYearSale: Story = {
  args: {
    days: 1,
    hours: 18,
    minutes: 45,
    seconds: 0,
    title: '🎉 NOWOROCZNA PROMOCJA',
    subtitle: 'Rozpocznij rok z oszczędnościami!',
    style: 'gradient',
    showSeconds: false,
  },
};

export const ValentinesDay: Story = {
  args: {
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
    title: '❤️ Walentynkowa oferta kończy się za:',
    subtitle: 'Idealne prezenty dla bliskich',
    style: 'outlined',
    showSeconds: false,
    backgroundColor: '#fff0f5',
    titleColor: '#e91e63',
  },
};

export const SummerSale: Story = {
  args: {
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
    title: '☀️ LETNIA WYPRZEDAŻ',
    subtitle: 'Ostatni tydzień promocji!',
    style: 'minimal',
    showSeconds: false,
  },
};

// ===== FASHION EXAMPLES =====

export const FashionWeek: Story = {
  args: {
    days: 4,
    hours: 12,
    minutes: 0,
    seconds: 0,
    title: 'FASHION WEEK SALE',
    subtitle: 'Ekskluzywne rabaty na nową kolekcję',
    style: 'outlined',
    showSeconds: false,
    backgroundColor: '#ffffff',
    titleColor: '#000000',
  },
};

export const SeasonEnd: Story = {
  args: {
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
    title: 'KONIEC SEZONU',
    subtitle: 'Wyprzedaż kolekcji - do -60%',
    style: 'minimal',
    showSeconds: false,
  },
};

export const PrivateSale: Story = {
  args: {
    days: 2,
    hours: 6,
    minutes: 0,
    seconds: 0,
    title: 'PRIVATE SALE',
    subtitle: 'Ekskluzywna oferta dla VIP',
    style: 'outlined',
    showSeconds: false,
    backgroundColor: '#1a1a1a',
    titleColor: '#d4af37',
    subtitleColor: '#cccccc',
    boxBackgroundColor: '#000000',
    boxTextColor: '#d4af37',
  },
};

// ===== CUSTOM COLORS =====

export const RedUrgent: Story = {
  args: {
    hours: 6,
    minutes: 30,
    seconds: 45,
    title: 'PROMOCJA KOŃCZY SIĘ NIEDŁUGO!',
    style: 'default',
    showDays: false,
    backgroundColor: '#fff5f5',
    boxBackgroundColor: '#e74c3c',
    titleColor: '#e74c3c',
  },
};

export const GreenEco: Story = {
  args: {
    days: 3,
    hours: 12,
    minutes: 0,
    seconds: 0,
    title: 'ECO WEEK',
    subtitle: 'Zniżki na produkty ekologiczne',
    style: 'outlined',
    showSeconds: false,
    backgroundColor: '#f0fff4',
    titleColor: '#2d8659',
    subtitleColor: '#4a7c5a',
  },
};

export const PurpleLuxury: Story = {
  args: {
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
    title: 'LUXURY SALE',
    subtitle: 'Premium brands - special prices',
    style: 'gradient',
    showSeconds: false,
  },
};

// ===== MINIMAL VERSIONS =====

export const MinimalClean: Story = {
  args: {
    hours: 12,
    minutes: 30,
    title: 'Oferta kończy się za:',
    style: 'minimal',
    layout: 'compact',
    showDays: false,
    showSeconds: false,
    showLabels: false,
  },
};

export const OnlyTimer: Story = {
  args: {
    days: 1,
    hours: 6,
    minutes: 30,
    seconds: 0,
    style: 'default',
    title: '',
  },
};
