import React from 'react';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { ProductGrid } from '../components/ProductGrid';
import { Divider } from '../components/Divider';
import { Spacer } from '../components/Spacer';
import { Footer } from '../components/Footer';

export const SimpleAnnouncement: React.FC = () => {
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
      price: '149.50 PLN',
      href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
    },
    {
      imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
      title: 'SZALIK PUFFY CLOUD',
      price: '149.50 PLN',
      href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
    },
    {
      imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
      title: 'CZAPKA FLUFFY BUBBLEGUM',
      price: '127.00 PLN',
      href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137588898_bbac804c66edc9593c71dc2ce960695e.jpg',
      title: 'SILK MIDI DRESS',
      price: '899 PLN',
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
        preheaderText="Ważna informacja - nowa kolekcja już dostępna"
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

      <Spacer height="40px" />

      {/* Main Content */}
      <Text
        content='<h2 style="margin: 0; font-size: 28px; font-weight: 700; color: #000000;">Nowa kolekcja już dostępna</h2>'
        align="center"
        padding="0 25px 20px 25px"
        backgroundColor="#ffffff"
      />

      <Text
        content='<p style="margin: 0; font-size: 16px; line-height: 1.6; color: #666666;">Z radością informujemy, że nasza najnowsza kolekcja wiosenna jest już dostępna w sklepie. Znajdziesz w niej świeże kolory, nowoczesne kroje i najwyższą jakość materiałów.</p>'
        align="center"
        padding="0 25px 20px 25px"
        backgroundColor="#ffffff"
      />

      <Button
        text="Zobacz kolekcję"
        href="#"
        backgroundColor="#3498db"
        color="#ffffff"
        padding="14px 36px"
        borderRadius="4px"
        fontSize="16px"
        fontWeight="600"
        align="center"
      />

      <Spacer height="40px" />

      <Divider
        borderColor="#cccccc"
        borderWidth="1px"
        borderStyle="solid"
        width="80%"
        padding="20px 0"
        backgroundColor="transparent"
      />

      <Spacer height="20px" />

      {/* Products */}
      <Text
        content='<h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #000000;">Produkty z nowej kolekcji</h2>'
        align="center"
        padding="0 25px 20px 25px"
        backgroundColor="#ffffff"
      />

      <ProductGrid
        products={products}
        columns={2}
        showText={true}
        gap="20px"
      />

      <Spacer height="20px" />

      <Text
        content='* Promocja ważna do wyczerpania zapasów. Darmowa dostawa przy zamówieniach powyżej 200 PLN.'
        align="center"
        padding="10px 25px"
        fontSize="11px"
        color="#999999"
        backgroundColor="#ffffff"
      />

      <Spacer height="30px" />

      {/* Footer */}
      <Footer
        unsubscribeHref="https://example.com/unsubscribe"
        unsubscribeText="Wypisz się z newslettera"
        slogan="Odkryj naszą kolekcję"
        categories={[
          { name: 'Nowości', href: 'https://example.com/nowosci' },
          { name: 'Damskie', href: 'https://example.com/damskie' },
          { name: 'Męskie', href: 'https://example.com/meskie' },
          { name: 'Sale', href: 'https://example.com/sale' },
        ]}
        companyData={{
          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
          logoAlt: 'Nike',
          logoWidth: 60,
          email: 'kontakt@nike.com',
        }}
        socialLinks={[
          { platform: 'facebook', href: 'https://facebook.com' },
          { platform: 'instagram', href: 'https://instagram.com' },
        ]}
        socialStyle="text"
        backgroundColor="#ffffff"
        textColor="#666666"
        linkColor="#3498db"
        padding="40px 20px"
        fontSize="12px"
      />
    </div>
  );
};
