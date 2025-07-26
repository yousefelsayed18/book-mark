import React, { useState, useEffect, useMemo } from 'react';
import { Product, ProductFilters } from '../types/Product';
import { api } from '../services/api';
import { filterAndSortProducts } from '../utils/productUtils';
import SearchAndFilter from '../components/products/SearchAndFilter';
import ProductGrid from '../components/products/ProductGrid';
import ErrorMessage from '../components/common/ErrorMessage';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ProductFilters>({
    search: '',
    sort: 'name-asc'
  });

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(products, filters);
  }, [products, filters]);

  const handleFiltersChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorMessage 
          message={error} 
          onRetry={fetchProducts}
          className="min-h-[400px]"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Products Gallery
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover amazing products from our curated collection
        </p>
      </div>

      {/* Search and Filter */}
      {!loading && (
        <SearchAndFilter
          filters={filters}
          onFiltersChange={handleFiltersChange}
          productsCount={filteredProducts.length}
        />
      )}

      {/* Products Grid */}
      <ProductGrid 
        products={filteredProducts} 
        loading={loading}
      />
    </div>
  );
};

export default Products;