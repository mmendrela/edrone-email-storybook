import React from 'react';
import { Banner } from '../components/Banner';
import { Logo } from '../components/Logo';
import { Categories } from '../components/Categories';
import { Hero } from '../components/Hero';
import { Text } from '../components/Text';
import { ProductCard } from '../components/ProductCard';
import { BenefitsGrid } from '../components/BenefitsGrid';
import { Spacer } from '../components/Spacer';
import { Footer } from '../components/Footer';

export const FashionLuxury: React.FC = () => {
  const categories = [
    { label: 'Women', href: '#' },
    { label: 'Men', href: '#' },
    { label: 'Accessories', href: '#' },
    { label: 'Collections', href: '#' },
  ];

  const product1 = {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/166873587_66933bd3f67f78635d838184314dc01c.jpg',
    title: 'EVENING GOWN',
    price: '4,999 PLN',
    description: 'Exclusive design, made to order',
    href: '#',
    ctaText: 'Contact Us',
  };

  const product2 = {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6167/33186674_1378dc77cb852d21f39508f7149fd1de.jpg',
    title: 'SLIM FIT SUIT',
    price: '2,999 PLN',
    description: 'Wool blend, modern cut',
    href: '#',
    ctaText: 'View Details',
  };

  const benefits = [
    {
      icon: '🚚',
      title: 'COMPLIMENTARY SHIPPING',
      description: 'Worldwide express delivery',
    },
    {
      icon: '💎',
      title: 'BESPOKE SERVICE',
      description: 'Personal styling available',
    },
    {
      icon: '✨',
      title: 'EXCLUSIVE ACCESS',
      description: 'Private collections & previews',
    },
  ];

  const footerContent = `
    <div style="text-align: center; color: #666666;">
      <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: 500; color: #000000;">NAOKO</p>
      <p style="margin: 0 0 12px 0; font-size: 10px; opacity: 0.8;">ul. Przykładowa 123, 00-001 Warszawa, Polska</p>
      <p style="margin: 0 0 12px 0; font-size: 16px;">
        <a href="#" style="color: #000000; text-decoration: none;">📷</a>
      </p>
      <p style="margin: 0; font-size: 10px;">
        <a href="#" style="color: #000000; text-decoration: none; margin: 0 6px;">Contact</a> |
        <a href="#" style="color: #000000; text-decoration: none; margin: 0 6px;">Boutiques</a> |
        <a href="#" style="color: #000000; text-decoration: none; margin: 0 6px;">Privacy</a>
      </p>
    </div>
  `;

  return (
    <div style={{ backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      {/* Banner */}
      <Banner
        text="SPRING/SUMMER 2025 COLLECTION"
        backgroundColor="#000000"
        color="#ffffff"
        padding="12px 25px"
        fontSize="11px"
        fontWeight="400"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="3px"
      />

      <Spacer height="50px" />

      {/* Logo */}
      <Logo
        src="https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/127592_logo.png"
        alt="NAOKO"
        href="#"
        width="150px"
        padding="0 25px 40px 25px"
      />

      {/* Categories */}
      <Categories
        categories={categories}
        backgroundColor="#ffffff"
        color="#000000"
        padding="20px 25px"
        fontSize="11px"
        fontWeight="400"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="3px"
        separator="|"
      />

      <Spacer height="50px" />

      {/* Hero */}
      <Hero
        src="https://dgk28ckagqims.cloudfront.net/product-images/127592/189183245_77da46598f75e3f0e49f98aaa0c636da.jpg"
        layout="text-below"
        textAlign="center"
        title="TIMELESS ELEGANCE"
        titleColor="#000000"
        description="Discover the essence of refined style"
        descriptionColor="#666666"
        ctaText="Explore"
        ctaHref="#"
        ctaBackgroundColor="transparent"
        ctaTextColor="#000000"
      />

      <Spacer height="80px" />

      {/* Featured Product 1 */}
      <ProductCard
        {...product1}
        layout="horizontal"
        imagePosition="left"
        ctaBackgroundColor="#000000"
        ctaTextColor="#ffffff"
      />

      <Spacer height="60px" />

      {/* Text Divider */}
      <Text
        text="◆"
        fontSize="20px"
        color="#000000"
        textAlign="center"
        padding="20px 25px"
      />

      <Spacer height="60px" />

      {/* Featured Product 2 */}
      <ProductCard
        {...product2}
        layout="horizontal"
        imagePosition="right"
        ctaBackgroundColor="transparent"
        ctaTextColor="#000000"
        ctaBorder="1px solid #000000"
      />

      <Spacer height="80px" />

      {/* Benefits - Black Background Section */}
      <div style={{ backgroundColor: '#000000' }}>
        <Spacer height="60px" backgroundColor="#000000" />

        <BenefitsGrid
          benefits={benefits}
          columns={3}
          backgroundColor="#000000"
          titleColor="#ffffff"
          descriptionColor="#cccccc"
          iconColor="#ffffff"
          titleTextTransform="uppercase"
          titleLetterSpacing="2px"
          titleFontSize="11px"
          titleFontWeight="500"
          descriptionFontSize="11px"
          padding="0 25px"
          itemPadding="20px 15px"
          iconSize="32px"
        />

        <Spacer height="60px" backgroundColor="#000000" />
      </div>

      <Spacer height="50px" />

      {/* Footer */}
      <Footer
        content={footerContent}
        backgroundColor="#ffffff"
        color="#666666"
        padding="40px 25px 50px 25px"
        fontSize="10px"
        align="center"
      />
    </div>
  );
};
