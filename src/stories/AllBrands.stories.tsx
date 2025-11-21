import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Logo, Hero, Text, Button, Spacer, Divider, Footer, ProductCard, ProductGrid, NumberedList } from '../components';

interface BrandProduct {
  imageSrc: string;
  title: string;
  price: string;
  href: string;
}

interface BrandTemplateProps {
  brandName: string;
  heroImage: string;
  logoImage: string;
  variant?: 'cosy' | 'lookbook';
  products?: BrandProduct[];
}

const BrandTemplate: React.FC<BrandTemplateProps> = ({
  brandName,
  heroImage,
  logoImage,
  variant = 'cosy',
  products = []
}) => {
  const isCosy = variant === 'cosy';

  // Default products if none provided
  const defaultProducts: BrandProduct[] = [
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/39937992_864b5a6b32dcac16ed0e54ad304fdea9.jpg',
      title: 'Produkt 1',
      price: '199.00 zł',
      href: '#',
    },
    {
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/171680972_8bb678ff93cfac16cec79b415a3bd8f3.jpg',
      title: 'Produkt 2',
      price: '149.00 zł',
      href: '#',
    },
  ];

  const productList = products.length > 0 ? products : defaultProducts;

  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '20px',
      fontFamily: 'Helvetica, Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff' }}>
        <Logo
          src={logoImage}
          alt={`${brandName} Logo`}
          href="#"
          width={150}
          backgroundColor="#fff"
        />

        <Hero
          src={heroImage}
          alt={`${brandName} Banner`}
          href="#"
          backgroundColor="#fff"
        />

        <Spacer height="20px" backgroundColor="#fff" />

        <Text
          content={`<strong style="font-size: 22px;">Odkryj naszą nową kolekcję</strong>`}
          align="center"
          padding="10px 25px"
          fontSize="22px"
          fontWeight="700"
          color="#000000"
          backgroundColor="#fff"
        />

        <Text
          content="Sprawdź najnowsze produkty i skorzystaj z wyjątkowych promocji!"
          align="center"
          padding="10px 25px"
          fontSize="14px"
          color="#666666"
          backgroundColor="#fff"
        />

        <Spacer height="20px" backgroundColor="#fff" />

        <Button
          text="Zobacz kolekcję"
          href="#"
          backgroundColor="#6AA306"
          color="#121212"
          padding="10px 25px"
          borderRadius="4px"
          fontSize="15px"
          fontWeight="600"
        />

        <Spacer height="30px" backgroundColor="#fff" />

        <Divider borderColor="#cccccc" borderWidth="1px" backgroundColor="#fff" />

        <Spacer height="20px" backgroundColor="#fff" />

        {isCosy ? (
          <>
            <Text
              content={`<strong style="font-size: 18px;">Polecane produkty</strong>`}
              align="center"
              padding="10px 25px"
              fontSize="18px"
              fontWeight="600"
              color="#000000"
              backgroundColor="#fff"
            />

            <Spacer height="20px" backgroundColor="#fff" />

            {productList.slice(0, 2).map((product, index) => (
              <React.Fragment key={index}>
                <ProductCard
                  imageSrc={product.imageSrc}
                  title={product.title}
                  price={product.price}
                  description="Sprawdź szczegóły i kup teraz!"
                  href={product.href}
                  ctaText="Zobacz produkt"
                  layout="horizontal"
                  imagePosition={index % 2 === 0 ? 'left' : 'right'}
                />
                {index < 1 && <Spacer height="20px" backgroundColor="#fff" />}
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            <ProductGrid
              products={productList.slice(0, 4)}
              columns={2}
              showText={false}
              gap="12px"
              backgroundColor="#f9f9fb"
            />
          </>
        )}

        <Spacer height="30px" backgroundColor="#fff" />

        <Divider borderColor="#cccccc" borderWidth="1px" backgroundColor="#fff" />

        <Spacer height="30px" backgroundColor="#fff" />

        <Text
          content={`<strong style="font-size: 18px;">Dlaczego warto?</strong>`}
          align="center"
          padding="10px 25px"
          fontSize="18px"
          fontWeight="600"
          color="#000000"
          backgroundColor="#fff"
        />

        <Spacer height="20px" backgroundColor="#fff" />

        <NumberedList
          items={[
            {
              title: 'Szybka dostawa',
              description: 'Realizacja zamówienia w 24h i darmowa dostawa od 200 zł',
            },
            {
              title: 'Gwarancja jakości',
              description: 'Wszystkie produkty objęte są pełną gwarancją producenta',
            },
            {
              title: 'Bezpieczne płatności',
              description: 'Płać wygodnie - obsługujemy wszystkie popularne metody płatności',
            },
          ]}
          backgroundColor="#f9f9fb"
          numberBackgroundColor="#6AA306"
          numberTextColor="#ffffff"
        />

        <Spacer height="30px" backgroundColor="#fff" />

        <Divider borderColor="#cccccc" borderWidth="1px" backgroundColor="#fff" />

        <Footer
          content={`© 2025 ${brandName}. Wszystkie prawa zastrzeżone.`}
          backgroundColor="#f5f5f5"
          padding="20px 25px"
          fontSize="12px"
          color="#7f8c8d"
        />
      </div>
    </div>
  );
};

const meta: Meta<typeof BrandTemplate> = {
  title: 'Email Templates/Brand Templates',
  component: BrandTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['cosy', 'lookbook'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BrandTemplate>;

export const MadeInLab_Cosy: Story = {
  args: {
    brandName: 'Made in Lab',
    heroImage: '/images/madeinlab-12508-cosy-img5.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/12508_logo.png',
    variant: 'cosy',
    products: [
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/9885/10661267_ab8aa213172fa7228e810fd76214f6ba.jpg',
        title: 'Krem do twarzy',
        price: '89.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/9885/10661287_906a139b590c90e8a57797a371ccd1aa.jpg',
        title: 'Serum nawilżające',
        price: '119.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/9885/10661400_f6cf4a0b66894079cc351605c9578d11.jpg',
        title: 'Maska do twarzy',
        price: '69.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/9885/10662726_b948311b8b46edb633cddbcbcfb453df.jpg',
        title: 'Żel do mycia',
        price: '49.00 zł',
        href: '#',
      },
    ],
  },
};

export const MadeInLab_Lookbook: Story = {
  args: {
    brandName: 'Made in Lab',
    heroImage: '/images/madeinlab-12508-lookbook-img6.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/12508_logo.png',
    variant: 'lookbook',
    products: [
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/9885/10661267_ab8aa213172fa7228e810fd76214f6ba.jpg',
        title: 'Krem do twarzy',
        price: '89.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/9885/10661287_906a139b590c90e8a57797a371ccd1aa.jpg',
        title: 'Serum nawilżające',
        price: '119.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/9885/10661400_f6cf4a0b66894079cc351605c9578d11.jpg',
        title: 'Maska do twarzy',
        price: '69.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/9885/10662726_b948311b8b46edb633cddbcbcfb453df.jpg',
        title: 'Żel do mycia',
        price: '49.00 zł',
        href: '#',
      },
    ],
  },
};

export const Recman_Cosy: Story = {
  args: {
    brandName: 'Recman',
    heroImage: '/images/recman-6167-cosy-img15.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/tracker-branding/6167/435a9ab6-589d-44ac-86a6-48984c63f662.png',
    variant: 'cosy',
    products: [
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6167/33186674_1378dc77cb852d21f39508f7149fd1de.jpg',
        title: 'Garnitur Muffa Granat',
        price: '1299.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6167/1242544_d5ffe8356a5811401615c166136cdc30.jpg',
        title: 'Poszetka Biała',
        price: '79.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6167/15785214_f6fbdb832c5c0de85138d413971d29bb.jpg',
        title: 'Sweter Anso Bordo',
        price: '299.00 zł',
        href: '#',
      },
    ],
  },
};

