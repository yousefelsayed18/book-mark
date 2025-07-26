export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface SortOption {
  value: string;
  label: string;
}

export interface FilterState {
  search: string;
  sortBy: string;
}