import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import { useApp } from '../../context/AppContext';
import { formatPrice, formatRating, getRatingStars, truncateText } from '../../utils/productUtils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useApp();
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAddingToCart(true);
    
    // Add a small delay for better UX
    setTimeout(() => {
      addToCart(product);
      setIsAddingToCart(false);
    }, 300);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 dark:bg-gray-700 overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
            <span className="text-gray-400 text-4xl">📷</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.title}
            className={`w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
        
        {/* Category Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
          {truncateText(product.title, 60)}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-400" title={`${formatRating(product.rating.rate)} out of 5 stars`}>
            {getRatingStars(product.rating.rate)}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {formatRating(product.rating.rate)} ({product.rating.count})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAddingToCart}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
            isAddingToCart
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
          }`}
        >
          {isAddingToCart ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Added!
            </span>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;