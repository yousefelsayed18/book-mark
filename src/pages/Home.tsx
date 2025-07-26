import React, { useState, useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';
import { filterProducts, sortProducts } from '../utils/filters';
import SearchBar from '../components/SearchBar';
import SortDropdown from '../components/SortDropdown';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';

const Home: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = filterProducts(products, search);
    return sortProducts(filtered, sortBy);
  }, [products, search, sortBy]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Filters */}
      <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
        <div className="w-full sm:w-64">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <div className="w-full sm:w-48">
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Products Grid */}
      {filteredAndSortedProducts.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;