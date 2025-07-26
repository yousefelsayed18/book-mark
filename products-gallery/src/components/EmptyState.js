import React from 'react';

const EmptyState = ({ searchTerm }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-24 h-24 mb-6 text-gray-400 dark:text-gray-600">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        No products found
      </h3>
      <p className="text-gray-500 dark:text-gray-400 max-w-md">
        {searchTerm 
          ? `No products match "${searchTerm}". Try adjusting your search terms.`
          : "There are no products to display at the moment."
        }
      </p>
    </div>
  );
};

export default EmptyState;