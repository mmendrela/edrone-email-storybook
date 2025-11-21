import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../components/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Email Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    padding: { control: 'text' },
    fontSize: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    content: '© 2025 Your Company. All rights reserved.<br/>123 Street Name, City, Country<br/><a href="#" style="color: #3498db;">Unsubscribe</a>',
    backgroundColor: '#f5f5f5',
    padding: '20px 25px',
    fontSize: '12px',
    color: '#7f8c8d',
    align: 'center',
  },
};

export const SimpleFooter: Story = {
  args: {
    content: '© 2025 Company Name',
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    align: 'center',
    padding: '15px 25px',
    fontSize: '12px',
  },
};

export const DetailedFooter: Story = {
  args: {
    content: `
      <p style="margin: 5px 0;"><strong>Your Company</strong></p>
      <p style="margin: 5px 0;">123 Street Name, City, Postal Code</p>
      <p style="margin: 5px 0;">Contact: <a href="mailto:contact@company.com" style="color: #3498db;">contact@company.com</a></p>
      <p style="margin: 5px 0;"><a href="#" style="color: #3498db;">Privacy Policy</a> | <a href="#" style="color: #3498db;">Terms of Service</a> | <a href="#" style="color: #3498db;">Unsubscribe</a></p>
      <p style="margin: 5px 0;">© 2025 Your Company. All rights reserved.</p>
    `,
    backgroundColor: '#f8f9fa',
    padding: '25px',
    fontSize: '12px',
    color: '#6c757d',
    align: 'center',
  },
};

export const LeftAligned: Story = {
  args: {
    ...Default.args,
    align: 'left',
  },
};

export const WithSocialLinks: Story = {
  args: {
    content: `
      <p style="margin: 10px 0;">Follow us on social media:</p>
      <p style="margin: 10px 0;">
        <a href="#" style="color: #3498db; margin: 0 10px;">Facebook</a>
        <a href="#" style="color: #3498db; margin: 0 10px;">Instagram</a>
        <a href="#" style="color: #3498db; margin: 0 10px;">Twitter</a>
      </p>
      <p style="margin: 10px 0;">© 2025 Your Company</p>
    `,
    backgroundColor: '#ecf0f1',
    padding: '20px 25px',
    fontSize: '12px',
    color: '#34495e',
    align: 'center',
  },
};

export const Minimal: Story = {
  args: {
    content: '© 2025 Your Brand',
    backgroundColor: '#ffffff',
    color: '#95a5a6',
    align: 'center',
    padding: '15px 25px',
    fontSize: '11px',
  },
};

export const EcommerceFooter: Story = {
  args: {
    content: `
      <p style="margin: 8px 0;"><strong style="font-size: 13px;">Sklep</strong></p>
      <p style="margin: 5px 0;"><a href="#" style="color: #7f8c8d; text-decoration: none;">Produkty</a> | <a href="#" style="color: #7f8c8d; text-decoration: none;">Promocje</a> | <a href="#" style="color: #7f8c8d; text-decoration: none;">Nowości</a></p>
      <p style="margin: 8px 0; margin-top: 15px;"><strong style="font-size: 13px;">Pomoc</strong></p>
      <p style="margin: 5px 0;"><a href="#" style="color: #7f8c8d; text-decoration: none;">Kontakt</a> | <a href="#" style="color: #7f8c8d; text-decoration: none;">Dostawa</a> | <a href="#" style="color: #7f8c8d; text-decoration: none;">Zwroty</a></p>
      <p style="margin: 15px 0 5px 0; font-size: 11px;">© 2025 Nazwa Sklepu. Wszelkie prawa zastrzeżone.</p>
    `,
    backgroundColor: '#f8f9fa',
    padding: '25px',
    fontSize: '12px',
    color: '#7f8c8d',
    align: 'center',
  },
};

