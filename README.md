# Build Home Enterprises - Premium Bathroom Accessories Website

A modern, responsive Next.js website for bathroom accessories, inspired by professional e-commerce designs.

## 🌟 Features

- **Modern Design**: Clean, elegant design inspired by premium bathroom brands
- **Responsive**: Fully responsive design that works on all devices
- **Next.js 14**: Built with the latest Next.js App Router
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Reusable React components for maintainability

## 📋 Pages

- **Home**: Hero sections, featured products, and product showcases
- **About Us**: Company story, values, craftsmanship details
- **Products**: Filterable product catalog with categories
- **Contact Us**: Contact form and business information

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Install Dependencies**

```bash
npm install
```

2. **Run Development Server**

```bash
npm run dev
```

3. **Open Your Browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section component
│   ├── ProductCard.tsx    # Product card component
│   ├── ProductShowcase.tsx # Product showcase component
│   └── Button.tsx         # Button component
├── public/                # Static assets
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.mjs        # Next.js configuration
└── package.json           # Project dependencies
```

## 🎨 Design Features

### Header
- Top bar with account and cart links
- Main navigation (Home, About Us, Products, Contact Us)
- Category navigation bar (Baths, Basins, Counter Tops, Taps)
- Mobile-responsive menu

### Components
- **Hero**: Full-width hero sections with images and CTAs
- **ProductCard**: Product display cards with images, descriptions, and prices
- **ProductShowcase**: Alternating image/content showcases
- **Button**: Reusable button with multiple variants

### Color Scheme
- Primary: Dark gray/black (#1a1a1a)
- Accent: Gold (#d4af37)
- Background: White and light gray
- Text: Various gray shades for hierarchy

## 🛠️ Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library

## 📝 Customization

### Adding New Products

Edit the `allProducts` array in `app/products/page.tsx`:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  price: '£XXX',
  image: 'image-url',
  category: 'CATEGORY',
}
```

### Changing Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#1a1a1a',
    light: '#2d2d2d',
  },
  gold: {
    DEFAULT: '#d4af37',
    light: '#f0d78c',
  },
}
```

### Adding New Pages

Create a new folder in the `app` directory with a `page.tsx` file.

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development Notes

- TypeScript errors shown are normal before running `npm install`
- Images use Unsplash placeholders - replace with your actual product images
- Contact form currently logs to console - implement backend integration
- Map section is a placeholder - integrate Google Maps or similar service

## 📄 License

This project is created for demonstration purposes.

## 🤝 Support

For support, call +91 9430400013.

---

Built with ❤️ using Next.js and Tailwind CSS
