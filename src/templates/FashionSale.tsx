import React from 'react';
import { Banner } from '../components/Banner';
import { Logo } from '../components/Logo';
import { Categories } from '../components/Categories';
import { Hero } from '../components/Hero';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { ProductGrid } from '../components/ProductGrid';
import { BenefitsGrid } from '../components/BenefitsGrid';
import { Spacer } from '../components/Spacer';
import { Footer } from '../components/Footer';
import { DiscountCode } from '../components/DiscountCode';

export const FashionSale: React.FC = () => {
  const categories = [
    { label: 'Women Sale', href: '#' },
    { label: 'Men Sale', href: '#' },
    { label: 'Accessories', href: '#' },
    { label: 'Last Chance', href: '#' },
  ];

  const products = [
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137588898_bbac804c66edc9593c71dc2ce960695e.jpg',
      title: 'SILK MIDI DRESS',
      price: '629 PLN',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137589225_c9d4f58d12cb3dfdfa99cc1cf1dea457.jpg',
      title: 'CASHMERE SWEATER',
      price: '909 PLN',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/166873587_66933bd3f67f78635d838184314dc01c.jpg',
      title: 'TAILORED BLAZER',
      price: '1,259 PLN',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/187827374_a8ebb90939e1c7a1bde9e44377c703d7.jpg',
      title: 'LEATHER JACKET',
      price: '1,749 PLN',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6908/118187140_b968c2f9209cdcf612d1eaf753bf6645.jpg',
      title: 'LEATHER HANDBAG',
      price: '1,119 PLN',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6167/33186674_1378dc77cb852d21f39508f7149fd1de.jpg',
      title: 'SLIM FIT SUIT',
      price: '2,099 PLN',
      href: '#',
    },
  ];

  const benefits = [
    { icon: 'fas fa-fire', title: 'UP TO 70% OFF', iconType: 'fontawesome' as const },
    { icon: 'fas fa-truck-fast', title: 'FREE SHIPPING', iconType: 'fontawesome' as const },
    { icon: 'fas fa-clock', title: 'ENDS TONIGHT', iconType: 'fontawesome' as const },
    { icon: 'fas fa-gift', title: 'EXTRA 10% OFF', iconType: 'fontawesome' as const },
  ];

  const footerContent = `
    <div style="text-align: center; color: #cccccc;">
      <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600; color: #ffd403;">NAOKO SALE</p>
      <p style="margin: 0 0 15px 0; font-size: 11px;">Questions? Contact us at sale@naoko.pl</p>
      <p style="margin: 0; font-size: 11px;">
        <a href="#" style="color: #ffd403; text-decoration: none; margin: 0 8px;">Shop Sale</a> |
        <a href="#" style="color: #ffd403; text-decoration: none; margin: 0 8px;">Contact</a> |
        <a href="#" style="color: #ffd403; text-decoration: none; margin: 0 8px;">Returns</a>
      </p>
    </div>
  `;

  return (
    <div style={{ backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      {/* Urgent Banner */}
      <Banner
        text="⚡ FINAL HOURS: EXTRA 30% OFF WITH CODE SAVE30"
        backgroundColor="#e74c3c"
        color="#ffffff"
        padding="14px 25px"
        fontSize="13px"
        fontWeight="700"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="1px"
      />

      {/* Logo */}
      <Logo
        src="https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/127592_logo.png"
        alt="NAOKO"
        href="#"
        width="130px"
        padding="30px 25px 20px 25px"
      />

      {/* Categories */}
      <Categories
        categories={categories}
        backgroundColor="#ffd403"
        color="#000000"
        padding="15px 25px"
        fontSize="12px"
        fontWeight="600"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="1.5px"
        separator="•"
      />

      {/* Hero */}
      <Hero
        src="https://dgk28ckagqims.cloudfront.net/product-images/127592/189183245_77da46598f75e3f0e49f98aaa0c636da.jpg"
        layout="overlay"
        overlayColor="rgba(231, 76, 60, 0.4)"
        textAlign="center"
        title="SUMMER SALE"
        titleColor="#ffffff"
        description="UP TO 70% OFF EVERYTHING"
        descriptionColor="#ffffff"
        ctaText="Shop Now →"
        ctaHref="#"
        ctaBackgroundColor="#ffd403"
        ctaTextColor="#000000"
      />

      <Spacer height="40px" />

      {/* Discount Code */}
      <DiscountCode
        code="SAVE30"
        discountAmount="🔥 -30%"
        title="EXTRA RABAT NA WYPRZEDAŻ"
        description="Użyj tego kodu i otrzymaj dodatkowe 30% zniżki na wszystkie produkty wyprzedażowe"
        validUntil="Dzisiaj, 23:59"
        style="bold"
        backgroundColor="#000000"
        codeBackgroundColor="#ffd403"
        codeTextColor="#000000"
        titleColor="#ffd403"
        descriptionColor="#ffffff"
        borderColor="#ffd403"
      />

      <Spacer height="40px" />

      {/* Urgency Message */}
      <div style={{ backgroundColor: '#000000', padding: '20px 25px' }}>
        <Text
          text="⏰ SALE ENDS IN 6 HOURS | DON'T MISS OUT"
          fontSize="14px"
          fontWeight="600"
          color="#ffd403"
          textAlign="center"
          textTransform="uppercase"
          letterSpacing="1.5px"
        />
      </div>

      <Spacer height="40px" />

      {/* Benefits Bar */}
      <BenefitsGrid
        benefits={benefits}
        columns={4}
        backgroundColor="#fff3cd"
        titleColor="#000000"
        iconColor="#000000"
        iconSize="28px"
        titleFontSize="11px"
        titleFontWeight="700"
        titleTextTransform="uppercase"
        titleLetterSpacing="1px"
        padding="30px 15px"
        itemPadding="10px"
      />

      <Spacer height="40px" />

      {/* Products Title */}
      <Text
        text="🔥 HOT DEALS"
        fontSize="28px"
        fontWeight="700"
        color="#e74c3c"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="2px"
        padding="0 25px 30px 25px"
      />

      {/* Product Grid */}
      <ProductGrid
        products={products}
        columns={2}
        showText={true}
        gap="20px"
      />

      <Spacer height="40px" />

      {/* CTA Button */}
      <Button
        text="View All Sale Items"
        href="#"
        backgroundColor="#e74c3c"
        color="#ffffff"
        padding="16px 40px"
        borderRadius="0px"
        fontSize="14px"
        fontWeight="700"
        textTransform="uppercase"
        letterSpacing="2px"
        align="center"
      />

      <Spacer height="50px" />

      {/* Footer Banner */}
      <Banner
        text="Use code <strong>SAVE30</strong> for extra 30% off | Free shipping on all orders"
        backgroundColor="#000000"
        color="#ffffff"
        padding="18px 25px"
        fontSize="13px"
        fontWeight="500"
        textAlign="center"
      />

      {/* Footer */}
      <Footer
        content={footerContent}
        backgroundColor="#1a1a1a"
        color="#cccccc"
        padding="40px 25px"
        fontSize="11px"
        align="center"
      />
    </div>
  );
};
