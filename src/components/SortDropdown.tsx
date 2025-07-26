import React from 'react';
import { SortOption } from '../types';

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  const sortOptions: SortOption[] = [
    { value: '', label: 'Default' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'title-az', label: 'Title: A to Z' },
    { value: 'title-za', label: 'Title: Z to A' },
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortDropdown;