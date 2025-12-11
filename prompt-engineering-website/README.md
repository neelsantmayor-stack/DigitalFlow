# Prompt Engineering Website Assignment

A complete, responsive website built using detailed, reusable prompts for AI coding tools. This project demonstrates prompt engineering skills and generates high-quality website sections.

## Project Overview

This website includes five main sections:
1. **Navigation Bar** - Responsive navigation with mobile menu
2. **Hero Section** - Compelling hero with call-to-action buttons
3. **Services Section** - Feature showcase with icons and cards
4. **Contact Form** - Lead capture form with validation
5. **Footer** - Comprehensive footer with links and social icons

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern, clean design
- ✅ Accessible (WCAG compliant)
- ✅ Smooth animations and transitions
- ✅ Form validation with error handling
- ✅ Mobile-friendly navigation menu
- ✅ Semantic HTML5
- ✅ CSS custom properties for easy theming
- ✅ Vanilla JavaScript (no dependencies)

## Project Structure

```
prompt-engineering-website/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styles (responsive)
├── scripts/
│   └── main.js            # JavaScript functionality
├── prompts/
│   ├── README.md          # Prompt engineering guide
│   ├── navigation-prompt.md
│   ├── hero-prompt.md
│   ├── services-prompt.md
│   ├── contact-form-prompt.md
│   └── footer-prompt.md
├── docs/
│   └── summary.md         # Assignment summary
└── README.md              # This file
```

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process required - pure HTML/CSS/JS

### Viewing the Website

Simply open `index.html` in any modern web browser. All assets are included locally.

## Hosting Instructions

This website can be hosted on any static hosting platform. Here are options:

### Option 1: Netlify (Recommended)

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up/login (free)
3. Drag and drop the entire project folder to Netlify
4. Your site will be live instantly with a URL like `your-site.netlify.app`

### Option 2: Vercel

1. Go to [vercel.com](https://www.vercel.com)
2. Sign up/login (free)
3. Import your project (GitHub or drag & drop)
4. Deploy - your site will be live instantly

### Option 3: GitHub Pages

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select main branch and `/root` folder
5. Your site will be live at `username.github.io/repository-name`

### Option 4: CodeSandbox

1. Go to [codesandbox.io](https://www.codesandbox.io)
2. Create a new static template
3. Upload all files
4. Share the live preview link

## Customization

### Colors

Edit CSS custom properties in `styles/main.css`:

```css
:root {
    --color-primary: #3b82f6;
    --color-primary-dark: #2563eb;
    --color-secondary: #64748b;
    /* ... more colors */
}
```

### Content

- **Brand Name**: Search for "BrandName" in `index.html` and replace
- **Navigation Links**: Update links in the navbar menu
- **Hero Text**: Modify headline and subtext in hero section
- **Services**: Update service cards in the services section
- **Contact Info**: Update footer contact information

### Images

The hero section uses a CSS gradient background. To use an image:

1. Replace the gradient in `.hero` class with:
```css
background-image: url('path-to-image.jpg');
background-size: cover;
background-position: center;
```

2. Or use Unsplash Source API:
```css
background-image: url('https://images.unsplash.com/photo-[ID]?w=1200&h=800&fit=crop');
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Prompt Engineering

This project includes detailed prompts in the `prompts/` directory. These prompts can be used with any AI coding tool (ChatGPT, Claude, Gemini, etc.) to generate similar website sections.

### Using the Prompts

1. Open any prompt file (e.g., `prompts/navigation-prompt.md`)
2. Copy the entire prompt
3. Paste into your preferred AI coding tool
4. The AI will generate complete HTML, CSS, and JavaScript code
5. Customize as needed

See `prompts/README.md` for more information about the prompts.

## Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript ES6+**: Modern syntax, no frameworks
- **Icons**: SVG icons (Heroicons style)
- **No Dependencies**: Pure vanilla code

## Performance

- Minimal CSS (single file, ~15KB)
- Minimal JavaScript (single file, ~8KB)
- No external dependencies
- Fast load times
- Optimized for mobile

## Accessibility

- Semantic HTML5 elements
- ARIA labels and attributes
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast
- Focus indicators

## License

This project is created for educational purposes as part of a prompt engineering assignment.

## Contact

For questions about this project or the prompts, please refer to the documentation in the `docs/` directory.

---

**Note**: This website was generated using detailed prompts designed to work with AI coding tools. The code is production-ready and follows modern web development best practices.

