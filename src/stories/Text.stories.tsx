import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Email Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
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

export const DefaultText: Story = {
  args: {
    content: 'This is a sample text component for email templates.',
    align: 'left',
    padding: '10px 25px',
    fontSize: '14px',
    fontWeight: '400',
    color: '#000000',
    backgroundColor: '#fff',
  },
};

export const Heading: Story = {
  args: {
    content: '<strong>Important Announcement</strong>',
    align: 'center',
    fontSize: '24px',
    fontWeight: '700',
    color: '#2c3e50',
    padding: '20px 25px',
  },
};

export const CenteredText: Story = {
  args: {
    content: 'This text is centered and perfect for announcements or highlights.',
    align: 'center',
    padding: '15px 25px',
    fontSize: '16px',
  },
};

export const RightAligned: Story = {
  args: {
    content: 'Right-aligned text can be useful for dates or signatures.',
    align: 'right',
    padding: '10px 25px',
    fontSize: '14px',
    color: '#7f8c8d',
  },
};

export const WithHTMLContent: Story = {
  args: {
    content: '<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p><p>You can include multiple paragraphs and <a href="#" style="color: #3498db;">links</a>.</p>',
    align: 'left',
    padding: '15px 25px',
    fontSize: '14px',
  },
};

export const LargeText: Story = {
  args: {
    content: 'Large text for emphasis',
    align: 'center',
    fontSize: '20px',
    fontWeight: '600',
    padding: '20px 25px',
  },
};

export const SmallText: Story = {
  args: {
    content: 'Small text for disclaimers or fine print',
    align: 'left',
    fontSize: '12px',
    color: '#95a5a6',
    padding: '10px 25px',
  },
};
