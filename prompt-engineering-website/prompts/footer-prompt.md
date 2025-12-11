# Footer Prompt - Detailed Reusable Prompt

## Context
You are an expert front-end developer specializing in creating comprehensive, informative, and well-organized footer sections. Your task is to generate a complete footer component that provides essential information and links while maintaining a clean, professional design.

## Requirements

### HTML Structure
- Create a semantic `<footer>` element with class "footer"
- Divide footer into multiple columns/sections:
  1. **Company/Brand Section**:
     - Brand name/logo
     - Company tagline or brief description (1-2 sentences)
     - Optional social media icons
  2. **Quick Links Section**:
     - Navigation links (Home, About, Services, Contact, etc.)
     - Use semantic `<nav>` element
     - Unordered list structure
  3. **Services/Resources Section** (optional):
     - Links to services or resources
     - Unordered list structure
  4. **Contact Information Section**:
     - Address (optional)
     - Phone number
     - Email address
     - Each as a list item with icon or text
  5. **Newsletter Section** (optional):
     - Newsletter signup form
     - Email input
     - Submit button
- Include a bottom bar with:
  - Copyright notice (current year, company name)
  - Optional legal links (Privacy Policy, Terms of Service)
  - Optional "Back to Top" button

### CSS Styling
- Use CSS custom properties for theming
- Implement a clean, organized design:
  - Dark background (dark gray or black) with light text
  - Or light background with dark text (match site theme)
  - Clear visual separation between sections
  - Consistent spacing and alignment
- Footer container:
  - Background: Dark (#1a1a1a to #2d2d2d) or light (match site)
  - Padding: 3rem - 4rem top/bottom, 2rem horizontal
  - Border-top: Optional subtle border
- Footer grid layout:
  - Desktop: 4 columns (or adjust based on sections)
  - Tablet: 2 columns
  - Mobile: 1 column (stacked)
  - Use CSS Grid with responsive columns
  - Gap: 2rem - 3rem between columns
- Typography:
  - Section headings: 1rem - 1.125rem, font-weight 600-700, uppercase or capitalized
  - Links: 0.875rem - 1rem, font-weight 400-500
  - Text color: Light gray (#ccc to #e5e5e5) for dark background
  - Link hover: Primary brand color or white
- Link styling:
  - Display: block or inline-block
  - Padding: 0.5rem 0 (vertical spacing)
  - Text decoration: none
  - Transition: 0.2s ease for color change
  - Hover: Color change, underline, or opacity change
- Social media icons:
  - Display: Flex or inline-flex
  - Gap: 1rem - 1.5rem
  - Icon size: 24px - 32px
  - Hover: Scale or color change
  - Transition: 0.2s ease
- Company section:
  - Brand name: Larger font (1.25rem - 1.5rem), font-weight 700
  - Tagline: Smaller font (0.875rem - 1rem), lighter color
  - Margin-bottom: 1rem - 1.5rem
- Contact information:
  - List style: none
  - Each item: margin-bottom 0.75rem
  - Icon + text layout (if using icons)
- Newsletter form (if included):
  - Input: Full width, padding, border, border-radius
  - Button: Adjacent or below input
  - Modern, clean styling
- Bottom bar:
  - Background: Slightly darker/lighter than footer
  - Padding: 1.5rem - 2rem
  - Border-top: Subtle border
  - Flexbox layout: Space between copyright and links
  - Font-size: 0.875rem
  - Text-align: Center on mobile

### Icon Integration
- Social media icons:
  - Use Heroicons, Feather Icons, or Font Awesome
  - Common platforms: Facebook, Twitter/X, LinkedIn, Instagram, GitHub
  - SVG icons preferred for customization
  - Proper sizing and spacing
- Contact icons (optional):
  - Location/map pin icon
  - Phone icon
  - Email/mail icon

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile (< 768px): Single column, stacked sections
  - Tablet (768px - 1024px): 2 columns
  - Desktop (> 1024px): 4 columns
- Bottom bar:
  - Mobile: Stacked (copyright on top, links below)
  - Desktop: Side-by-side
- Newsletter form:
  - Mobile: Stacked (input full width, button below)
  - Desktop: Side-by-side or stacked based on design

### Code Quality
- Semantic HTML5
- Clean, maintainable CSS
- Well-commented code
- BEM or similar naming convention
- Production-ready code
- Easy to customize content, links, colors

### Accessibility
- Proper semantic HTML (footer, nav, lists)
- ARIA labels for social icons
- Sufficient color contrast
- Focus states for all links
- Keyboard navigation support
- Screen reader friendly structure

## Output Format
Provide complete, working HTML and CSS code. Include:
- Full HTML footer structure with all sections
- Complete CSS with responsive grid layout
- Icon placeholders with instructions for integration
- Comments explaining key sections
- Placeholder content that can be easily customized

## Example Structure
```
<footer class="footer">
  <div class="footer-container">
    <div class="footer-grid">
      <div class="footer-section footer-brand">
        <h3 class="footer-brand-name">BrandName</h3>
        <p class="footer-tagline">Building amazing digital experiences.</p>
        <div class="footer-social">
          <!-- Social icons -->
        </div>
      </div>
      <div class="footer-section">
        <h4 class="footer-heading">Quick Links</h4>
        <nav>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer-section">
        <h4 class="footer-heading">Services</h4>
        <ul class="footer-links">
          <li><a href="#web-design">Web Design</a></li>
          <li><a href="#development">Development</a></li>
          <li><a href="#marketing">Marketing</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4 class="footer-heading">Contact</h4>
        <ul class="footer-contact">
          <li>123 Business St, City, State 12345</li>
          <li>Phone: (555) 123-4567</li>
          <li>Email: info@brandname.com</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copyright">&copy; 2024 BrandName. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
```

## Customization Points
Make it easy to customize:
- Number of columns/sections
- Company information
- Navigation links
- Contact information
- Social media links and icons
- Color scheme (dark/light theme)
- Newsletter form (include/exclude)
- Legal links
- Copyright year (use JavaScript for current year)

Generate a complete, production-ready footer component now.

