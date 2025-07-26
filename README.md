# 🛍️ Products Gallery Web Application

A fully functional, responsive e-commerce web application built with React and Tailwind CSS. This application provides a seamless shopping experience with product browsing, filtering, sorting, and cart management.

## ✨ Features

### 🎯 Core Features
- **Product Browsing**: Browse through a comprehensive collection of products
- **Search & Filter**: Search products by name with real-time filtering
- **Sorting Options**: Sort products by name (A-Z, Z-A) and price (Low to High, High to Low)
- **Product Details**: Detailed product pages with full descriptions and ratings
- **Shopping Cart**: Add items to cart, manage quantities, and view cart summary
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)

### 🌟 Enhanced Features
- **Dark Mode Toggle**: Switch between light and dark themes
- **Product Ratings**: Display star ratings and review counts
- **Loading States**: Smooth loading indicators and error handling
- **Empty States**: Beautiful empty state designs for cart and search results
- **Persistent Data**: Cart and theme preferences saved in localStorage

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS 3.3+
- **Icons**: Lucide React
- **State Management**: React Context API
- **API**: Fake Store API (https://fakestoreapi.com)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

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
   Navigate to `http://localhost:3000` to view the application

### Build for Production

```bash
npm run build
```

## 📱 Screenshots

### Desktop View
- **Products Page**: Grid layout with search and sorting controls
- **Product Details**: Detailed product information with add to cart functionality
- **Cart Page**: Shopping cart with quantity controls and summary

### Mobile View
- **Responsive Design**: Optimized for mobile devices with collapsible navigation
- **Touch-Friendly**: Large touch targets and intuitive mobile interactions

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header with cart and dark mode
│   └── ProductCard.js  # Individual product card component
├── context/            # React Context providers
│   ├── CartContext.js  # Shopping cart state management
│   └── DarkModeContext.js # Theme switching functionality
├── pages/              # Page components
│   ├── ProductsPage.js # Main products listing page
│   ├── ProductDetails.js # Individual product details page
│   └── CartPage.js     # Shopping cart page
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Design Features

### Modern UI/UX
- **Clean Design**: Minimalist and modern interface
- **Smooth Animations**: Hover effects and transitions
- **Consistent Spacing**: Well-defined spacing system
- **Typography**: Clear hierarchy and readable fonts

### Dark Mode
- **Theme Switching**: Toggle between light and dark themes
- **Persistent Preference**: Theme choice saved in localStorage
- **Consistent Styling**: All components support both themes

### Responsive Design
- **Mobile-First**: Designed for mobile devices first
- **Breakpoint System**: Responsive grid layouts
- **Touch Optimized**: Large buttons and touch-friendly interactions

## 🔧 API Integration

The application integrates with the **Fake Store API**:
- **Base URL**: `https://fakestoreapi.com`
- **Endpoints**:
  - `GET /products` - Fetch all products
  - `GET /products/:id` - Fetch individual product details

### Error Handling
- **Network Errors**: Graceful error handling with retry options
- **Loading States**: Spinner animations during data fetching
- **Fallback UI**: Placeholder images for failed product images

## 🛒 Shopping Cart Features

### Cart Management
- **Add to Cart**: One-click add to cart functionality
- **Quantity Control**: Increase/decrease item quantities
- **Remove Items**: Remove items from cart
- **Cart Summary**: Total calculation and item count
- **Persistent Cart**: Cart data saved in localStorage

### Cart UI
- **Cart Badge**: Item count displayed in header
- **Cart Page**: Dedicated cart management page
- **Empty Cart**: Beautiful empty state design

## 🎯 Performance Optimizations

- **Lazy Loading**: Images loaded with error fallbacks
- **Efficient Filtering**: Real-time search with debouncing
- **Optimized Rendering**: React.memo for performance
- **Minimal Bundle**: Tree-shaking and code splitting

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📦 Deployment

The application can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Fake Store API** for providing the product data
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide React** for the beautiful icons
- **React Router** for client-side routing

---

**Built with ❤️ using React and Tailwind CSS**