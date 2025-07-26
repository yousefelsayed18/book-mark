import React from 'react';

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6">
      <div className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-2">
        No products found
      </div>
      <div className="text-gray-400 dark:text-gray-500 text-sm">
        Try adjusting your search criteria
      </div>
    </div>
  );
};

export default EmptyState;