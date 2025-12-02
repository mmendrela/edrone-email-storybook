import React from 'react';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Text } from '../components/Text';
import { NumberedList } from '../components/NumberedList';
import { Divider } from '../components/Divider';
import { ProductGrid } from '../components/ProductGrid';
import { Button } from '../components/Button';
import { Spacer } from '../components/Spacer';
import { Footer } from '../components/Footer';

export const NewsletterTips: React.FC = () => {
  const categories = [
    { label: 'Nowości', href: '#' },
    { label: 'Poradnik', href: '#' },
    { label: 'Bestsellery', href: '#' },
  ];

  const tips = [
    {
      title: 'Wybierz odpowiedni rozmiar',
      description: 'Sprawdź naszą tabelę rozmiarów, aby znaleźć idealne dopasowanie.',
    },
    {
      title: 'Poznaj materiały',
      description: 'Każdy produkt ma szczegółowy opis składu i właściwości materiału.',
    },
    {
      title: 'Pielęgnuj ubrania',
      description: 'Postępuj zgodnie z instrukcjami na metce, aby zachować świeży wygląd.',
    },
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
        preheaderText="Twój przewodnik po mądrzejszych zakupach"
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

      <Spacer height="30px" />

      {/* Header Text */}
      <div style={{ backgroundColor: '#ffffff', padding: '30px 0' }}>
        <Text
          content='<h2 style="margin: 0; font-size: 28px; font-weight: 700; color: #000000;">3 porady na lepsze zakupy</h2>'
          align="center"
          padding="0 25px 10px 25px"
          backgroundColor="transparent"
        />

        <Text
          content='<p style="margin: 0; font-size: 16px; line-height: 1.6; color: #666666;">Poznaj nasze sprawdzone wskazówki, które pomogą Ci cieszyć się zakupami jeszcze bardziej.</p>'
          align="center"
          padding="0 25px 0 25px"
          backgroundColor="transparent"
        />
      </div>

      <Spacer height="20px" />

      {/* Numbered List */}
      <NumberedList
        items={tips}
        backgroundColor="#ffffff"
        numberBackgroundColor="#3498db"
        numberTextColor="#ffffff"
        titleColor="#000000"
        descriptionColor="#666666"
        padding="32px"
      />

      <Spacer height="20px" />

      <Divider
        borderColor="#cccccc"
        borderWidth="1px"
        borderStyle="solid"
        width="100%"
        padding="20px 0"
        backgroundColor="transparent"
      />

      {/* Products Section */}
      <div style={{ backgroundColor: '#ffffff', padding: '30px 0' }}>
        <Text
          content='<h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #000000;">Polecane produkty</h2>'
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
        <Spacer height="20px" backgroundColor="transparent" />
        <Button
          text="Zobacz wszystkie produkty"
          href="#"
          backgroundColor="#3498db"
          color="#ffffff"
          padding="12px 32px"
          borderRadius="4px"
          fontSize="14px"
          fontWeight="600"
          align="center"
        />
      </div>

      <Spacer height="20px" />

      {/* Footer */}
      <Footer
        unsubscribeHref="https://example.com/unsubscribe"
        unsubscribeText="Wypisz się z newslettera"
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
        padding="30px 20px"
        fontSize="12px"
      />
    </div>
  );
};
