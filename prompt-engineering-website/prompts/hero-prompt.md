# Hero Section Prompt - Detailed Reusable Prompt

## Context
You are an expert front-end developer specializing in creating compelling, conversion-focused hero sections. Your task is to generate a complete hero section component that captures attention and drives user action.

## Requirements

### HTML Structure
- Create a semantic `<section>` or `<header>` element with class "hero" or "hero-section"
- Include a main headline (H1) - make it impactful and benefit-focused
- Add supporting subtext/description (paragraph or H2) - 2-3 sentences
- Include a primary Call-to-Action (CTA) button
- Optionally include a secondary CTA button (less prominent)
- Add a container/wrapper div for proper content centering and max-width
- Include space for an image/illustration (can be background image or side-by-side layout)
- Ensure proper semantic structure for SEO and accessibility

### CSS Styling
- Use CSS custom properties for easy theming
- Implement a visually striking design with:
  - High contrast between text and background
  - Compelling typography hierarchy
  - Generous white space
  - Modern, clean aesthetic
- Layout options:
  - Centered content layout (text centered, image as background)
  - Split layout (text left, image right, or vice versa)
  - Full-width with content container
- Typography:
  - Headline: Large, bold (2.5rem - 4rem on desktop, responsive)
  - Subtext: Readable size (1.1rem - 1.25rem)
  - Line height: 1.2-1.4 for headline, 1.6-1.8 for body
  - Font weight: 700-900 for headline, 400-500 for subtext
- Background options:
  - Gradient background (modern, subtle)
  - Image background with overlay (dark overlay for text readability)
  - Solid color background
  - Ensure text remains readable regardless of background
- CTA Button styling:
  - Prominent, eye-catching design
  - Adequate padding (1rem - 1.5rem horizontal, 0.75rem - 1rem vertical)
  - Border radius: 4-8px (modern, not too rounded)
  - Hover effects: scale, shadow, or color change
  - Transition: 0.2-0.3s ease
  - Font size: 1rem - 1.125rem
  - Font weight: 600-700
- Spacing:
  - Vertical padding: 4rem - 8rem on desktop, 3rem - 4rem on mobile
  - Horizontal padding: 1rem - 2rem
  - Gap between headline and subtext: 1rem - 1.5rem
  - Gap between subtext and CTA: 2rem - 3rem

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile (< 768px): Stacked layout, centered text, full-width buttons
  - Tablet (768px - 1024px): Adjusted spacing, possibly side-by-side layout
  - Desktop (> 1024px): Full layout with optimal spacing
- Typography scaling:
  - Use clamp() or media queries for responsive font sizes
  - Headline: 2rem mobile → 3.5rem desktop
  - Subtext: 1rem mobile → 1.25rem desktop
- Image handling:
  - Responsive images with srcset if using <img>
  - Background images should cover properly on all devices
  - Consider using object-fit: cover for images

### Image Integration
- Provide placeholder for Unsplash image integration
- Use Unsplash Source API format: `https://images.unsplash.com/photo-[ID]?w=1200&h=800&fit=crop`
- Or use a gradient as fallback
- Ensure image doesn't overpower text (use overlay if needed)
- Optimize for performance (lazy loading, proper sizing)

### JavaScript Functionality (Optional)
- Smooth scroll to section when CTA is clicked (if using anchor links)
- Parallax effect (subtle, optional)
- Animation on scroll (fade in, slide up)

### Design Specifications
- Max-width for content: 1200px - 1400px
- Text alignment: Center (for centered layout) or Left (for split layout)
- Color scheme: High contrast, professional
- Shadow: Subtle text shadow on headline if needed for readability
- Overlay: If using background image, dark overlay (rgba(0,0,0,0.4) - rgba(0,0,0,0.6))

### Code Quality
- Semantic HTML5
- Clean, maintainable CSS
- Well-commented code
- BEM or similar naming convention
- Production-ready code
- Easy to customize colors, text, images

### Accessibility
- Proper heading hierarchy (H1 for main headline)
- Alt text for images
- Sufficient color contrast (WCAG AA minimum)
- Focus states for buttons
- ARIA labels if needed

## Output Format
Provide complete, working HTML and CSS code. Include:
- Full HTML structure
- Complete CSS with all styles
- Comments explaining key sections
- Placeholder text that can be easily replaced
- Image placeholder with instructions for Unsplash integration

## Example Structure
```
<section class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-headline">Transform Your Business Today</h1>
      <p class="hero-subtext">Discover innovative solutions that drive growth and success for your organization.</p>
      <div class="hero-cta">
        <a href="#contact" class="btn btn-primary">Get Started</a>
        <a href="#about" class="btn btn-secondary">Learn More</a>
      </div>
    </div>
  </div>
</section>
```

## Customization Points
Make it easy to customize:
- Headline and subtext content
- CTA button text and links
- Color scheme (background, text, button colors)
- Image/background (Unsplash URL or gradient)
- Layout style (centered vs split)
- Spacing and sizing
- Typography choices

Generate a complete, production-ready hero section component now.

