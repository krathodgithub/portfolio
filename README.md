# Portfolio Website

A modern, vibrant portfolio website for software developers built with React, Vite, and Tailwind CSS. Features smooth animations, responsive design, and a colorful creative theme.

## Features

- **Hero Section** - Eye-catching landing page with animated gradient background and staggered text reveal
- **About Section** - Professional summary with skills grid displaying technical expertise
- **Projects Section** - Showcase your work with interactive project cards and hover effects
- **Experience Timeline** - Visual timeline of professional experience and education
- **Contact Section** - Working contact form with EmailJS integration, validation, and social media links
- **Smooth Animations** - Powered by Framer Motion for professional transitions
- **Responsive Design** - Mobile-first approach works on all devices
- **Colorful Theme** - Vibrant pink, purple, blue, and yellow color palette

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool with HMR
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure EmailJS (for contact form):
```bash
# Copy the example env file
cp .env.example .env

# Follow the setup guide to get your EmailJS credentials
# See EMAILJS_SETUP.md for detailed instructions
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Project Structure

```
portfolio/
├── public/              # Static assets
│   └── images/         # Project and company images
├── src/
│   ├── components/
│   │   ├── common/     # Reusable components (Button, Card, etc.)
│   │   ├── layout/     # Layout components (Header, Footer, Nav)
│   │   └── sections/   # Page sections (Hero, About, Projects, etc.)
│   ├── data/           # Data files (projects, experience, skills)
│   ├── hooks/          # Custom React hooks
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles + Tailwind
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── package.json
```

## Customization

### Update Your Information

1. **Personal Info**: Edit [src/components/sections/Hero.jsx](src/components/sections/Hero.jsx) to update your name and title
2. **Projects**: Modify [src/data/projects.js](src/data/projects.js) to add your projects
3. **Experience**: Update [src/data/experience.js](src/data/experience.js) with your work history
4. **Skills**: Edit [src/data/skills.js](src/data/skills.js) to list your technologies
5. **Social Links**: Update links in [src/components/common/SocialLinks.jsx](src/components/common/SocialLinks.jsx)
6. **Contact Info**: Modify [src/components/sections/Contact.jsx](src/components/sections/Contact.jsx) with your email and phone

### Add Images

1. Add your profile photo to `public/images/` and update the path in About section
2. Add project screenshots to `public/images/projects/`
3. Add company logos to `public/images/companies/`

### Customize Colors

The color palette is defined in [tailwind.config.js](tailwind.config.js). Update the theme colors to match your brand:

```javascript
colors: {
  primary: { /* Your primary color shades */ },
  secondary: { /* Your secondary color shades */ },
  accent: { /* Your accent color shades */ },
  purple: { /* Your purple color shades */ },
}
```

## Building for Production

1. Build the project:
```bash
npm run build
```

2. The optimized build will be in the `dist/` folder

3. Preview the production build:
```bash
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel deploy
```

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Key Features Explained

### Smooth Scrolling
Navigation links use `react-scroll` for smooth scrolling between sections. The active link is highlighted based on the current scroll position using a custom `useScrollSpy` hook.

### Animations
All animations are powered by Framer Motion:
- Hero section has staggered text reveal
- Sections fade in and slide up when scrolled into view
- Project cards have staggered entrance animations
- Timeline items slide in from alternating sides
- Hover effects on cards and buttons

### Responsive Design
The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Navigation switches to a hamburger menu on mobile, grids adapt to different column counts, and the timeline layout changes from alternating to centered on mobile.

### Contact Form with EmailJS
The contact form is fully functional and integrated with EmailJS:
- **Real Email Delivery** - Form submissions are sent directly to your email
- **Client-side Validation** - Required fields, email format, and real-time error messages
- **Loading States** - Visual feedback while sending
- **Success/Error Messages** - Clear user feedback on submission status
- **Free Tier** - 200 emails/month included

**Setup Required**: Follow the instructions in [EMAILJS_SETUP.md](EMAILJS_SETUP.md) to configure your EmailJS account and connect the contact form. Takes about 5 minutes!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion.

---

**Note**: This is a portfolio template. Make sure to customize all content, images, and links with your own information before deploying.