export const Recman_Lookbook: Story = {
  args: {
    brandName: 'Recman',
    heroImage: '/images/recman-6167-lookbook-img16.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/tracker-branding/6167/435a9ab6-589d-44ac-86a6-48984c63f662.png',
    variant: 'lookbook',
    products: [
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6167/33186674_1378dc77cb852d21f39508f7149fd1de.jpg',
        title: 'Garnitur Muffa Granat',
        price: '1299.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6167/1242544_d5ffe8356a5811401615c166136cdc30.jpg',
        title: 'Poszetka Biała',
        price: '79.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6167/15785214_f6fbdb832c5c0de85138d413971d29bb.jpg',
        title: 'Sweter Anso Bordo',
        price: '299.00 zł',
        href: '#',
      },
    ],
  },
};

export const Naoko_Cosy: Story = {
  args: {
    brandName: 'Naoko',
    heroImage: '/images/naoko-127592-cosy-img9.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/127592_logo.png',
    variant: 'cosy',
    products: [
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137588898_bbac804c66edc9593c71dc2ce960695e.jpg',
        title: 'Sukienka elegancka',
        price: '399.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137589225_c9d4f58d12cb3dfdfa99cc1cf1dea457.jpg',
        title: 'Bluzka damska',
        price: '149.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/166873587_66933bd3f67f78635d838184314dc01c.jpg',
        title: 'Spodnie casualowe',
        price: '199.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/187827374_a8ebb90939e1c7a1bde9e44377c703d7.jpg',
        title: 'Sweter oversize',
        price: '249.00 zł',
        href: '#',
      },
    ],
  },
};

