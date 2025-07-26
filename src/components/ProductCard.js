import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="card group block h-full transition-transform duration-200 hover:scale-105"
    >
      <div className="p-4 h-full flex flex-col">
        {/* Product Image */}
        <div className="relative mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain bg-white rounded-lg p-4 group-hover:shadow-lg transition-shadow duration-200"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
            }}
          />
          <button
            onClick={handleAddToCart}
            className="absolute top-2 right-2 p-2 bg-primary-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary-700"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 line-clamp-2">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center mr-2">
              {renderStars(product.rating?.rate || 0)}
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              ({product.rating?.count || 0})
            </span>
          </div>

          {/* Category */}
          <span className="text-xs text-gray-500 dark:text-gray-400 mb-2 capitalize">
            {product.category}
          </span>

          {/* Price */}
          <div className="mt-auto">
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;