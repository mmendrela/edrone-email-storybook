import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header, LogoProps } from '../components/Header';
import { Categories, CategoryItem } from '../components/Categories';

const meta: Meta<typeof Header> = {
  title: 'Email Components/🟢 Header',
  component: Header,
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
    logo: { control: 'object' },
    preheaderText: { control: 'text' },
    browserLinkText: { control: 'text' },
    browserLinkHref: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const nikeLogo: LogoProps = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  alt: 'Nike',
  href: 'https://nike.com',
  width: 60,
};

const defaultCategories: CategoryItem[] = [
  { label: 'Nowości', href: '#' },
  { label: 'Damskie', href: '#' },
  { label: 'Męskie', href: '#' },
  { label: 'Sale', href: '#' },
];

// ===== READY TO DEVELOP =====

export const WithCategories: Story = {
  name: '🟢 With Categories',
  render: (args) => (
    <>
      <Header {...args} />
      <Categories
        categories={defaultCategories}
        backgroundColor="#ffffff"
        color="#000000"
        padding="15px 25px"
        fontSize="13px"
        fontWeight="500"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="1px"
        separator="|"
      />
    </>
  ),
  args: {
    logo: nikeLogo,
    preheaderText: 'Odkryj najnowszą kolekcję - tylko dzisiaj specjalna oferta',
    browserLinkText: 'Zobacz w przeglądarce',
    browserLinkHref: '#',
    backgroundColor: '#ffffff',
  },
};

export const Minimal: Story = {
  name: '🟢 Minimal',
  args: {
    logo: nikeLogo,
    backgroundColor: '#ffffff',
  },
};

export const MinimalDark: Story = {
  name: '🟢 Minimal Dark',
  args: {
    logo: {
      ...nikeLogo,
      backgroundColor: '#000000',
      filter: 'brightness(0) invert(1)',
    },
    backgroundColor: '#000000',
  },
};

export const ColoredBackground: Story = {
  name: '🟢 Colored Background',
  render: (args) => (
    <>
      <Header {...args} />
      <Categories
        categories={defaultCategories}
        backgroundColor="#000000"
        color="#ffffff"
        padding="15px 25px"
        fontSize="13px"
        fontWeight="500"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="1px"
        separator="|"
      />
    </>
  ),
  args: {
    logo: {
      ...nikeLogo,
      backgroundColor: '#000000',
      filter: 'brightness(0) invert(1)',
    },
    preheaderText: 'Odkryj najnowszą kolekcję - tylko dzisiaj specjalna oferta',
    browserLinkText: 'Zobacz w przeglądarce',
    browserLinkHref: '#',
    browserLinkColor: '#cccccc',
    backgroundColor: '#000000',
  },
};