export const Naoko_Lookbook: Story = {
  args: {
    brandName: 'Naoko',
    heroImage: '/images/naoko-127592-lookbook-img10.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/127592_logo.png',
    variant: 'lookbook',
    products: [
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137588898_bbac804c66edc9593c71dc2ce960695e.jpg',
        title: 'Sukienka elegancka',
        price: '399.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137589225_c9d4f58d12cb3dfdfa99cc1cf1dea457.jpg',
        title: 'Bluzka damska',
        price: '149.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/166873587_66933bd3f67f78635d838184314dc01c.jpg',
        title: 'Spodnie casualowe',
        price: '199.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/187827374_a8ebb90939e1c7a1bde9e44377c703d7.jpg',
        title: 'Sweter oversize',
        price: '249.00 zł',
        href: '#',
      },
    ],
  },
};

export const Nastopy_Cosy: Story = {
  args: {
    brandName: 'Na Stopy',
    heroImage: '/images/nastopy-6908-cosy-img11.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/6908_logo.png',
    variant: 'cosy',
    products: [
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6908/118187140_b968c2f9209cdcf612d1eaf753bf6645.jpg',
        title: 'Buty sportowe damskie',
        price: '299.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6908/3076757_471479f04b60356c5de5e0792d8ef3e1.jpg',
        title: 'Sneakersy casualowe',
        price: '349.00 zł',
        href: '#',
      },
    ],
  },
};

export const Nastopy_Lookbook: Story = {
  args: {
    brandName: 'Na Stopy',
    heroImage: '/images/nastopy-6908-lookbook-img12.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/6908_logo.png',
    variant: 'lookbook',
    products: [
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6908/118187140_b968c2f9209cdcf612d1eaf753bf6645.jpg',
        title: 'Buty sportowe damskie',
        price: '299.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6908/3076757_471479f04b60356c5de5e0792d8ef3e1.jpg',
        title: 'Sneakersy casualowe',
        price: '349.00 zł',
        href: '#',
      },
    ],
  },
};

export const Orteo_Cosy: Story = {
  args: {
    brandName: 'Orteo',
    heroImage: '/images/orteo-8428-cosy-img13.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/tracker-branding/8428/1b214c2b-4d4b-42f3-b76c-48fc5df8bcd0.png',
    variant: 'cosy',
    products: [
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/8428/10183724_1ad8f6d42d6228dd3d593edb50a4630f.jpg',
        title: 'Poduszka ortopedyczna',
        price: '159.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/8428/13037273_295da4bc074e06fcfb9d35bb9be26844.jpg',
        title: 'Pas na kręgosłup',
        price: '89.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/8428/6125034_2c1a8f929f9c4c44543ff755bbbcba4b.jpg',
        title: 'Wkładki ortopedyczne',
        price: '69.00 zł',
        href: '#',
      },
    ],
  },
};

export const Orteo_Lookbook: Story = {
  args: {
    brandName: 'Orteo',
    heroImage: '/images/orteo-8428-lookbook-img14.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/tracker-branding/8428/1b214c2b-4d4b-42f3-b76c-48fc5df8bcd0.png',
    variant: 'lookbook',
    products: [
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/8428/10183724_1ad8f6d42d6228dd3d593edb50a4630f.jpg',
        title: 'Poduszka ortopedyczna',
        price: '159.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/8428/13037273_295da4bc074e06fcfb9d35bb9be26844.jpg',
        title: 'Pas na kręgosłup',
        price: '89.00 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/8428/6125034_2c1a8f929f9c4c44543ff755bbbcba4b.jpg',
        title: 'Wkładki ortopedyczne',
        price: '69.00 zł',
        href: '#',
      },
    ],
  },
};

export const Bielenda_Cosy: Story = {
  args: {
    brandName: 'Bielenda',
    heroImage: '/images/bielenda-19625-img3.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/19625_logo.png',
    variant: 'cosy',
    products: [
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/19625/183596805_ada6607bcf161f174538ceec385f75d3.jpg',
        title: 'Krem do twarzy Carbo Detox',
        price: '29.90 zł',
        href: '#',
      },
      {
        imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/19625/37688203_99b8f8c489b94c16fce0c268eb72909d.jpg',
        title: 'Serum przeciwzmarszczkowe',
        price: '39.90 zł',
        href: '#',
      },
    ],
  },
};

export const Abra_Cosy: Story = {
  args: {
    brandName: 'Abra',
    heroImage: '/images/abra-6623-img4.jpg',
    logoImage: 'https://dgk28ckagqims.cloudfront.net/ds-tracker-property-logos/6623_logo.png',
    variant: 'cosy',
  },
};
