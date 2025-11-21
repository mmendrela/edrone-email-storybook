import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../components/Logo';

const meta: Meta<typeof Logo> = {
  title: 'Email Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    width: { control: { type: 'range', min: 50, max: 300, step: 10 } },
    padding: { control: 'text' },
    align: {
      control: { type: 'radio' },
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Muve: Story = {
  args: {
    src: 'https://dgk28ckagqims.cloudfront.net/tracker-branding/5645/07cc5338-1132-4151-a6b3-d3f13ae788d1.png',
    alt: 'Muve.pl',
    href: 'https://muve.pl',
    width: 150,
    padding: '20px 0',
    backgroundColor: '#fff',
  },
};

export const MadeInLab: Story = {
  args: {
    src: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/12508_logo.png',
    alt: 'Made in Lab',
    href: '',
    width: 150,
    padding: '20px 0',
    backgroundColor: '#fff',
  },
};

export const SmallLogo: Story = {
  args: {
    ...Muve.args,
    width: 100,
  },
};

export const LargeLogo: Story = {
  args: {
    ...Muve.args,
    width: 200,
  },
};

export const WithCustomBackground: Story = {
  args: {
    ...Muve.args,
    backgroundColor: '#f5f5f5',
  },
};

export const WithCustomPadding: Story = {
  args: {
    ...Muve.args,
    padding: '40px 0',
  },
};

// ===== ALIGNMENT VARIANTS =====

export const LogoLeft: Story = {
  args: {
    ...Muve.args,
    align: 'left',
  },
};

export const LogoCenter: Story = {
  args: {
    ...Muve.args,
    align: 'center',
  },
};

export const LogoRight: Story = {
  args: {
    ...Muve.args,
    align: 'right',
  },
};

// ===== BRAND TEMPLATES =====

export const Naoko: Story = {
  args: {
    src: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/127592_logo.png',
    alt: 'Naoko',
    href: '#',
    width: 150,
    padding: '20px 0',
    backgroundColor: '#fff',
  },
};

export const Bielenda: Story = {
  args: {
    src: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/19625_logo.png',
    alt: 'Bielenda',
    href: '#',
    width: 150,
    padding: '20px 0',
    backgroundColor: '#fff',
  },
};

export const Nastopy: Story = {
  args: {
    src: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/6908_logo.png',
    alt: 'Nastopy',
    href: '#',
    width: 150,
    padding: '20px 0',
    backgroundColor: '#fff',
  },
};

export const Abra: Story = {
  args: {
    src: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/6623_logo.png',
    alt: 'Abra',
    href: '#',
    width: 150,
    padding: '20px 0',
    backgroundColor: '#fff',
  },
};

export const Orteo: Story = {
  args: {
    src: 'https://dgk28ckagqims.cloudfront.net/tracker-branding/8428/1b214c2b-4d4b-42f3-b76c-48fc5df8bcd0.png',
    alt: 'Orteo',
    href: '#',
    width: 150,
    padding: '20px 0',
    backgroundColor: '#fff',
  },
};

export const Recman: Story = {
  args: {
    src: 'https://dgk28ckagqims.cloudfront.net/tracker-branding/6167/435a9ab6-589d-44ac-86a6-48984c63f662.png',
    alt: 'Recman',
    href: '#',
    width: 150,
    padding: '20px 0',
    backgroundColor: '#fff',
  },
};
