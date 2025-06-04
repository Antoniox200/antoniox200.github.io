# Antonio Iadicicco - Resume

A modern, responsive resume website built with React and Vite, converted from the original HTML/CSS version.

## Features

- **Modern React Architecture**: Component-based structure for better maintainability
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Active Navigation**: Dynamic navigation highlighting based on current section
- **Modern Styling**: Beautiful gradient design with smooth transitions
- **Performance Optimized**: Built with Vite for fast development and production builds

## Tech Stack

- **React 19**: Latest React with modern hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Modern CSS with flexbox, grid, and animations
- **Intersection Observer API**: For scroll-based animations and navigation
- **ESLint**: Code linting for consistency

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/antoniox200/antonio-resume-react.git
cd antonio-resume-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Experience.jsx  # Experience section
│   ├── Education.jsx   # Education section
│   ├── Projects.jsx    # Projects section
│   ├── Hobbies.jsx     # Hobbies section
│   └── Contact.jsx     # Contact section
├── hooks/              # Custom React hooks
│   └── useIntersectionObserver.js
├── App.jsx             # Main App component
├── App.css             # Main styles
├── index.css           # Global styles
└── main.jsx            # App entry point
```

## Features Implemented

### Component Architecture
- Modular React components for each resume section
- Custom hooks for reusable logic
- Clean separation of concerns

### Enhanced User Experience
- Smooth scroll navigation
- Active section highlighting in navigation
- Scroll-triggered animations
- Hover effects and transitions

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Accessible navigation on all devices

### Performance
- Optimized bundle size with Vite
- Efficient intersection observer implementation
- CSS animations using transforms for better performance

## Conversion from Original

This React version includes several improvements over the original HTML version:

1. **Better Code Organization**: Modular components vs. single HTML file
2. **Enhanced Interactivity**: Active navigation states and improved animations
3. **Modern Styling**: Updated color scheme and improved visual hierarchy
4. **Mobile Optimization**: Better responsive design
5. **Performance**: Optimized build process and code splitting
6. **Maintainability**: Easy to update content and styling

## Deployment

To deploy to production:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service of choice (Netlify, Vercel, GitHub Pages, etc.)

## License

This project is private and proprietary.

## Contact

Antonio Iadicicco
- Email: antonio.s.iadicicco@gmail.com
- GitHub: [Antoniox200](https://github.com/Antoniox200)
