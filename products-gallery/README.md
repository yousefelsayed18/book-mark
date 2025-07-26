# Products Gallery

A modern, responsive React 18+ web application that displays products from the Fake Store API with search, sorting, and dark mode functionality.

## 🌟 Features

- **Product Grid**: Responsive grid layout displaying products with images and titles
- **Product Details**: Detailed product view with description, price, category, and ratings
- **Search Functionality**: Real-time search by product title (case-insensitive)
- **Sorting Options**: Sort products by price (low to high, high to low) or title (A-Z)
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens
- **Loading States**: Beautiful loading spinners during API calls
- **Error Handling**: Graceful error handling with retry functionality
- **Empty States**: User-friendly messages when no products match search criteria

## 🛠 Tech Stack

- **React 18+** - Modern React with functional components and hooks
- **React Router DOM v6+** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Fake Store API** - Product data source
- **Fetch API** - HTTP client for API calls

## 📁 Project Structure

```
src/
├── components/
│   ├── EmptyState.js      # No products found message
│   ├── ErrorMessage.js    # Error handling component
│   ├── Header.js          # Navigation with search and controls
│   ├── LoadingSpinner.js  # Loading indicator
│   └── ProductCard.js     # Individual product card
├── hooks/
│   └── useDarkMode.js     # Custom hook for dark mode
├── pages/
│   ├── Home.js            # Main products listing page
│   └── ProductDetails.js  # Individual product details page
├── utils/
│   └── api.js             # API service functions
├── App.js                 # Main app component with routing
├── index.css              # Global styles and Tailwind imports
└── index.js               # App entry point
```

## 🚀 Getting Started

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

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎯 API Integration

The application uses the [Fake Store API](https://fakestoreapi.com/) which provides:

- `GET /products` - Fetch all products
- `GET /products/{id}` - Fetch a single product by ID

### Product Data Structure

```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

## 🎨 Design Features

### Responsive Grid
- 1 column on mobile
- 2 columns on small tablets
- 3 columns on large tablets
- 4 columns on desktop

### Dark Mode
- System preference detection
- Manual toggle in header
- Persistent user preference in localStorage
- Smooth transitions between themes

### Interactive Elements
- Hover effects on product cards
- Focus states for accessibility
- Smooth transitions and animations
- Loading states for better UX

## 🔧 Customization

### Tailwind Configuration
The `tailwind.config.js` file includes:
- Dark mode support (`class` strategy)
- Custom content paths
- Extensible theme configuration

### Color Scheme
- **Light Mode**: Clean whites and grays
- **Dark Mode**: Rich dark grays with blue accents
- **Accent Color**: Blue for interactive elements

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

The app can be deployed to any static hosting service:

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service of choice:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any static web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the component-based architecture
- [Heroicons](https://heroicons.com/) for the beautiful SVG icons
