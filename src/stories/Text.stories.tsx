import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';
import { Button } from '../components/Button';

const meta: Meta<typeof Text> = {
  title: 'Email Components/🟢 Text',
  component: Text,
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
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
    padding: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

// ===== READY TO DEVELOP =====

export const JustHeader: Story = {
  name: '🟢 Just Header',
  args: {
    content: '<h2 style="margin: 0; font-size: 28px; font-weight: 700; color: #000000;">Odkryj nową kolekcję</h2>',
    align: 'center',
    padding: '20px 25px',
    backgroundColor: '#ffffff',
  },
};

export const JustBodyText: Story = {
  name: '🟢 Just Body Text',
  args: {
    content: '<p style="margin: 0; font-size: 16px; line-height: 1.6; color: #666666;">Cieszymy się, że jesteś z nami! Sprawdź nasze najnowsze produkty i skorzystaj z ekskluzywnych ofert dostępnych tylko dla naszych klientów. Zapraszamy do zakupów.</p>',
    align: 'center',
    padding: '20px 25px',
    backgroundColor: '#ffffff',
  },
};

export const HeaderPlusText: Story = {
  name: '🟢 Header + Text',
  args: {
    content: '<h2 style="margin: 0 0 12px 0; font-size: 24px; font-weight: 700; color: #000000;">Witamy w naszym sklepie</h2><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #666666;">Cieszymy się, że jesteś z nami! Sprawdź nasze najnowsze produkty i skorzystaj z ekskluzywnych ofert dostępnych tylko dla naszych klientów.</p>',
    align: 'center',
    padding: '20px 25px',
    backgroundColor: '#ffffff',
  },
};

export const HeaderTextButton: Story = {
  name: '🟢 Header + Text + Button',
  render: () => (
    <div style={{ backgroundColor: '#ffffff', maxWidth: '600px', margin: '0 auto', padding: '20px 0' }}>
      <Text
        content='<h2 style="margin: 0 0 12px 0; font-size: 24px; font-weight: 700; color: #000000;">Specjalna oferta tylko dzisiaj</h2><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #666666;">Nie przegap okazji! Rabat 20% na wszystkie produkty. Oferta ważna tylko przez 24 godziny.</p>'
        align="center"
        padding="0 25px 20px 25px"
        backgroundColor="transparent"
      />
      <Button
        text="Kup teraz"
        href="#"
        backgroundColor="#3498db"
        color="#ffffff"
        padding="12px 32px"
        borderRadius="4px"
        fontSize="16px"
        fontWeight="600"
        align="center"
      />
    </div>
  ),
};

export const SmallAnnotation: Story = {
  name: '🟢 Small Annotation',
  args: {
    content: '* Oferta ważna do 31.12.2024. Szczegóły regulaminu dostępne na stronie sklepu.',
    align: 'center',
    padding: '10px 25px',
    fontSize: '11px',
    color: '#999999',
    backgroundColor: '#ffffff',
  },
};