export const ContactInfo: Story = {
  args: {
    content: `
      <p style="margin: 5px 0; font-weight: 600;">Firma Sp. z o.o.</p>
      <p style="margin: 5px 0;">ul. Przykładowa 123, 00-000 Warszawa</p>
      <p style="margin: 5px 0;">Tel: +48 123 456 789</p>
      <p style="margin: 5px 0;">Email: <a href="mailto:kontakt@firma.pl" style="color: #3498db; text-decoration: none;">kontakt@firma.pl</a></p>
      <p style="margin: 5px 0;">NIP: 123-456-78-90 | REGON: 123456789</p>
      <p style="margin: 10px 0 5px 0; font-size: 11px; color: #95a5a6;">© 2025 Firma Sp. z o.o.</p>
    `,
    backgroundColor: '#ffffff',
    padding: '25px',
    fontSize: '12px',
    color: '#34495e',
    align: 'center',
  },
};

export const BrandFooter: Story = {
  args: {
    content: `
      <p style="margin: 5px 0; font-weight: 700; font-size: 14px; color: #6AA306;">Twoja Marka</p>
      <p style="margin: 10px 0;">Jesteśmy z Tobą od 2010 roku</p>
      <p style="margin: 10px 0;">
        <a href="#" style="color: #6AA306; margin: 0 8px; text-decoration: none; font-weight: 600;">O nas</a>
        <a href="#" style="color: #6AA306; margin: 0 8px; text-decoration: none; font-weight: 600;">Blog</a>
        <a href="#" style="color: #6AA306; margin: 0 8px; text-decoration: none; font-weight: 600;">Kariera</a>
      </p>
      <p style="margin: 10px 0; font-size: 11px;">© 2025 Twoja Marka. All rights reserved.</p>
    `,
    backgroundColor: '#f9f9fb',
    padding: '25px',
    fontSize: '12px',
    color: '#2c3e50',
    align: 'center',
  },
};

export const LegalFooter: Story = {
  args: {
    content: `
      <p style="margin: 8px 0;">
        <a href="#" style="color: #7f8c8d; text-decoration: underline; margin: 0 5px;">Polityka Prywatności</a> |
        <a href="#" style="color: #7f8c8d; text-decoration: underline; margin: 0 5px;">Regulamin</a> |
        <a href="#" style="color: #7f8c8d; text-decoration: underline; margin: 0 5px;">Cookies</a>
      </p>
      <p style="margin: 8px 0;">
        <a href="#" style="color: #e74c3c; text-decoration: none; font-weight: 600;">Wypisz się z listy</a>
      </p>
      <p style="margin: 8px 0; font-size: 11px; line-height: 1.4;">
        Otrzymujesz tę wiadomość, ponieważ wyraziłeś zgodę na otrzymywanie informacji handlowych.
        Jeśli nie chcesz już otrzymywać naszych wiadomości, kliknij link powyżej.
      </p>
      <p style="margin: 8px 0; font-size: 11px;">© 2025 Firma. Wszelkie prawa zastrzeżone.</p>
    `,
    backgroundColor: '#ecf0f1',
    padding: '20px 25px',
    fontSize: '12px',
    color: '#7f8c8d',
    align: 'center',
  },
};

export const NewsletterFooter: Story = {
  args: {
    content: `
      <p style="margin: 5px 0; font-size: 13px; font-weight: 600;">Bądź na bieżąco!</p>
      <p style="margin: 10px 0;">Otrzymuj najświeższe informacje o produktach i promocjach</p>
      <p style="margin: 15px 0;">
        <a href="#" style="background-color: #3498db; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: 600;">Zapisz się do newslettera</a>
      </p>
      <p style="margin: 15px 0; font-size: 11px; color: #95a5a6;">© 2025 Twoja Firma</p>
    `,
    backgroundColor: '#f5f5f5',
    padding: '25px',
    fontSize: '12px',
    color: '#34495e',
    align: 'center',
  },
};

export const DarkModern: Story = {
  args: {
    content: `
      <p style="margin: 10px 0; font-weight: 600; font-size: 13px;">MODERN BRAND</p>
      <p style="margin: 10px 0;">
        <a href="#" style="color: #ffffff; margin: 0 12px; text-decoration: none; opacity: 0.8;">Shop</a>
        <a href="#" style="color: #ffffff; margin: 0 12px; text-decoration: none; opacity: 0.8;">About</a>
        <a href="#" style="color: #ffffff; margin: 0 12px; text-decoration: none; opacity: 0.8;">Contact</a>
      </p>
      <p style="margin: 10px 0; opacity: 0.6; font-size: 11px;">© 2025 Modern Brand. All rights reserved.</p>
    `,
    backgroundColor: '#1a1a1a',
    padding: '30px 25px',
    fontSize: '12px',
    color: '#ffffff',
    align: 'center',
  },
};

