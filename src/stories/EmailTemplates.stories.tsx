import type { Meta, StoryObj } from '@storybook/react';
import { PromotionalSale } from '../templates/PromotionalSale';
import { NewsletterTips } from '../templates/NewsletterTips';
import { SimpleAnnouncement } from '../templates/SimpleAnnouncement';

const meta: Meta = {
  title: 'Email Templates/Complete Examples',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete email templates combining multiple components. These are full examples ready to use for different purposes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

// ===== PROMOTIONAL SALE =====

export const PromotionalEmail: StoryObj = {
  render: () => <PromotionalSale />,
  parameters: {
    docs: {
      description: {
        story: '🟢 Promotional email with countdown timer. Features: header with logo, countdown timer, promotional text with CTA button, and footer. Perfect for time-limited offers and sales campaigns.',
      },
    },
  },
};

// ===== NEWSLETTER WITH TIPS =====

export const NewsletterWithTips: StoryObj = {
  render: () => <NewsletterTips />,
  parameters: {
    docs: {
      description: {
        story: '🟢 Newsletter with numbered list tips. Features: header with logo, numbered list with step-by-step guidance, and footer with social links. Perfect for educational content and how-to guides.',
      },
    },
  },
};

// ===== SIMPLE ANNOUNCEMENT =====

export const Announcement: StoryObj = {
  render: () => <SimpleAnnouncement />,
  parameters: {
    docs: {
      description: {
        story: '🟢 Simple announcement email. Features: header with logo, text content with divider, and comprehensive footer with categories. Perfect for company updates and new collection announcements.',
      },
    },
  },
};
