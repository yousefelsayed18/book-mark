# 🛍️ Products Gallery Web Application

A modern, responsive e-commerce products gallery built with React 18+ and TypeScript, featuring a beautiful UI with Tailwind CSS, dark mode support, and seamless cart management.

## 📖 Project Overview

This application provides users with a comprehensive product browsing experience, allowing them to explore products from the Fake Store API, view detailed product information, and manage their shopping cart. The app is built with modern web technologies and follows best practices for performance, accessibility, and user experience.

## ✨ Features

### 🛍️ Core Features
- **Product Gallery**: Browse through a responsive grid of products
- **Product Search**: Real-time search functionality with case-insensitive filtering
- **Advanced Sorting**: Sort products by name (A-Z) or price (Low to High / High to Low)
- **Product Details**: Detailed product pages with full descriptions, ratings, and images
- **Shopping Cart**: Add, remove, and manage product quantities
- **Dynamic Routing**: Clean URLs with React Router (`/products/:id`)

### 🎨 UI/UX Features
- **Responsive Design**: Fully responsive across all device sizes (mobile-first)
- **Dark Mode**: Toggle between light and dark themes with persistent preferences
- **Loading States**: Smooth loading indicators and skeleton screens
- **Error Handling**: Graceful error handling with retry functionality
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### 🔧 Technical Features
- **TypeScript**: Full type safety and better development experience
- **Context API**: Global state management for cart and theme
- **Custom Hooks**: Reusable logic with React hooks
- **API Integration**: Robust API calls with error handling
- **Performance Optimized**: Memoized components and efficient re-renders

## 🛠️ Tech Stack

- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API + useReducer
- **API**: Fake Store API (https://fakestoreapi.com/)
- **Build Tool**: Create React App
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd products-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Screenshots

### 🏠 Products Gallery (Light Mode)
*Responsive grid layout with search and sorting functionality*

### 🌙 Products Gallery (Dark Mode)
*Beautiful dark theme with consistent styling*

### 📄 Product Details Page
*Comprehensive product information with add to cart functionality*

### 🛒 Shopping Cart
*Clean cart interface with quantity controls and order summary*

### 📱 Mobile Responsive
*Optimized for mobile devices with touch-friendly interfaces*

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common components (LoadingSpinner, ErrorMessage)
│   ├── layout/          # Layout components (Header)
│   └── products/        # Product-specific components
├── context/             # React Context providers
├── pages/               # Page components (Products, ProductDetails, Cart)
├── services/            # API services and external integrations
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and helpers
└── index.tsx           # Application entry point
```

## 🎯 Key Features Implementation

### 🔍 Search & Filter
- Real-time search with debounced input
- Case-insensitive product name filtering
- Multiple sorting options (name, price)
- Results counter display

### 🛒 Cart Management
- Add products to cart with quantity tracking
- Update quantities with + / - controls
- Remove individual items or clear entire cart
- Persistent cart state during session
- Real-time total calculation

### 🌙 Dark Mode
- System preference detection
- Manual toggle with persistent storage
- Smooth transitions between themes
- Consistent styling across all components

### 📱 Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactive elements
- Optimized images and loading states

## 🚀 Performance Optimizations

- **Memoization**: Using React.memo and useMemo for expensive operations
- **Code Splitting**: Lazy loading of components where appropriate
- **Image Optimization**: Proper image loading with fallbacks
- **API Caching**: Efficient data fetching and error handling
- **Bundle Optimization**: Tree shaking and minification

## 🧪 Testing

The application includes comprehensive error handling and loading states. To test various scenarios:

1. **Network Issues**: Disable network to test error states
2. **Loading States**: Observe skeleton screens during data fetching
3. **Responsive Design**: Test on various screen sizes
4. **Dark Mode**: Toggle theme and verify persistence
5. **Cart Functionality**: Add, modify, and remove items

## 🔮 Future Enhancements

- **User Authentication**: Login/signup functionality
- **Product Reviews**: User-generated reviews and ratings
- **Wishlist**: Save favorite products
- **Advanced Filtering**: Filter by category, price range, ratings
- **Checkout Process**: Complete purchase flow
- **Product Comparison**: Compare multiple products
- **Infinite Scroll**: Load more products dynamically
- **PWA Features**: Offline support and push notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [Tailwind CSS](https://tailwindcss.com/) for the amazing utility-first CSS framework
- [React](https://reactjs.org/) team for the excellent framework
- [Heroicons](https://heroicons.com/) for beautiful icons (if used)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
