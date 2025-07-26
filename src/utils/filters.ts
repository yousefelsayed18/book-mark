import { Product } from '../types';

export const filterProducts = (products: Product[], search: string): Product[] => {
  if (!search.trim()) return products;
  
  return products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
};

export const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'title-az':
      return sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    case 'title-za':
      return sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sortedProducts;
  }
};