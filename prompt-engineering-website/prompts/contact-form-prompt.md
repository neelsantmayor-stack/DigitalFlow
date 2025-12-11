# Contact/Lead Form Prompt - Detailed Reusable Prompt

## Context
You are an expert front-end developer specializing in creating user-friendly, accessible, and conversion-optimized contact forms. Your task is to generate a complete contact/lead form component with proper validation and excellent UX.

## Requirements

### HTML Structure
- Create a semantic `<section>` element with class "contact" or "contact-form"
- Include a section header with:
  - Optional section label/tag
  - Main heading (H2) - e.g., "Get In Touch", "Contact Us"
  - Optional subheading/description
- Create a `<form>` element with proper attributes:
  - Method: "POST" (or appropriate method)
  - Action: "#" or endpoint URL (placeholder)
  - Novalidate attribute (we'll handle validation with JS)
- Form fields (all with proper labels and inputs):
  1. **Name field**:
     - Type: "text"
     - Required attribute
     - Placeholder: "Your Name"
     - Label: "Full Name" or "Name"
     - Autocomplete: "name"
  2. **Email field**:
     - Type: "email"
     - Required attribute
     - Placeholder: "your.email@example.com"
     - Label: "Email Address"
     - Autocomplete: "email"
  3. **Phone field** (optional):
     - Type: "tel"
     - Placeholder: "+1 (555) 123-4567"
     - Label: "Phone Number"
     - Autocomplete: "tel"
  4. **Message/Subject field**:
     - Type: "text" or "textarea"
     - If textarea: rows="5" or "6"
     - Required attribute
     - Placeholder: "Your message..."
     - Label: "Message" or "How can we help?"
- Submit button:
  - Type: "submit"
  - Accessible label
  - Loading state consideration
- Error message containers:
  - Inline error messages for each field
  - General form error/success message area
- Wrap each field in a container div for styling flexibility

### CSS Styling
- Use CSS custom properties for theming
- Implement a clean, professional form design:
  - Centered or left-aligned layout
  - Generous spacing between fields
  - Clear visual hierarchy
  - Modern, accessible styling
- Form container:
  - Max-width: 600px - 800px
  - Padding: 2rem - 3rem
  - Background: White or subtle color
  - Border radius: 8px - 12px
  - Box shadow: Subtle shadow for depth
  - Margin: Centered with auto margins
- Field styling:
  - Label: 
    - Display: block
    - Font-weight: 500-600
    - Font-size: 0.875rem - 1rem
    - Margin-bottom: 0.5rem
    - Color: Dark gray
  - Input/Textarea:
    - Width: 100%
    - Padding: 0.75rem - 1rem
    - Border: 1-2px solid (light gray, #ddd or similar)
    - Border radius: 4px - 6px
    - Font-size: 1rem
    - Line-height: 1.5
    - Transition: 0.2s ease for border and shadow
    - Focus state:
      - Border color: Primary brand color
      - Outline: 2-3px solid (primary color with opacity)
      - Box shadow: Subtle glow
  - Textarea:
    - Min-height: 120px - 150px
    - Resize: vertical only
    - Font-family: Inherit
- Field container:
  - Margin-bottom: 1.5rem - 2rem
- Error states:
  - Error input border: Red (#dc2626 or similar)
  - Error message:
    - Color: Red
    - Font-size: 0.875rem
    - Margin-top: 0.25rem - 0.5rem
    - Display: block
- Success states:
  - Success message: Green (#10b981 or similar)
  - Font-size: 1rem
  - Padding: 1rem
  - Background: Light green background
  - Border radius: 4px
  - Margin: 1rem 0
- Submit button:
  - Width: 100% or auto (with padding)
  - Padding: 0.875rem - 1.25rem (horizontal), 0.75rem - 1rem (vertical)
  - Background: Primary brand color
  - Color: White or contrasting color
  - Border: None
  - Border radius: 4px - 6px
  - Font-size: 1rem - 1.125rem
  - Font-weight: 600-700
  - Cursor: pointer
  - Transition: 0.2s ease
  - Hover: Darker shade or slight scale
  - Active: Slight scale down
  - Disabled: Reduced opacity, cursor not-allowed

### JavaScript Functionality
- Form validation (client-side):
  - Real-time validation on blur or submit
  - Validate email format (regex)
  - Check required fields
  - Validate name (minimum length, no numbers)
  - Validate message (minimum length)
- Error display:
  - Show inline error messages below each field
  - Highlight field with error (red border)
  - Remove error styling when field is valid
- Form submission:
  - Prevent default form submission
  - Show loading state on button
  - Validate all fields before submission
  - Show success message on successful validation
  - Reset form after successful submission (or show success message)
  - Handle errors gracefully
- Accessibility:
  - Associate error messages with fields (aria-describedby)
  - Set aria-invalid on fields with errors
  - Focus management (focus first error field or success message)

### Validation Rules
- Name: Required, minimum 2 characters, letters and spaces only
- Email: Required, valid email format
- Phone: Optional, but if provided, validate format (flexible)
- Message: Required, minimum 10-20 characters

### Responsive Design
- Mobile-first approach
- Form width:
  - Mobile: Full width with padding (1rem)
  - Tablet: Max-width 600px
  - Desktop: Max-width 700px - 800px
- Input padding: Slightly smaller on mobile
- Button: Full width on mobile, auto width on desktop

### Code Quality
- Semantic HTML5
- Clean, maintainable CSS
- Well-commented JavaScript
- BEM or similar naming convention
- Production-ready code
- Easy to customize validation rules, styling, fields

### Accessibility
- Proper label association (for attribute)
- Required field indicators (asterisk or "required" text)
- ARIA attributes (aria-required, aria-invalid, aria-describedby)
- Keyboard navigation support
- Focus management
- Screen reader friendly error messages
- Sufficient color contrast

## Output Format
Provide complete, working HTML, CSS, and JavaScript code. Include:
- Full HTML form structure
- Complete CSS with all states (normal, focus, error, success)
- Complete JavaScript validation logic
- Comments explaining validation rules
- Placeholder content that can be easily customized

## Example Structure
```
<section class="contact">
  <div class="contact-container">
    <div class="contact-header">
      <h2>Get In Touch</h2>
      <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
    </div>
    <form class="contact-form" id="contactForm" novalidate>
      <div class="form-group">
        <label for="name">Full Name <span class="required">*</span></label>
        <input type="text" id="name" name="name" required autocomplete="name" placeholder="Your Name">
        <span class="error-message" id="nameError"></span>
      </div>
      <div class="form-group">
        <label for="email">Email Address <span class="required">*</span></label>
        <input type="email" id="email" name="email" required autocomplete="email" placeholder="your.email@example.com">
        <span class="error-message" id="emailError"></span>
      </div>
      <div class="form-group">
        <label for="message">Message <span class="required">*</span></label>
        <textarea id="message" name="message" rows="5" required placeholder="Your message..."></textarea>
        <span class="error-message" id="messageError"></span>
      </div>
      <div class="form-message" id="formMessage"></div>
      <button type="submit" class="btn-submit">Send Message</button>
    </form>
  </div>
</section>
```

## Customization Points
Make it easy to customize:
- Form fields (add/remove fields)
- Validation rules
- Error messages
- Color scheme
- Form action endpoint
- Field labels and placeholders
- Styling (spacing, sizes, colors)

Generate a complete, production-ready contact/lead form component now.

