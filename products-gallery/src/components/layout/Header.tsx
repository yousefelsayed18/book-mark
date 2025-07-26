import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

const Header: React.FC = () => {
  const { state, toggleDarkMode, getCartItemsCount } = useApp();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            🛍️ Products Gallery
          </Link>

          {/* Navigation & Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {state.isDarkMode ? (
                <span className="text-yellow-500 text-xl">☀️</span>
              ) : (
                <span className="text-gray-600 text-xl">🌙</span>
              )}
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <span className="text-xl">🛒</span>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Products
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;