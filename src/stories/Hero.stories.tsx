import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from '../components/Hero';

const meta: Meta<typeof Hero> = {
  title: 'Email Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    width: { control: { type: 'range', min: 300, max: 800, step: 50 } },
    layout: {
      control: { type: 'select' },
      options: ['image-only', 'overlay', 'text-below', 'split', 'badge', 'gradient', 'compact-center'],
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    textVerticalAlign: {
      control: { type: 'select' },
      options: ['top', 'middle', 'bottom'],
    },
    badgePosition: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
    splitImagePosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

// Note: Using placeholder images as the original base64 images are too large
export const MuveCosy: Story = {
  args: {
    src: '/images/muve-5645-cosy-img7.jpg',
    alt: 'Muve Cosy Banner',
    width: 600,
    backgroundColor: '#fff',
  },
};

export const MuveLookbook: Story = {
  args: {
    src: '/images/muve-5645-lookbook-img8.jpg',
    alt: 'Muve Lookbook Banner',
    width: 600,
    backgroundColor: '#fff',
    href: 'https://example.com',
  },
};

export const MadeInLabCosy: Story = {
  args: {
    src: '/images/madeinlab-12508-cosy-img5.jpg',
    alt: 'Made in Lab Cosy Banner',
    width: 600,
    backgroundColor: '#fff',
  },
};

export const RecmanCosy: Story = {
  args: {
    src: '/images/recman-6167-cosy-img15.jpg',
    alt: 'Recman Cosy Banner',
    width: 600,
    backgroundColor: '#fff',
  },
};

export const WithCustomBackground: Story = {
  args: {
    src: '/images/muve-5645-cosy-img7.jpg',
    alt: 'Product Banner',
    width: 600,
    backgroundColor: '#f0f0f0',
  },
};

// ===== OVERLAY VARIANTS =====

export const OverlayCenter: Story = {
  args: {
    src: '/images/naoko-127592-cosy-img9.jpg',
    alt: 'Fashion Collection',
    width: 600,
    layout: 'overlay',
    title: 'Nowa Kolekcja Wiosna 2025',
    description: 'Odkryj najnowsze trendy i style na nowy sezon',
    ctaText: 'Zobacz kolekcję',
    ctaHref: '#',
    textAlign: 'center',
    textVerticalAlign: 'middle',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
  },
};

export const OverlayTop: Story = {
  args: {
    ...OverlayCenter.args,
    textVerticalAlign: 'top',
    title: 'Limitowana Edycja',
    description: 'Tylko dziś -40% na wybrane produkty',
  },
};

export const OverlayBottom: Story = {
  args: {
    ...OverlayCenter.args,
    textVerticalAlign: 'bottom',
    title: 'Darmowa Dostawa',
    description: 'Na wszystkie zamówienia powyżej 200 zł',
    ctaBackgroundColor: '#6AA306',
  },
};

export const OverlayLeft: Story = {
  args: {
    src: '/images/recman-6167-cosy-img15.jpg',
    layout: 'overlay',
    title: 'Elegancja na Każdą Okazję',
    description: 'Garnitury szyte na miarę Twoich potrzeb',
    ctaText: 'Umów wizytę',
    ctaHref: '#',
    textAlign: 'left',
    textVerticalAlign: 'middle',
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    width: 600,
  },
};

export const OverlayMultipleCTAs: Story = {
  args: {
    src: '/images/muve-5645-lookbook-img8.jpg',
    layout: 'overlay',
    title: 'Wielka Wyprzedaż',
    description: 'Do -70% na wybrane gry',
    multipleCtas: [
      { text: 'Zobacz ofertę', href: '#', backgroundColor: '#3498db', color: '#ffffff' },
      { text: 'Bestsellery', href: '#', backgroundColor: '#e74c3c', color: '#ffffff' },
    ],
    textAlign: 'center',
    textVerticalAlign: 'middle',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    width: 600,
  },
};

// ===== TEXT BELOW VARIANTS =====

export const TextBelow: Story = {
  args: {
    src: '/images/madeinlab-12508-cosy-img5.jpg',
    layout: 'text-below',
    title: 'Pielęgnacja Skóry Naturalna',
    description: 'Kosmetyki oparte na składnikach naturalnych, stworzone z myślą o Twojej skórze',
    ctaText: 'Odkryj więcej',
    ctaHref: '#',
    titleColor: '#2c3e50',
    descriptionColor: '#7f8c8d',
    ctaBackgroundColor: '#6AA306',
    width: 600,
  },
};

export const TextBelowWithLink: Story = {
  args: {
    ...TextBelow.args,
    href: '#',
  },
};

// ===== SPLIT LAYOUT VARIANTS =====

export const SplitImageLeft: Story = {
  args: {
    src: '/images/naoko-127592-lookbook-img10.jpg',
    layout: 'split',
    splitImagePosition: 'left',
    title: 'Wiosenna Moda',
    description: 'Odkryj naszą najnowszą kolekcję ubrań na wiosnę 2025',
    ctaText: 'Zobacz kolekcję',
    ctaHref: '#',
    titleColor: '#2c3e50',
    descriptionColor: '#7f8c8d',
    ctaBackgroundColor: '#3498db',
    splitBackgroundColor: '#f9f9fb',
    width: 600,
  },
};

export const SplitImageRight: Story = {
  args: {
    ...SplitImageLeft.args,
    src: '/images/recman-6167-lookbook-img16.jpg',
    splitImagePosition: 'right',
    title: 'Styl i Elegancja',
    description: 'Perfekcyjne garnitury dla wymagających mężczyzn',
    ctaText: 'Poznaj ofertę',
  },
};

// ===== BADGE VARIANTS =====

export const BadgeTopRight: Story = {
  args: {
    src: '/images/muve-5645-cosy-img7.jpg',
    layout: 'badge',
    badgeText: 'NOWOŚĆ',
    badgePosition: 'top-right',
    badgeBackgroundColor: '#e74c3c',
    badgeTextColor: '#ffffff',
    href: '#',
    width: 600,
  },
};

export const BadgeTopLeft: Story = {
  args: {
    ...BadgeTopRight.args,
    src: '/images/nastopy-6908-cosy-img11.jpg',
    badgeText: '-30%',
    badgePosition: 'top-left',
    badgeBackgroundColor: '#6AA306',
  },
};

export const BadgeSale: Story = {
  args: {
    ...BadgeTopRight.args,
    src: '/images/orteo-8428-cosy-img13.jpg',
    badgeText: 'WYPRZEDAŻ',
    badgePosition: 'bottom-right',
    badgeBackgroundColor: '#f39c12',
    badgeTextColor: '#ffffff',
  },
};

export const BadgeLimited: Story = {
  args: {
    ...BadgeTopRight.args,
    badgeText: 'LIMITOWANA EDYCJA',
    badgePosition: 'bottom-left',
    badgeBackgroundColor: '#9b59b6',
  },
};

// ===== GRADIENT VARIANTS =====

export const GradientBottom: Story = {
  args: {
    src: '/images/naoko-127592-cosy-img9.jpg',
    layout: 'gradient',
    title: 'Elegancka Kolekcja',
    description: 'Stylowe ubrania na każdą okazję',
    ctaText: 'Poznaj kolekcję',
    ctaHref: '#',
    width: 600,
  },
};

export const GradientWithMultipleCTAs: Story = {
  args: {
    src: '/images/recman-6167-cosy-img15.jpg',
    layout: 'gradient',
    title: 'Garnitury Premium',
    description: 'Jakość i styl w jednym',
    multipleCtas: [
      { text: 'Garnitury', href: '#', backgroundColor: '#3498db', color: '#ffffff' },
      { text: 'Akcesoria', href: '#', backgroundColor: '#2c3e50', color: '#ffffff' },
    ],
    width: 600,
  },
};

// ===== COMPACT CENTER VARIANTS =====

export const CompactCenter: Story = {
  args: {
    src: '/images/madeinlab-12508-lookbook-img6.jpg',
    layout: 'compact-center',
    title: 'Kosmetyki Naturalne',
    description: 'Pielęgnacja z natury',
    ctaText: 'Odkryj więcej',
    ctaHref: '#',
    ctaBackgroundColor: '#6AA306',
    width: 600,
  },
};

export const CompactCenterSimple: Story = {
  args: {
    src: '/images/muve-5645-lookbook-img8.jpg',
    layout: 'compact-center',
    title: 'Gaming Weekend',
    ctaText: 'Zobacz gry',
    ctaHref: '#',
    ctaBackgroundColor: '#e74c3c',
    width: 600,
  },
};
