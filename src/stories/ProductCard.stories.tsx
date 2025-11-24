import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '../components/ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Email Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    ctaBackgroundColor: { control: 'color' },
    ctaTextColor: { control: 'color' },
    imagePosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    layout: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical', 'image-only'],
    },
    imageBorderRadius: { control: 'text' },
    price: { control: 'number' },
    salePrice: { control: 'number' },
    currency: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;


// ===== E-COMMERCE EXAMPLES =====

export const OnSaleWithBadge: Story = {
    args: {
      imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
      title: 'SZALIK PUFFY EMERALD',
      price: 149.50,
      salePrice: 104.65,
      currency: 'PLN',
      badge: {
        text: '-30%',
        backgroundColor: '#000000',
        textColor: '#ffffff',
      },
      description: 'Elegancki szalik z miękkiej dzianiny - idealny na chłodne dni',
      href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
      ctaText: 'Shop Now',
      ctaBackgroundColor: '#000000',
      ctaTextColor: '#ffffff',
      ctaTextTransform: 'uppercase',
      ctaLetterSpacing: '1px',
      layout: 'vertical',
    },
  };

// ===== HORIZONTAL LAYOUTS =====

export const HorizontalLeft: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    title: 'SZALIK PUFFY CLOUD',
    price: 149.50,
    currency: 'PLN',
    description: 'Ciepły i stylowy dodatek na chłodne dni - mięciutka dzianina',
    href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
    ctaText: 'Discover',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    ctaArrow: 'right',
    layout: 'horizontal',
    imagePosition: 'left',
  },
};

export const HorizontalRight: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
    title: 'CZAPKA FLUFFY BUBBLEGUM',
    price: 127.00,
    currency: 'PLN',
    description: 'Modna czapka w pięknym kolorze - idealny dodatek do jesienno-zimowej stylizacji',
    href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
    ctaText: 'Explore',
    ctaBackgroundColor: 'transparent',
    ctaTextColor: '#000000',
    ctaBorder: '1px solid #000000',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    ctaArrow: 'right',
    layout: 'horizontal',
    imagePosition: 'right',
  },
};

// ===== VERTICAL LAYOUTS =====

export const VerticalFull: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
    title: 'SZALIK PUFFY EMERALD',
    price: 149.50,
    currency: 'PLN',
    description: 'Elegancki szalik z miękkiej dzianiny - idealny na chłodne dni',
    href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
    ctaText: 'Add to Bag',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    layout: 'vertical',
  },
};

export const VerticalMinimal: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    title: 'SZALIK PUFFY CLOUD',
    price: 149.50,
    currency: 'PLN',
    href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
    ctaText: 'View',
    ctaBackgroundColor: 'transparent',
    ctaTextColor: '#000000',
    ctaBorder: '1px solid #000000',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    ctaArrow: 'right',
    layout: 'vertical',
  },
};

// ===== IMAGE ONLY LAYOUTS (Fashion/Lookbook) =====

export const ImageOnlyClickable: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
    href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
    layout: 'image-only',
  },
};

export const ImageOnlyNoLink: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    layout: 'image-only',
  },
};

export const ImageOnlyRounded: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
    href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
    layout: 'image-only',
    imageBorderRadius: '12px',
  },
};

// ===== CUSTOM STYLING =====

export const CustomColors: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
    title: 'CZAPKA FLUFFY BUBBLEGUM',
    price: 127.00,
    currency: 'PLN',
    description: 'Oferta specjalna - modna czapka w pięknym kolorze',
    href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
    ctaText: 'Shop',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    backgroundColor: '#ffffff',
    layout: 'vertical',
  },
};

export const RoundedImage: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
    title: 'SZALIK PUFFY EMERALD',
    price: 149.50,
    currency: 'PLN',
    description: 'Elegancki szalik z miękkiej dzianiny',
    href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
    ctaText: 'View Details',
    ctaBackgroundColor: 'transparent',
    ctaTextColor: '#000000',
    ctaBorder: '1px solid #000000',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    ctaArrow: 'right',
    layout: 'vertical',
    imageBorderRadius: '12px',
  },
};