export const CompactLinks: Story = {
  args: {
    content: `
      <p style="margin: 5px 0;">
        <a href="#" style="color: #3498db; margin: 0 8px; text-decoration: none;">Strona główna</a> •
        <a href="#" style="color: #3498db; margin: 0 8px; text-decoration: none;">Produkty</a> •
        <a href="#" style="color: #3498db; margin: 0 8px; text-decoration: none;">O nas</a> •
        <a href="#" style="color: #3498db; margin: 0 8px; text-decoration: none;">Kontakt</a>
      </p>
      <p style="margin: 10px 0 5px 0; font-size: 11px; color: #95a5a6;">© 2025 Firma • Warszawa, Polska</p>
    `,
    backgroundColor: '#ffffff',
    padding: '20px 25px',
    fontSize: '12px',
    color: '#7f8c8d',
    align: 'center',
  },
};

export const SocialIconsText: Story = {
  args: {
    content: `
      <p style="margin: 8px 0; font-weight: 600;">Dołącz do naszej społeczności</p>
      <p style="margin: 12px 0; font-size: 13px;">
        <a href="#" style="color: #3498db; margin: 0 10px; text-decoration: none;">📘 Facebook</a>
        <a href="#" style="color: #e4405f; margin: 0 10px; text-decoration: none;">📷 Instagram</a>
        <a href="#" style="color: #1da1f2; margin: 0 10px; text-decoration: none;">🐦 Twitter</a>
        <a href="#" style="color: #0077b5; margin: 0 10px; text-decoration: none;">💼 LinkedIn</a>
      </p>
      <p style="margin: 12px 0; font-size: 11px;">kontakt@firma.pl | +48 123 456 789</p>
      <p style="margin: 8px 0; font-size: 11px; color: #95a5a6;">© 2025 Nazwa Firmy</p>
    `,
    backgroundColor: '#f8f9fa',
    padding: '25px',
    fontSize: '12px',
    color: '#2c3e50',
    align: 'center',
  },
};

export const TwoColumnStyle: Story = {
  args: {
    content: `
      <table style="width: 100%; max-width: 550px; margin: 0 auto;" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="vertical-align: top; width: 50%; padding-right: 10px;">
            <p style="margin: 5px 0; font-weight: 600; font-size: 12px;">Firma</p>
            <p style="margin: 5px 0; font-size: 11px;"><a href="#" style="color: #7f8c8d; text-decoration: none;">O nas</a></p>
            <p style="margin: 5px 0; font-size: 11px;"><a href="#" style="color: #7f8c8d; text-decoration: none;">Kariera</a></p>
            <p style="margin: 5px 0; font-size: 11px;"><a href="#" style="color: #7f8c8d; text-decoration: none;">Blog</a></p>
          </td>
          <td style="vertical-align: top; width: 50%; padding-left: 10px;">
            <p style="margin: 5px 0; font-weight: 600; font-size: 12px;">Pomoc</p>
            <p style="margin: 5px 0; font-size: 11px;"><a href="#" style="color: #7f8c8d; text-decoration: none;">FAQ</a></p>
            <p style="margin: 5px 0; font-size: 11px;"><a href="#" style="color: #7f8c8d; text-decoration: none;">Kontakt</a></p>
            <p style="margin: 5px 0; font-size: 11px;"><a href="#" style="color: #7f8c8d; text-decoration: none;">Wsparcie</a></p>
          </td>
        </tr>
      </table>
      <p style="margin: 15px 0 5px 0; font-size: 11px; color: #95a5a6;">© 2025 Twoja Firma. Wszystkie prawa zastrzeżone.</p>
    `,
    backgroundColor: '#ffffff',
    padding: '25px 15px',
    fontSize: '12px',
    color: '#7f8c8d',
    align: 'left',
  },
};
