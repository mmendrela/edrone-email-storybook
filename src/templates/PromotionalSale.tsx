import React from 'react';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { CountdownTimer } from '../components/CountdownTimer';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { ProductGrid } from '../components/ProductGrid';
import { Divider } from '../components/Divider';
import { Spacer } from '../components/Spacer';
import { Footer } from '../components/Footer';

export const PromotionalSale: React.FC = () => {
  const categories = [
    { label: 'Nowości', href: '#' },
    { label: 'Damskie', href: '#' },
    { label: 'Męskie', href: '#' },
    { label: 'Sale', href: '#' },
  ];

  const products = [
    {
      imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
      title: 'SZALIK PUFFY EMERALD',
      price: '104.65 PLN',
      href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
    },
    {
      imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
      title: 'SZALIK PUFFY CLOUD',
      price: '104.65 PLN',
      href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
    },
    {
      imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
      title: 'CZAPKA FLUFFY BUBBLEGUM',
      price: '88.90 PLN',
      href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137588898_bbac804c66edc9593c71dc2ce960695e.jpg',
      title: 'SILK MIDI DRESS',
      price: '629 PLN',
      href: '#',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      {/* Header with Logo */}
      <Header
        logo={{
          src: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
          alt: 'Nike',
          href: 'https://nike.com',
          width: 60,
        }}
        preheaderText="Specjalna oferta tylko dla Ciebie - nie przegap!"
        browserLinkText="Zobacz w przeglądarce"
        browserLinkHref="#"
        backgroundColor="#ffffff"
      />

      {/* Categories */}
      <Categories
        categories={categories}
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

      <Spacer height="20px" />

      {/* Countdown Timer */}
      <CountdownTimer
        days={2}
        hours={14}
        minutes={35}
        seconds={48}
        title="Promocja kończy się za:"
        style="default"
        backgroundColor="#ffffff"
        boxBackgroundColor="#3498db"
        boxTextColor="#ffffff"
      />

      <Spacer height="30px" />

      {/* Main Content */}
      <div style={{ backgroundColor: '#ffffff', padding: '30px 0' }}>
        <Text
          content='<h2 style="margin: 0 0 12px 0; font-size: 24px; font-weight: 700; color: #000000;">Odbierz rabat -30% na wszystko</h2><p style="margin: 0; font-size: 16px; line-height: 1.6; color: #666666;">Tylko przez najbliższe 3 dni możesz skorzystać z naszej wyjątkowej promocji. To najlepszy moment, żeby uzupełnić swoją garderobę!</p>'
          align="center"
          padding="0 25px 20px 25px"
          backgroundColor="transparent"
        />
        <Button
          text="Kup teraz ze zniżką"
          href="#"
          backgroundColor="#3498db"
          color="#ffffff"
          padding="14px 36px"
          borderRadius="4px"
          fontSize="16px"
          fontWeight="600"
          align="center"
        />
      </div>

      <Spacer height="20px" />

      <Divider
        borderColor="#cccccc"
        borderWidth="1px"
        borderStyle="solid"
        width="100%"
        padding="20px 0"
        backgroundColor="transparent"
      />

      {/* Products */}
      <div style={{ backgroundColor: '#ffffff', padding: '30px 0' }}>
        <Text
          content='<h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #000000;">Bestsellery w promocji</h2>'
          align="center"
          padding="0 25px 20px 25px"
          backgroundColor="transparent"
        />
        <ProductGrid
          products={products}
          columns={2}
          showText={true}
          gap="20px"
        />
      </div>

      <Spacer height="20px" />

      {/* Footer */}
      <Footer
        unsubscribeHref="https://example.com/unsubscribe"
        unsubscribeText="Wypisz się z newslettera"
        slogan="Jakość i styl w jednym miejscu"
        companyData={{
          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
          logoAlt: 'Nike',
          logoWidth: 60,
        }}
        socialLinks={[
          { platform: 'facebook', href: 'https://facebook.com' },
          { platform: 'instagram', href: 'https://instagram.com' },
        ]}
        socialStyle="text"
        backgroundColor="#ffffff"
        textColor="#666666"
        linkColor="#3498db"
        padding="30px 20px"
        fontSize="12px"
      />
    </div>
  );
};
