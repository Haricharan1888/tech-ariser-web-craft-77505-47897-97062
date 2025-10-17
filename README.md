# Tech Ariser Global - IT Consulting Website

A modern, responsive website for Tech Ariser Global built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 1024px, and 1280px
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, sitemap.xml, and robots.txt
- **Accessibility**: WCAG 2.1 compliant with semantic HTML, ARIA labels, and keyboard navigation
- **Visitor Capture**: Contact form with validation, WhatsApp integration, and analytics-ready structure
- **Modern UI**: Custom design system with gradients, shadows, and smooth animations
- **Performance**: Optimized images, lazy loading, and efficient component structure

## 🎨 Design System

### Colors (HSL)
- **Primary**: `hsl(212 85% 32%)` - Deep Tech Blue
- **Secondary/Accent**: `hsl(195 100% 44%)` - Vibrant Cyan
- **Background**: `hsl(0 0% 100%)` - White
- **Foreground**: `hsl(215 25% 15%)` - Dark Text

### Typography
- **Headings**: Poppins (400, 500, 600, 700, 800)
- **Body**: Inter (300, 400, 500, 600)

### Custom Design Tokens
All colors, gradients, and shadows are defined in `src/index.css` using CSS variables.

## 📋 Project Structure

```
src/
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── Header.tsx       # Navigation with mobile menu
│   ├── Hero.tsx         # Hero section with CTA
│   ├── Services.tsx     # Services grid with cards
│   ├── About.tsx        # About and mission section
│   ├── Contact.tsx      # Contact form & info
│   └── Footer.tsx       # Footer with links
├── assets/
│   └── hero-background.jpg
├── pages/
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── index.css            # Design system & utilities
└── App.tsx              # Root component

public/
├── robots.txt           # Search engine directives
└── sitemap.xml          # Site structure for SEO
```

## 🛠️ Tech Stack

- **Framework**: React 18.3
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Routing**: React Router DOM

## 📦 Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs at `http://localhost:8080`

## 🌐 Deployment

### Deploy to Lovable
Click the **Publish** button in the top right of the Lovable editor.

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Output directory: `dist`
4. Environment variables: None required for static site

## 📞 Contact Information

**Tech Ariser Global**
- Address: 4400 Bandera Drive, Prosper, TX, USA
- Phone: +1 945-274-5643
- Email: info@techariserglobal.com
- WhatsApp: https://wa.me/19452745643

## ♿ Accessibility

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus visible styles
- Color contrast ratio ≥ 4.5:1
- Alt text on all images
- Form labels associated with inputs

## 🔍 SEO Features

- Title tags with primary keywords
- Meta descriptions (150-160 characters)
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs
- Structured data ready (can add JSON-LD)
- Sitemap.xml for search engines
- Robots.txt for crawler directives
- Semantic HTML for better indexing

## 📊 Analytics Integration

The site is ready for analytics integration. Add your tracking codes:

**Google Analytics**
```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Facebook Pixel**
```html
<!-- Add to index.html <head> -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🔧 Customization

### Changing Colors
Edit `src/index.css` CSS variables in the `:root` selector.

### Adding Services
Edit the `services` array in `src/components/Services.tsx`.

### Modifying Contact Form
Update the form submission logic in `src/components/Contact.tsx`.
Consider integrating with:
- Netlify Forms (add `data-netlify="true"` to form)
- Formspree
- EmailJS
- Custom backend API

## 📝 License

© 2025 Tech Ariser Global. All rights reserved.

## 🆘 Support

For technical support or questions about the website, contact the development team or visit [Lovable Documentation](https://docs.lovable.dev/).
