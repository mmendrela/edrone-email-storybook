import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../components/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Email Components/🟢 Footer',
  component: Footer,
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
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    linkColor: { control: 'color' },
    socialStyle: {
      control: { type: 'radio' },
      options: ['text', 'icons'],
    },
    socialIconSize: { control: 'number' },
    padding: { control: 'text' },
    fontSize: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

// ===== READY TO DEVELOP =====

export const Minimal: Story = {
  name: '🟢 Minimal',
  args: {
    unsubscribeHref: 'https://example.com/unsubscribe',
    unsubscribeText: 'Wypisz się z newslettera',
    slogan: 'Jakość i styl w jednym miejscu',
    companyData: {
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      logoAlt: 'Nike',
      logoWidth: 60,
    },
    backgroundColor: '#ffffff',
    textColor: '#666666',
    linkColor: '#3498db',
    padding: '30px 20px',
    fontSize: '12px',
  },
};

export const WithCompanyData: Story = {
  name: '🟢 With Company Data',
  args: {
    unsubscribeHref: 'https://example.com/unsubscribe',
    unsubscribeText: 'Wypisz się z newslettera',
    companyData: {
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      logoAlt: 'Nike',
      logoWidth: 60,
      address: 'ul. Przykładowa 123, 00-000 Warszawa',
      phone: '+48 123 456 789',
      email: 'kontakt@nike.com',
      nip: '123-456-78-90',
      regon: '123456789',
    },
    socialLinks: [
      { platform: 'facebook', href: 'https://facebook.com/firma' },
      { platform: 'instagram', href: 'https://instagram.com/firma' },
      { platform: 'twitter', href: 'https://twitter.com/firma' },
    ],
    socialStyle: 'text',
    backgroundColor: '#ffffff',
    textColor: '#666666',
    linkColor: '#3498db',
    padding: '30px 20px',
    fontSize: '12px',
  },
};

export const MaxWithSlogan: Story = {
  name: '🟢 Max with Slogan',
  args: {
    unsubscribeHref: 'https://example.com/unsubscribe',
    unsubscribeText: 'Wypisz się z newslettera',
    slogan: 'Twój styl, Twoja przygoda - odkryj moc mody',
    companyData: {
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      logoAlt: 'Nike',
      logoWidth: 80,
      address: 'ul. Modowa 45, 00-001 Warszawa',
      phone: '+48 22 123 45 67',
      email: 'hello@nike.com',
      nip: '987-654-32-10',
      regon: '987654321',
    },
    socialLinks: [
      { platform: 'facebook', href: 'https://facebook.com/fashionstore' },
      { platform: 'instagram', href: 'https://instagram.com/fashionstore' },
      { platform: 'tiktok', href: 'https://tiktok.com/@fashionstore' },
      { platform: 'twitter', href: 'https://twitter.com/fashionstore' },
    ],
    socialStyle: 'icons',
    socialIconSize: 18,
    backgroundColor: '#ffffff',
    textColor: '#666666',
    linkColor: '#3498db',
    padding: '40px 20px',
    fontSize: '12px',
  },
};

export const WithCategories: Story = {
  name: '🟢 With Categories',
  args: {
    unsubscribeHref: 'https://example.com/unsubscribe',
    unsubscribeText: 'Wypisz się z newslettera',
    slogan: 'Odkryj naszą kolekcję',
    categories: [
      { name: 'Nowości', href: 'https://example.com/nowosci' },
      { name: 'Damskie', href: 'https://example.com/damskie' },
      { name: 'Męskie', href: 'https://example.com/meskie' },
      { name: 'Dziecięce', href: 'https://example.com/dzieciece' },
      { name: 'Akcesoria', href: 'https://example.com/akcesoria' },
      { name: 'Sale', href: 'https://example.com/sale' },
    ],
    companyData: {
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      logoAlt: 'Nike',
      logoWidth: 60,
      email: 'kontakt@nike.com',
    },
    socialLinks: [
      { platform: 'facebook', href: 'https://facebook.com/fashionstore' },
      { platform: 'instagram', href: 'https://instagram.com/fashionstore' },
    ],
    socialStyle: 'text',
    backgroundColor: '#ffffff',
    textColor: '#666666',
    linkColor: '#3498db',
    padding: '40px 20px',
    fontSize: '12px',
  },
};
