import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Logo, Hero, Text, Button, Spacer, Divider, ProductCard, Footer } from '../components';
import { cosyTheme, lookbookTheme, EmailTheme } from '../themes';

interface EmailTemplateProps {
  theme: EmailTheme;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ theme }) => {
  return (
    <div style={{
      backgroundColor: theme.colors.backgroundAlt,
      padding: '20px',
      fontFamily: theme.typography.fontFamily
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: theme.colors.background }}>
        <Logo
          src="https://dgk28ckagqims.cloudfront.net/tracker-branding/5645/07cc5338-1132-4151-a6b3-d3f13ae788d1.png"
          alt="Store Logo"
          href="https://example.com"
          width={150}
          backgroundColor={theme.colors.background}
        />

        <Hero
          src="/images/muve-5645-cosy-img7.jpg"
          alt="New Collection Banner"
          href="https://example.com/collection"
          backgroundColor={theme.colors.background}
        />

        <Spacer height={theme.spacing.medium} backgroundColor={theme.colors.background} />

        <Text
          content={`<strong style="font-size: ${theme.typography.fontSize.xlarge}; color: ${theme.colors.text};">Discover Our New Collection</strong>`}
          align="center"
          padding={`${theme.spacing.medium} 25px`}
          fontSize={theme.typography.fontSize.xlarge}
          fontWeight={theme.typography.fontWeight.bold}
          color={theme.colors.text}
          fontFamily={theme.typography.fontFamily}
          backgroundColor={theme.colors.background}
        />

        <Text
          content="Explore the latest trends and find your perfect style. Limited time offer - shop now and save up to 30% on selected items!"
          align="center"
          padding={`${theme.spacing.small} 25px`}
          fontSize={theme.typography.fontSize.base}
          color={theme.colors.textLight}
          fontFamily={theme.typography.fontFamily}
          backgroundColor={theme.colors.background}
        />

        <Spacer height={theme.spacing.medium} backgroundColor={theme.colors.background} />

        <Button
          text="Shop Now"
          href="https://example.com/shop"
          backgroundColor={theme.colors.primary}
          color="#ffffff"
          padding={`${theme.spacing.medium} 40px`}
          borderRadius={theme.borderRadius.medium}
          fontSize={theme.typography.fontSize.large}
          fontWeight={theme.typography.fontWeight.semibold}
          fontFamily={theme.typography.fontFamily}
        />

        <Spacer height={theme.spacing.large} backgroundColor={theme.colors.background} />

        <Divider
          borderColor={theme.colors.border}
          borderWidth="1px"
          borderStyle="solid"
          backgroundColor={theme.colors.background}
        />

        <Spacer height={theme.spacing.large} backgroundColor={theme.colors.background} />

        <Text
          content={`<strong style="font-size: ${theme.typography.fontSize.large}; color: ${theme.colors.text};">Featured Products</strong>`}
          align="center"
          padding={`${theme.spacing.small} 25px`}
          fontSize={theme.typography.fontSize.large}
          fontWeight={theme.typography.fontWeight.bold}
          color={theme.colors.text}
          fontFamily={theme.typography.fontFamily}
          backgroundColor={theme.colors.background}
        />

        <Spacer height={theme.spacing.medium} backgroundColor={theme.colors.background} />

        <ProductCard
          imageSrc="https://dgk28ckagqims.cloudfront.net/product-images/5645/39937992_864b5a6b32dcac16ed0e54ad304fdea9.jpg"
          title="Lies of P"
          price="109.90 zł"
          description="Mroczne soulslike w świecie inspirowanym Pinokiem — odkryj intrygi i wybory kształtujące fabułę."
          href="https://muve.pl/p/lies-of-p-steam-2184244"
          ctaText="Zobacz grę"
          imagePosition="left"
        />

        <Spacer height={theme.spacing.medium} backgroundColor={theme.colors.background} />

        <ProductCard
          imageSrc="https://dgk28ckagqims.cloudfront.net/product-images/5645/171680972_8bb678ff93cfac16cec79b415a3bd8f3.jpg"
          title="Dying Light: Definitive 10th Anniversary Edition"
          price="142.49 zł"
          description="Kultowy survival horror z parkourem, nocnymi zagrożeniami i trybem kooperacji."
          href="https://muve.pl/p/dying-light-definitive-10th-anniversary-edition-3188e8"
          ctaText="Kup teraz"
          imagePosition="right"
        />

        <Spacer height={theme.spacing.large} backgroundColor={theme.colors.background} />

        <Divider
          borderColor={theme.colors.border}
          borderWidth="1px"
          borderStyle="solid"
          backgroundColor={theme.colors.background}
        />

        <Footer
          content={`
            <p style="margin: 5px 0;"><strong>Your Store</strong></p>
            <p style="margin: 5px 0;">123 Shopping Street, City</p>
            <p style="margin: 5px 0;"><a href="#" style="color: ${theme.colors.primary};">Unsubscribe</a> | <a href="#" style="color: ${theme.colors.primary};">Privacy Policy</a></p>
            <p style="margin: 5px 0;">© 2025 Your Store. All rights reserved.</p>
          `}
          backgroundColor={theme.colors.backgroundAlt}
          padding={theme.spacing.medium}
          fontSize={theme.typography.fontSize.small}
          color={theme.colors.textLight}
          fontFamily={theme.typography.fontFamily}
        />
      </div>
    </div>
  );
};

const meta: Meta<typeof EmailTemplate> = {
  title: 'Email Templates/Full Template',
  component: EmailTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmailTemplate>;

export const CosyStyle: Story = {
  args: {
    theme: cosyTheme,
  },
};

export const LookbookStyle: Story = {
  args: {
    theme: lookbookTheme,
  },
};
