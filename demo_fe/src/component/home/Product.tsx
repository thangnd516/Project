import { ProductCardProps } from './ProductCard';

const products: ProductCardProps['product'][] = [
  {
    title: 'Baby Diaper Cream',
    image: '/api/placeholder/400/320',
    badge: 'NEW',
    price: '$18.99',
    oldPrice: '$24.99',
    rating: 4.5,
    reviews: 12
  },
  {
    title: 'Anti-Hair Fall Daily Use Shampoo',
    image: '/api/placeholder/400/320',
    badge: 'SALE',
    price: '$10.25',
    oldPrice: '$15.99',
    rating: 4,
    reviews: 28
  },
  {
    title: 'Meditation Body Scrub',
    image: '/api/placeholder/400/320',
    badge: 'HOT',
    price: '$22.50',
    oldPrice: '$29.99',
    rating: 5,
    reviews: 43
  },
  {
    title: 'Natural Detox Sugar Management',
    image: '/api/placeholder/400/320',
    badge: 'SALE',
    price: '$19.99',
    oldPrice: '$24.99',
    rating: 4.5,
    reviews: 19
  },
  {
    title: "Organic Women's Wellness Supplement",
    image: '/api/placeholder/400/320',
    badge: 'HOT',
    price: '$27.50',
    oldPrice: '$35.99',
    rating: 5,
    reviews: 31
  },
  {
    title: 'Support Anti-Pain Relief Capsules',
    image: '/api/placeholder/400/320',
    badge: 'SALE',
    price: '$15.99',
    oldPrice: '$23.50',
    rating: 5,
    reviews: 26
  }
];

export default products;
