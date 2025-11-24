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
      imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/39937992_864b5a6b32dcac16ed0e54ad304fdea9.jpg',
      title: 'Lies of P',
      price: 149.90,
      salePrice: 109.90,
      currency: 'zł',
      badge: {
        text: '-25%',
        backgroundColor: '#e74c3c',
        textColor: '#ffffff',
      },
      description: 'Mroczne soulslike w świecie inspirowanym Pinokiem — odkryj intrygi i wybory kształtujące fabułę.',
      href: 'https://muve.pl/p/lies-of-p-steam-2184244',
      ctaText: 'Kup w promocji',
      layout: 'vertical',
    },
  };

// ===== HORIZONTAL LAYOUTS =====

export const HorizontalLeft: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/39937992_864b5a6b32dcac16ed0e54ad304fdea9.jpg',
    title: 'Lies of P',
    price: 109.90,
    currency: 'zł',
    description: 'Mroczne soulslike w świecie inspirowanym Pinokiem — odkryj intrygi i wybory kształtujące fabułę.',
    href: 'https://muve.pl/p/lies-of-p-steam-2184244',
    ctaText: 'Zobacz grę',
    layout: 'horizontal',
    imagePosition: 'left',
  },
};

export const HorizontalRight: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/171680972_8bb678ff93cfac16cec79b415a3bd8f3.jpg',
    title: 'Dying Light: Definitive 10th Anniversary Edition',
    price: 142.49,
    currency: 'zł',
    description: 'Kultowy survival horror z parkourem, nocnymi zagrożeniami i trybem kooperacji.',
    href: 'https://muve.pl/p/dying-light-definitive-10th-anniversary-edition-3188e8',
    ctaText: 'Kup teraz',
    layout: 'horizontal',
    imagePosition: 'right',
  },
};

// ===== VERTICAL LAYOUTS =====

export const VerticalFull: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/391856_17bc47a1c0426fb2f8fc2008b1b3c1b8.jpg',
    title: 'Nintendo eShop digital code 70 zł',
    price: 70.00,
    currency: 'zł',
    description: 'Kod do eShop na Nintendo Switch — szybki sposób na zakup gier i dodatków.',
    href: 'https://muve.pl/p/nintendo-eshop-digital-code-70-zl-nintendo-223485',
    ctaText: 'Kup kod',
    layout: 'vertical',
  },
};

export const VerticalMinimal: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/356273_b3cbf800a0a5505fac9d8489726b3b38.jpg',
    title: 'Xbox Gift Card',
    price: 99.99,
    currency: 'zł',
    href: '#',
    layout: 'vertical',
  },
};

// ===== IMAGE ONLY LAYOUTS (Fashion/Lookbook) =====

export const ImageOnlyClickable: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/356211_fb880d06c57b8f33289764dd08c5473c.jpg',
    href: 'https://example.com/lookbook',
    layout: 'image-only',
  },
};

export const ImageOnlyNoLink: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/39937992_864b5a6b32dcac16ed0e54ad304fdea9.jpg',
    layout: 'image-only',
  },
};

export const ImageOnlyRounded: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/356211_fb880d06c57b8f33289764dd08c5473c.jpg',
    href: '#',
    layout: 'image-only',
    imageBorderRadius: '12px',
  },
};

// ===== CUSTOM STYLING =====

export const CustomColors: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/171680972_8bb678ff93cfac16cec79b415a3bd8f3.jpg',
    title: 'Special Offer',
    price: 149.99,
    currency: 'PLN',
    description: 'Limited time offer - get this amazing product at a discounted price!',
    href: '#',
    ctaText: 'Get Deal',
    ctaBackgroundColor: '#e74c3c',
    ctaTextColor: '#ffffff',
    backgroundColor: '#ffffff',
    layout: 'vertical',
  },
};

export const RoundedImage: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/39937992_864b5a6b32dcac16ed0e54ad304fdea9.jpg',
    title: 'Lies of P',
    price: 109.90,
    currency: 'zł',
    description: 'Mroczne soulslike w świecie inspirowanym Pinokiem.',
    href: '#',
    ctaText: 'Zobacz grę',
    layout: 'vertical',
    imageBorderRadius: '12px',
  },
};

