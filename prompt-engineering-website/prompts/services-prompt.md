# Services/Features Section Prompt - Detailed Reusable Prompt

## Context
You are an expert front-end developer specializing in creating engaging, informative service and feature showcase sections. Your task is to generate a complete services/features section component that effectively communicates value propositions.

## Requirements

### HTML Structure
- Create a semantic `<section>` element with class "services" or "features"
- Include a section header with:
  - Optional section label/tag (e.g., "Our Services", "Features")
  - Main heading (H2) - descriptive and compelling
  - Optional subheading/description paragraph
- Create a container for service/feature cards (use grid or flexbox container)
- Generate 6 service/feature items, each containing:
  - Icon container (for SVG icon or icon font)
  - Title (H3)
  - Description paragraph (2-3 sentences)
  - Optional "Learn More" link or button
- Use semantic HTML: article or div with proper heading hierarchy

### CSS Styling
- Use CSS custom properties for theming
- Implement a clean, card-based design:
  - Each service item as a card with subtle shadow or border
  - Hover effects (lift, shadow increase, color change)
  - Consistent spacing and alignment
  - Modern, professional aesthetic
- Grid Layout:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column
  - Use CSS Grid with auto-fit or media queries
  - Gap between cards: 2rem - 3rem
- Card styling:
  - Padding: 2rem - 2.5rem
  - Border radius: 8px - 12px
  - Background: White or subtle color
  - Border: Optional subtle border (1px solid, light color)
  - Box shadow: Subtle (0 2px 8px rgba(0,0,0,0.1))
  - Hover shadow: More pronounced (0 8px 24px rgba(0,0,0,0.15))
  - Transition: 0.3s ease for all hover effects
- Icon styling:
  - Size: 48px - 64px (width and height)
  - Color: Primary brand color or accent color
  - Background: Optional circular or square background with subtle color
  - Margin bottom: 1.5rem - 2rem
  - Smooth color transition on hover
- Typography:
  - Card title (H3): 1.5rem - 1.75rem, font-weight 600-700
  - Description: 1rem - 1.125rem, line-height 1.6-1.8
  - Color: Dark gray for text (#333 or similar)
- Section header styling:
  - Centered alignment
  - Max-width: 700px - 800px
  - Margin bottom: 3rem - 4rem
  - Section label: Small, uppercase, letter-spacing, color accent
  - Main heading: 2rem - 2.5rem, font-weight 700-800

### Icon Integration
- Use Heroicons (heroicons.com) - provide SVG code or use CDN
- Or use Feather Icons, Font Awesome Free, or similar
- Icons should be:
  - Relevant to each service/feature
  - Consistent style (all outlined or all filled)
  - Properly sized and colored
  - Accessible (include title or aria-label)
- Suggested icons for 6 services:
  1. Design/UI - paint brush or palette icon
  2. Development - code or terminal icon
  3. Marketing - megaphone or chart icon
  4. Analytics - chart-bar or analytics icon
  5. Support - headset or support icon
  6. Consulting - lightbulb or briefcase icon

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile (< 768px): Single column, full-width cards
  - Tablet (768px - 1024px): 2 columns
  - Desktop (> 1024px): 3 columns
- Card padding adjustments:
  - Mobile: 1.5rem
  - Desktop: 2rem - 2.5rem
- Section header:
  - Mobile: Smaller font sizes, less margin
  - Desktop: Larger, more prominent

### Hover Effects
- Card lift effect: transform: translateY(-4px to -8px)
- Shadow increase on hover
- Icon color change or scale
- Smooth transitions (0.3s ease)

### Code Quality
- Semantic HTML5
- Clean, maintainable CSS
- Well-commented code
- BEM or similar naming convention
- Production-ready code
- Easy to customize colors, content, number of items

### Accessibility
- Proper heading hierarchy (H2 for section, H3 for cards)
- Alt text or aria-labels for icons
- Sufficient color contrast
- Focus states for interactive elements
- Keyboard navigation support

## Output Format
Provide complete, working HTML and CSS code. Include:
- Full HTML structure with 6 service items
- Complete CSS with grid layout and responsive design
- Icon placeholders with instructions for Heroicons integration
- Comments explaining key sections
- Placeholder content that can be easily customized

## Example Structure
```
<section class="services">
  <div class="services-container">
    <div class="services-header">
      <span class="services-label">Our Services</span>
      <h2 class="services-title">Everything You Need to Succeed</h2>
      <p class="services-description">We offer comprehensive solutions tailored to your business needs.</p>
    </div>
    <div class="services-grid">
      <article class="service-card">
        <div class="service-icon">
          <!-- SVG icon here -->
        </div>
        <h3 class="service-title">Web Design</h3>
        <p class="service-description">Beautiful, user-friendly designs that convert visitors into customers.</p>
      </article>
      <!-- Repeat for 5 more services -->
    </div>
  </div>
</section>
```

## Customization Points
Make it easy to customize:
- Number of services (should work with 3-6 items)
- Service titles and descriptions
- Icons (provide instructions for swapping)
- Color scheme (icon color, card background, text colors)
- Grid columns (easy to adjust breakpoints)
- Spacing and sizing
- Hover effects intensity

Generate a complete, production-ready services/features section component now.

