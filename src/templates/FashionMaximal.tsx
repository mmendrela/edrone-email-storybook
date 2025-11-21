import React from 'react';
import { Banner } from '../components/Banner';
import { Logo } from '../components/Logo';
import { Categories } from '../components/Categories';
import { Hero } from '../components/Hero';
import { Text } from '../components/Text';
import { ProductCard } from '../components/ProductCard';
import { ProductGrid } from '../components/ProductGrid';
import { BenefitsGrid } from '../components/BenefitsGrid';
import { Spacer } from '../components/Spacer';
import { Divider } from '../components/Divider';
import { Footer } from '../components/Footer';

export const FashionMaximal: React.FC = () => {
  const categories = [
    { label: 'New In', href: '#' },
    { label: 'Women', href: '#' },
    { label: 'Men', href: '#' },
    { label: 'Kids', href: '#' },
    { label: 'Accessories', href: '#' },
    { label: 'Sale', href: '#' },
  ];

  const featuredProduct = {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/166873587_66933bd3f67f78635d838184314dc01c.jpg',
    title: 'EVENING GOWN',
    price: '4,999 PLN',
    description: 'Exclusive design, made to order. Limited edition piece from our luxury collection.',
    href: '#',
    ctaText: 'Discover',
  };

  const gridProducts = [
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137588898_bbac804c66edc9593c71dc2ce960695e.jpg',
      title: 'SILK MIDI DRESS',
      price: '899 PLN',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137589225_c9d4f58d12cb3dfdfa99cc1cf1dea457.jpg',
      title: 'CASHMERE SWEATER',
      price: '1,299 PLN',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/187827374_a8ebb90939e1c7a1bde9e44377c703d7.jpg',
      title: 'LEATHER JACKET',
      price: '2,499 PLN',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6908/118187140_b968c2f9209cdcf612d1eaf753bf6645.jpg',
      title: 'LEATHER HANDBAG',
      price: '1,599 PLN',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6167/33186674_1378dc77cb852d21f39508f7149fd1de.jpg',
      title: 'SLIM FIT SUIT',
      price: '2,999 PLN',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6908/3076757_471479f04b60356c5de5e0792d8ef3e1.jpg',
      title: 'DESIGNER SNEAKERS',
      price: '899 PLN',
      href: '#',
    },
  ];

  const benefits = [
    {
      icon: '🚚',
      title: 'FREE WORLDWIDE SHIPPING',
      description: 'Express delivery available',
    },
    {
      icon: '↩️',
      title: 'COMPLIMENTARY RETURNS',
      description: 'Free returns within 30 days',
    },
    {
      icon: '✨',
      title: 'EXCLUSIVE DESIGNS',
      description: 'Limited edition collections',
    },
    {
      icon: '💎',
      title: 'PREMIUM QUALITY',
      description: 'Finest materials & craftsmanship',
    },
  ];

  const footerContent = `
    <div style="text-align: center; color: #ffffff;">
      <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: 500;">NAOKO FASHION</p>
      <p style="margin: 0 0 15px 0; font-size: 11px; opacity: 0.8;">ul. Przykładowa 123, 00-001 Warszawa, Polska | Tel: +48 123 456 789</p>
      <p style="margin: 0 0 15px 0; font-size: 18px;">
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">📘</a>
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">📷</a>
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">🐦</a>
      </p>
      <p style="margin: 0; font-size: 11px;">
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 8px;">Shop</a> |
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 8px;">About Us</a> |
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 8px;">Contact</a> |
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 8px;">Stores</a> |
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 8px;">Privacy Policy</a> |
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 8px;">Terms</a>
      </p>
    </div>
  `;

  return (
    <div style={{ backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      {/* Promo Banner */}
      <Banner
        text="⚡ FLASH SALE: 30% OFF EVERYTHING | CODE: FLASH30"
        backgroundColor="#e74c3c"
        color="#ffffff"
        padding="12px 25px"
        fontSize="12px"
        fontWeight="600"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="1px"
      />

      {/* Logo */}
      <Logo
        src="https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/127592_logo.png"
        alt="NAOKO"
        href="#"
        width="140px"
        padding="35px 25px 25px 25px"
      />

      {/* Categories */}
      <Categories
        categories={categories}
        backgroundColor="#f5f5f5"
        color="#000000"
        padding="15px 25px"
        fontSize="11px"
        fontWeight="500"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="1px"
        separator="|"
      />

      {/* Hero */}
      <Hero
        src="https://dgk28ckagqims.cloudfront.net/product-images/127592/189183245_77da46598f75e3f0e49f98aaa0c636da.jpg"
        layout="overlay"
        overlayColor="rgba(0, 0, 0, 0.3)"
        textAlign="center"
        title="SPRING COLLECTION 2025"
        titleColor="#ffffff"
        description="Discover timeless elegance"
        descriptionColor="#ffffff"
        ctaText="Explore Collection"
        ctaHref="#"
        ctaBackgroundColor="#ffffff"
        ctaTextColor="#000000"
      />

      <Spacer height="50px" />

      {/* Featured Product */}
      <Text
        text="FEATURED PIECE"
        fontSize="24px"
        fontWeight="300"
        color="#000000"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="3px"
        padding="0 25px 30px 25px"
      />

      <ProductCard
        {...featuredProduct}
        layout="horizontal"
        imagePosition="right"
        ctaBackgroundColor="#000000"
        ctaTextColor="#ffffff"
      />

      <Spacer height="50px" />

      <Divider color="#e0e0e0" height="1px" />

      <Spacer height="50px" />

      {/* More Products */}
      <Text
        text="NEW ARRIVALS"
        fontSize="24px"
        fontWeight="300"
        color="#000000"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="3px"
        padding="0 25px 30px 25px"
      />

      <ProductGrid
        products={gridProducts}
        columns={2}
        showText={true}
        gap="20px"
      />

      <Spacer height="60px" />

      {/* Benefits */}
      <BenefitsGrid
        benefits={benefits}
        columns={4}
        backgroundColor="#f9f9f9"
        titleColor="#000000"
        descriptionColor="#666666"
        iconColor="#000000"
        titleTextTransform="uppercase"
        titleLetterSpacing="1px"
        titleFontSize="11px"
        titleFontWeight="600"
        descriptionFontSize="10px"
        padding="40px 15px"
        itemPadding="15px 10px"
        spacing="15px"
        iconSize="28px"
      />

      <Spacer height="40px" />

      {/* Footer */}
      <Footer
        content={footerContent}
        backgroundColor="#000000"
        color="#ffffff"
        padding="50px 25px"
        fontSize="11px"
        align="center"
      />
    </div>
  );
};
