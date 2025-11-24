import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header';
import { LogoProps } from '../components/Logo';

const meta: Meta<typeof Header> = {
  title: 'Email Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    logo: { control: 'object' },
    preheaderText: { control: 'text' },
    browserLinkText: { control: 'text' },
    browserLinkHref: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultLogo: LogoProps = {
  src: 'https://dgk28ckagqims.cloudfront.net/tracker-branding/5645/07cc5338-1132-4151-a6b3-d3f13ae788d1.png',
  alt: 'Company Logo',
  href: '#',
  width: 150,
};

export const Default: Story = {
  args: {
    logo: defaultLogo,
    preheaderText: 'This is a hidden preheader text that appears in the inbox preview.',
    browserLinkText: 'Nie widzisz poprawnie? Zobacz w przeglądarce',
    browserLinkHref: '#',
  },
};

export const WithoutPreheader: Story = {
  args: {
    logo: defaultLogo,
    browserLinkText: 'Zobacz w przeglądarce',
    browserLinkHref: '#',
  },
};

export const Minimal: Story = {
  args: {
    logo: {
      ...defaultLogo,
      width: 120,
    },
  },
};

export const WithoutLogo: Story = {
  args: {
    preheaderText: 'This is a hidden preheader text that appears in the inbox preview.',
    browserLinkText: 'Nie widzisz poprawnie? Zobacz w przeglądarce',
    browserLinkHref: '#',
    backgroundColor: '#ffffff',
  },
};

export const WithoutLogoMinimal: Story = {
  args: {
    browserLinkText: 'Zobacz w przeglądarce',
    browserLinkHref: '#',
  },
};
