# Products Gallery

A modern React 18+ web application for browsing and viewing products from the Fake Store API. Built with TypeScript, Tailwind CSS, and React Router v6+.

## Features

- **Product Grid**: Responsive grid layout displaying products with images and titles
- **Search Functionality**: Real-time search filtering by product title (case-insensitive)
- **Sort Options**: Sort products by price (low to high/high to low) and title (A-Z/Z-A)
- **Dark Mode**: Toggle between light and dark themes with persistent state
- **Product Details**: Detailed view of individual products with full information
- **Loading States**: Smooth loading indicators during data fetching
- **Error Handling**: Graceful error handling with retry functionality
- **Responsive Design**: Mobile-first responsive design using Tailwind CSS

## Tech Stack

- **React 18+** with TypeScript
- **React Router DOM v6+** for navigation
- **Tailwind CSS** for styling and responsive design
- **Fetch API** for data fetching
- **Custom Hooks** for state management

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── DarkModeToggle.tsx
│   ├── EmptyState.tsx
│   ├── ErrorMessage.tsx
│   ├── Header.tsx
│   ├── LoadingSpinner.tsx
│   ├── ProductCard.tsx
│   ├── SearchBar.tsx
│   └── SortDropdown.tsx
├── hooks/              # Custom React hooks
│   ├── useDarkMode.ts
│   ├── useProduct.ts
│   └── useProducts.ts
├── pages/              # Page components
│   ├── Home.tsx
│   └── ProductDetails.tsx
├── services/           # API services
│   └── api.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── filters.ts
├── App.tsx
└── index.tsx
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd products-gallery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`.

### Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (not recommended)

## API Integration

The application uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data. The API provides:

- Product information including title, price, description, category, image, and ratings
- RESTful endpoints for fetching all products and individual products
- JSON response format

## Features in Detail

### Home Page (`/`)
- Displays all products in a responsive grid
- Search bar for filtering products by title
- Sort dropdown with multiple sorting options
- Product count display
- Empty state when no products match search criteria

### Product Details Page (`/products/:id`)
- Detailed view of individual products
- Product image, title, price, category, rating, and description
- Back navigation to home page
- Star rating display
- Responsive layout

### Dark Mode
- Toggle between light and dark themes
- Persistent state using localStorage
- Smooth transitions between themes
- Consistent styling across all components

### Search and Sort
- Real-time search filtering
- Multiple sort options:
  - Price: Low to High
  - Price: High to Low
  - Title: A to Z
  - Title: Z to A
- Case-insensitive search

## Styling

The application uses Tailwind CSS for styling with:
- Responsive design using Tailwind's responsive utilities
- Dark mode support with `dark:` prefix classes
- Custom animations and transitions
- Consistent color scheme and typography
- Mobile-first approach

## Error Handling

- Loading states during data fetching
- Error messages with retry functionality
- Graceful fallbacks for failed API requests
- User-friendly error messages

## Performance

- Memoized filtering and sorting operations
- Optimized re-renders using React hooks
- Efficient data fetching with custom hooks
- Responsive images with proper sizing

## Browser Support

- Modern browsers with ES6+ support
- Mobile browsers
- Progressive Web App ready

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).