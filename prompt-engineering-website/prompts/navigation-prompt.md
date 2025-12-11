# Navigation Bar Prompt - Detailed Reusable Prompt

## Context
You are an expert front-end developer specializing in creating clean, responsive, and accessible navigation bars. Your task is to generate a complete navigation bar component that works seamlessly across all devices.

## Requirements

### HTML Structure
- Create a semantic `<nav>` element with proper ARIA labels
- Include a brand/logo section (use a placeholder brand name like "BrandName" or allow customization)
- Create a desktop navigation menu with 4-6 links (Home, About, Services, Contact, etc.)
- Include a mobile hamburger menu button (three horizontal lines icon)
- Add a mobile menu overlay/drawer that slides in from the side
- Ensure all interactive elements have proper accessibility attributes (aria-label, aria-expanded, role)

### CSS Styling
- Use CSS custom properties (variables) for colors, spacing, and transitions
- Implement a clean, modern design with:
  - Fixed or sticky positioning at the top
  - Subtle shadow or border for depth
  - Smooth transitions for all interactive elements
  - Professional color scheme (suggest a dark header with light text or vice versa)
- Desktop navigation:
  - Horizontal layout using flexbox
  - Links should have hover effects (underline, color change, or background highlight)
  - Proper spacing between elements (use consistent padding/margin)
  - Active state styling for current page
- Mobile navigation:
  - Hamburger icon should be visible on mobile (hidden on desktop)
  - Mobile menu should be hidden by default
  - When open, menu should overlay the content
  - Menu items should stack vertically
  - Smooth slide-in animation from right or left
  - Close button or ability to close by clicking outside
  - Full-width or near-full-width menu items
- Responsive breakpoints:
  - Mobile: Show hamburger menu below 768px
  - Tablet: Show hamburger menu below 1024px (or adjust as needed)
  - Desktop: Show full horizontal navigation above breakpoint

### JavaScript Functionality
- Toggle mobile menu visibility on hamburger button click
- Close mobile menu when clicking outside the menu area
- Close mobile menu when clicking a navigation link
- Update aria-expanded attribute for accessibility
- Prevent body scroll when mobile menu is open (optional but recommended)
- Smooth scroll behavior for anchor links (if using hash links)

### Design Specifications
- Height: 60-80px for desktop
- Padding: 1rem to 2rem horizontal padding
- Font size: 16-18px for navigation links
- Font weight: 500-600 for links
- Hover transition: 0.2-0.3s ease
- Mobile menu animation: 0.3s ease-in-out
- Z-index: Ensure navigation stays above content (suggest 1000+)

### Code Quality
- Write clean, well-commented code
- Use semantic HTML5 elements
- Follow BEM naming convention or similar for CSS classes
- Ensure code is production-ready and maintainable
- Include comments explaining key functionality
- Make colors, spacing, and content easily customizable

### Responsive Behavior
- Mobile-first approach recommended
- Test at breakpoints: 320px, 768px, 1024px, 1440px
- Ensure touch targets are at least 44x44px for mobile
- Text should remain readable at all sizes

## Output Format
Provide complete, working HTML, CSS, and JavaScript code that can be directly integrated into a webpage. The code should be self-contained and work without external dependencies (except for any icon fonts/CDN links you specify).

## Example Structure
```
<nav class="navbar">
  <div class="navbar-container">
    <div class="navbar-brand">BrandName</div>
    <button class="navbar-toggle" aria-label="Toggle navigation" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="navbar-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>
```

## Customization Points
Make it easy to customize:
- Brand name/logo
- Navigation links and their hrefs
- Color scheme (primary, secondary, background, text)
- Breakpoint values
- Animation speeds
- Menu slide direction (left/right)

Generate a complete, production-ready navigation bar component now.

