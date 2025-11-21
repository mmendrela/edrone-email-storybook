import React from 'react';
import { Banner } from '../components/Banner';
import { Logo } from '../components/Logo';
import { Categories } from '../components/Categories';
import { Hero } from '../components/Hero';
import { ProductGrid } from '../components/ProductGrid';
import { BenefitsGrid } from '../components/BenefitsGrid';
import { Spacer } from '../components/Spacer';
import { Footer } from '../components/Footer';

export const FashionMinimal: React.FC = () => {
  const categories = [
    { label: 'Women', href: '#' },
    { label: 'Men', href: '#' },
    { label: 'New In', href: '#' },
    { label: 'Sale', href: '#' },
  ];

  const products = [
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
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/166873587_66933bd3f67f78635d838184314dc01c.jpg',
      title: 'TAILORED BLAZER',
      price: '1,799 PLN',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/187827374_a8ebb90939e1c7a1bde9e44377c703d7.jpg',
      title: 'LEATHER JACKET',
      price: '2,499 PLN',
      href: '#',
    },
  ];

  const benefits = [
    { icon: '✓', title: 'FREE SHIPPING' },
    { icon: '✓', title: 'EASY RETURNS' },
    { icon: '✓', title: 'PREMIUM QUALITY' },
  ];

  const footerContent = `
    <div style="text-align: center; color: #ffffff;">
      <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: 500;">NAOKO</p>
      <p style="margin: 0 0 15px 0; font-size: 11px; opacity: 0.8;">ul. Przykładowa 123, 00-001 Warszawa, Polska</p>
      <p style="margin: 0; font-size: 11px;">
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 8px;">Contact</a> |
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 8px;">Privacy Policy</a> |
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 8px;">Terms</a> |
        <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 8px;">Unsubscribe</a>
      </p>
    </div>
  `;

  return (
    <div style={{ backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      {/* Banner */}
      <Banner
        text="FREE WORLDWIDE SHIPPING"
        backgroundColor="#000000"
        color="#ffffff"
        padding="10px 25px"
        fontSize="11px"
        fontWeight="500"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="2px"
      />

      {/* Logo */}
      <Logo
        src="https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/127592_logo.png"
        alt="NAOKO"
        href="#"
        width="120px"
        padding="30px 25px 20px 25px"
      />

      {/* Categories */}
      <Categories
        categories={categories}
        backgroundColor="#ffffff"
        color="#000000"
        padding="15px 25px"
        fontSize="12px"
        fontWeight="500"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="1.5px"
        separator="|"
      />

      {/* Hero */}
      <Hero
        src="https://dgk28ckagqims.cloudfront.net/product-images/127592/189183245_77da46598f75e3f0e49f98aaa0c636da.jpg"
        layout="text-below"
        textAlign="center"
        title="NEW COLLECTION"
        titleColor="#000000"
        description="Spring/Summer 2025"
        descriptionColor="#666666"
        ctaText="Shop Now"
        ctaHref="#"
        ctaBackgroundColor="#000000"
        ctaTextColor="#ffffff"
      />

      <Spacer height="40px" />

      {/* Product Grid */}
      <ProductGrid
        products={products}
        columns={2}
        showText={true}
        gap="20px"
      />

      <Spacer height="50px" />

      {/* Benefits */}
      <BenefitsGrid
        benefits={benefits}
        columns={3}
        backgroundColor="#ffffff"
        titleColor="#000000"
        iconColor="#000000"
        iconSize="20px"
        titleFontSize="11px"
        titleFontWeight="500"
        titleTextTransform="uppercase"
        titleLetterSpacing="2px"
        padding="40px 25px"
        itemPadding="15px 10px"
      />

      <Spacer height="30px" />

      {/* Footer */}
      <Footer
        content={footerContent}
        backgroundColor="#000000"
        color="#ffffff"
        padding="40px 25px"
        fontSize="11px"
        align="center"
      />
    </div>
  );
};