export const RoundedImageHorizontal: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/5645/171680972_8bb678ff93cfac16cec79b415a3bd8f3.jpg',
    title: 'Dying Light',
    price: 142.49,
    currency: 'zł',
    description: 'Kultowy survival horror z parkourem.',
    href: '#',
    ctaText: 'Kup teraz',
    layout: 'horizontal',
    imagePosition: 'left',
    imageBorderRadius: '12px',
  },
};

// ===== FASHION EXAMPLES =====

export const FashionVerticalClean: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137588898_bbac804c66edc9593c71dc2ce960695e.jpg',
    title: 'SILK MIDI DRESS',
    price: 899,
    currency: 'PLN',
    description: 'Elegant silk dress perfect for any occasion',
    href: '#',
    ctaText: 'Shop Now',
    layout: 'vertical',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
  },
};

export const FashionHorizontalMinimal: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137589225_c9d4f58d12cb3dfdfa99cc1cf1dea457.jpg',
    title: 'CASHMERE SWEATER',
    price: 1299,
    currency: 'PLN',
    description: 'Premium Italian cashmere',
    href: '#',
    ctaText: 'View Details',
    layout: 'horizontal',
    imagePosition: 'left',
    ctaBackgroundColor: 'transparent',
    ctaTextColor: '#000000',
  },
};

export const FashionVerticalNoDescription: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/166873587_66933bd3f67f78635d838184314dc01c.jpg',
    title: 'TAILORED BLAZER',
    price: 1799,
    currency: 'PLN',
    href: '#',
    ctaText: 'Discover',
    layout: 'vertical',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
  },
};

export const FashionHorizontalRight: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/187827374_a8ebb90939e1c7a1bde9e44377c703d7.jpg',
    title: 'LEATHER JACKET',
    price: 2499,
    currency: 'PLN',
    description: 'Genuine leather, timeless design',
    href: '#',
    ctaText: 'Shop Now',
    layout: 'horizontal',
    imagePosition: 'right',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
  },
};

export const FashionAccessories: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6908/118187140_b968c2f9209cdcf612d1eaf753bf6645.jpg',
    title: 'LEATHER HANDBAG',
    price: 1599,
    currency: 'PLN',
    description: 'Handcrafted Italian leather',
    href: '#',
    ctaText: 'Add to Cart',
    layout: 'vertical',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
  },
};

export const FashionMenswear: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6167/33186674_1378dc77cb852d21f39508f7149fd1de.jpg',
    title: 'SLIM FIT SUIT',
    price: 2999,
    currency: 'PLN',
    description: 'Wool blend, modern cut',
    href: '#',
    ctaText: 'View Collection',
    layout: 'horizontal',
    imagePosition: 'left',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
  },
};

export const FashionImageOnlyClean: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/189183245_77da46598f75e3f0e49f98aaa0c636da.jpg',
    href: '#',
    layout: 'image-only',
  },
};

export const FashionVerticalWithRoundedImage: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/137588898_bbac804c66edc9593c71dc2ce960695e.jpg',
    title: 'SUMMER DRESS',
    price: 599,
    currency: 'PLN',
    description: 'Lightweight linen blend',
    href: '#',
    ctaText: 'Shop',
    layout: 'vertical',
    imageBorderRadius: '8px',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
  },
};

export const FashionMinimalOutlineButton: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/6908/3076757_471479f04b60356c5de5e0792d8ef3e1.jpg',
    title: 'DESIGNER SNEAKERS',
    price: 899,
    currency: 'PLN',
    description: 'Limited edition',
    href: '#',
    ctaText: 'Explore',
    layout: 'vertical',
    ctaBackgroundColor: 'transparent',
    ctaTextColor: '#000000',
  },
};

export const FashionLuxuryProduct: Story = {
  args: {
    imageSrc: 'https://dgk28ckagqims.cloudfront.net/product-images/127592/166873587_66933bd3f67f78635d838184314dc01c.jpg',
    title: 'EVENING GOWN',
    price: 4999,
    currency: 'PLN',
    description: 'Exclusive design, made to order',
    href: '#',
    ctaText: 'Contact Us',
    layout: 'horizontal',
    imagePosition: 'right',
    ctaBackgroundColor: '#000000',
    ctaTextColor: '#ffffff',
  },
};