export const RoundedImageHorizontal: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    title: 'SZALIK PUFFY CLOUD',
    price: 149.50,
    currency: 'PLN',
    description: 'Ciepły i stylowy dodatek na chłodne dni',
    href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
    ctaText: 'Shop Now',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    layout: 'horizontal',
    imagePosition: 'left',
    imageBorderRadius: '12px',
  },
};

// ===== FASHION EXAMPLES =====

export const FashionVerticalClean: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
    title: 'SZALIK PUFFY EMERALD',
    price: 149.50,
    currency: 'PLN',
    description: 'Elegancki szalik idealny na każdą okazję',
    href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
    ctaText: 'Shop',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    layout: 'vertical',
  },
};

export const FashionHorizontalMinimal: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    title: 'SZALIK PUFFY CLOUD',
    price: 149.50,
    currency: 'PLN',
    description: 'Wysokiej jakości dzianina',
    href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
    ctaText: 'Explore',
    layout: 'horizontal',
    imagePosition: 'left',
    ctaBackgroundColor: 'transparent',
    ctaTextColor: '#000000',
    ctaBorder: '1px solid #000000',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    ctaArrow: 'right',
  },
};

export const FashionVerticalNoDescription: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
    title: 'CZAPKA FLUFFY BUBBLEGUM',
    price: 127.00,
    currency: 'PLN',
    href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
    ctaText: 'Discover',
    layout: 'vertical',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
  },
};

export const FashionHorizontalRight: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
    title: 'SZALIK PUFFY EMERALD',
    price: 149.50,
    currency: 'PLN',
    description: 'Mięciutka dzianina, ponadczasowy design',
    href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
    ctaText: 'Shop Now',
    layout: 'horizontal',
    imagePosition: 'right',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
  },
};

export const FashionAccessories: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
    title: 'CZAPKA FLUFFY BUBBLEGUM',
    price: 127.00,
    currency: 'PLN',
    description: 'Idealny dodatek do stylizacji',
    href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
    ctaText: 'Add to Bag',
    layout: 'vertical',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
  },
};

export const FashionWinterCollection: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    title: 'SZALIK PUFFY CLOUD',
    price: 149.50,
    currency: 'PLN',
    description: 'Ciepło i wygoda na zimowe dni',
    href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
    ctaText: 'View Collection',
    layout: 'horizontal',
    imagePosition: 'left',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    ctaArrow: 'right',
  },
};

export const FashionImageOnlyClean: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
    href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
    layout: 'image-only',
  },
};

export const FashionVerticalWithRoundedImage: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC2415.jpg?v=1761334492',
    title: 'SZALIK PUFFY CLOUD',
    price: 149.50,
    currency: 'PLN',
    description: 'Lekka i ciepła dzianina',
    href: 'https://naoko-store.pl/products/szalik-puffy-cloud',
    ctaText: 'Shop',
    layout: 'vertical',
    imageBorderRadius: '8px',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
  },
};

export const FashionMinimalOutlineButton: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC4824_40cff851-41d3-4f94-bd08-bc2b6ae53a18.jpg?v=1762414501',
    title: 'CZAPKA FLUFFY BUBBLEGUM',
    price: 127.00,
    currency: 'PLN',
    description: 'Limitowana edycja',
    href: 'https://naoko-store.pl/products/czapka-fluffy-bubblegum',
    ctaText: 'Explore',
    layout: 'vertical',
    ctaBackgroundColor: 'transparent',
    ctaTextColor: '#000000',
    ctaBorder: '1px solid #000000',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    ctaArrow: 'right',
  },
};

export const FashionLuxuryProduct: Story = {
  args: {
    imageSrc: 'https://cdn.shopify.com/s/files/1/0586/2509/7894/files/DSC5064_9ec28c74-9885-4554-a03e-d37e731d4be5.jpg?v=1762161083',
    title: 'SZALIK PUFFY EMERALD',
    price: 149.50,
    currency: 'PLN',
    description: 'Ekskluzywny design, najwyższa jakość',
    href: 'https://naoko-store.pl/products/szalik-puffy-emerald',
    ctaText: 'Inquire',
    layout: 'horizontal',
    imagePosition: 'right',
    ctaBackgroundColor: 'transparent',
    ctaTextColor: '#000000',
    ctaBorder: '1px solid #000000',
    ctaTextTransform: 'uppercase',
    ctaLetterSpacing: '1px',
    ctaArrow: 'right',
  },
};
