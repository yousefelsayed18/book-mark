import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }

    return stars;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
            Product Not Found
          </h3>
          <p className="text-red-600 dark:text-red-300 mb-4">{error}</p>
          <Link to="/" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
              }}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Category */}
          <div>
            <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-sm font-medium px-3 py-1 rounded-full capitalize">
              {product.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {renderStars(product.rating?.rate || 0)}
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {product.rating?.rate || 0} ({product.rating?.count || 0} reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
            ${product.price}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Description
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 btn-primary flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>Add to Wishlist</span>
            </button>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Product Details
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Category:</span>
                <span className="font-medium text-gray-900 dark:text-white capitalize">
                  {product.category}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {product.rating?.rate || 0}/5 ({product.rating?.count || 0} reviews)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Price:</span>
                <span className="font-medium text-primary-600 dark:text-primary-400">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;