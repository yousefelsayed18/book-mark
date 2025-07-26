import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain object-center group-hover:opacity-75 transition-opacity duration-300 p-4"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {product.title}
          </h3>
          <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;