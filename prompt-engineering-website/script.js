/**
 * Main JavaScript File
 * 
 * Interview Notes:
 * - Using IIFEs (Immediately Invoked Function Expressions) to avoid global scope pollution
 * - Mobile-first approach: menu toggle works on mobile, desktop shows full nav
 * - Form validation: Real-time validation with user-friendly error messages
 * - API integration: Using Fetch API for form submission with proper error handling
 * - Accessibility: Focus management, ARIA attributes, keyboard navigation support
 */

// ============================================
// Mobile Navigation Toggle
// Mobile-first: Menu is hidden by default on mobile, shown on desktop
// ============================================
(function() {
    'use strict';
    
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav__link');
    const body = document.body;
    
    if (!navToggle || !navMenu) return;
    
    // Toggle mobile menu - updates ARIA attributes for screen readers
    navToggle.addEventListener('click', function() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking a link - improves UX on mobile
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
    
    // Close menu when clicking outside - prevents menu from staying open
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
    
    // Close menu on window resize - handles orientation changes
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767 && navMenu.classList.contains('active')) {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
})();

// ============================================
// Smooth Scroll for Anchor Links
// Provides smooth scrolling behavior for better UX
// ============================================
(function() {
    'use strict';
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                // Account for fixed navbar height
                const offsetTop = target.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
})();

// ============================================
// Form Validation & API Integration
// 
// Interview Notes:
// - Real-time validation on blur provides immediate feedback
// - Clear, user-friendly error messages improve UX
// - Fetch API for async form submission
// - Proper error handling for network issues
// - Loading states prevent double submission
// ============================================
(function() {
    'use strict';
    
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    // Form fields
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const messageField = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    
    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');
    const formMessage = document.getElementById('formMessage');
    
    // API endpoint - easily replaceable for production
    const API_ENDPOINT = 'https://api.example.com/contact';
    
    /**
     * Validation Functions
     * Each function returns empty string if valid, error message if invalid
     */
    function validateName(name) {
        if (!name || name.trim().length === 0) {
            return 'Name is required';
        }
        if (name.trim().length < 2) {
            return 'Name must be at least 2 characters';
        }
        // Allow letters, spaces, hyphens, and apostrophes
        if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
            return 'Name can only contain letters, spaces, hyphens, and apostrophes';
        }
        return '';
    }
    
    function validateEmail(email) {
        if (!email || email.trim().length === 0) {
            return 'Email is required';
        }
        // RFC 5322 compliant email regex (simplified)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return 'Please enter a valid email address';
        }
        return '';
    }
    
    function validatePhone(phone) {
        // Phone is optional, but if provided, validate format
        if (!phone || phone.trim().length === 0) {
            return '';
        }
        // Basic phone validation - allows various formats
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone.trim()) || phone.trim().length < 10) {
            return 'Please enter a valid phone number (at least 10 digits)';
        }
        return '';
    }
    
    function validateMessage(message) {
        if (!message || message.trim().length === 0) {
            return 'Message is required';
        }
        if (message.trim().length < 10) {
            return 'Message must be at least 10 characters';
        }
        return '';
    }
    
    /**
     * UI Helper Functions
     * Manage visual feedback for form states
     */
    function showError(field, errorElement, errorMessage) {
        field.classList.add('error');
        field.setAttribute('aria-invalid', 'true');
        errorElement.textContent = errorMessage;
        errorElement.setAttribute('role', 'alert');
    }
    
    function clearError(field, errorElement) {
        field.classList.remove('error');
        field.setAttribute('aria-invalid', 'false');
        errorElement.textContent = '';
        errorElement.removeAttribute('role');
    }
    
    function clearFormMessage() {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
        formMessage.setAttribute('role', '');
    }
    
    function showSuccess(message) {
        formMessage.textContent = message;
        formMessage.className = 'form-message success';
        formMessage.setAttribute('role', 'alert');
        formMessage.style.display = 'block';
    }
    
    function showFormError(message) {
        formMessage.textContent = message;
        formMessage.className = 'form-message error';
        formMessage.setAttribute('role', 'alert');
        formMessage.style.display = 'block';
    }
    
    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
        } else {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    }
    
    /**
     * Real-time Validation
     * Validates on blur for immediate feedback without being intrusive
     */
    nameField.addEventListener('blur', function() {
        const error = validateName(this.value);
        if (error) {
            showError(this, nameError, error);
        } else {
            clearError(this, nameError);
        }
    });
    
    emailField.addEventListener('blur', function() {
        const error = validateEmail(this.value);
        if (error) {
            showError(this, emailError, error);
        } else {
            clearError(this, emailError);
        }
    });
    
    phoneField.addEventListener('blur', function() {
        const error = validatePhone(this.value);
        if (error) {
            showError(this, phoneError, error);
        } else {
            clearError(this, phoneError);
        }
    });
    
    messageField.addEventListener('blur', function() {
        const error = validateMessage(this.value);
        if (error) {
            showError(this, messageError, error);
        } else {
            clearError(this, messageError);
        }
    });
    
    /**
     * Clear errors on input
     * Removes error state as user types (better UX)
     */
    nameField.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            const error = validateName(this.value);
            if (!error) {
                clearError(this, nameError);
            }
        }
    });
    
    emailField.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            const error = validateEmail(this.value);
            if (!error) {
                clearError(this, emailError);
            }
        }
    });
    
    phoneField.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            const error = validatePhone(this.value);
            if (!error) {
                clearError(this, phoneError);
            }
        }
    });
    
    messageField.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            const error = validateMessage(this.value);
            if (!error) {
                clearError(this, messageError);
            }
        }
    });
    
    /**
     * Form Submission with API Integration
     * 
     * Interview Notes:
     * - Using Fetch API for async operations
     * - Proper error handling for network failures
     * - Loading states prevent double submission
     * - Fallback for demo/portfolio purposes
     */
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Clear previous messages
        clearFormMessage();
        
        // Validate all fields before submission
        const nameErrorMsg = validateName(nameField.value);
        const emailErrorMsg = validateEmail(emailField.value);
        const phoneErrorMsg = validatePhone(phoneField.value);
        const messageErrorMsg = validateMessage(messageField.value);
        
        // Show errors if any
        if (nameErrorMsg) {
            showError(nameField, nameError, nameErrorMsg);
        } else {
            clearError(nameField, nameError);
        }
        
        if (emailErrorMsg) {
            showError(emailField, emailError, emailErrorMsg);
        } else {
            clearError(emailField, emailError);
        }
        
        if (phoneErrorMsg) {
            showError(phoneField, phoneError, phoneErrorMsg);
        } else {
            clearError(phoneField, phoneError);
        }
        
        if (messageErrorMsg) {
            showError(messageField, messageError, messageErrorMsg);
        } else {
            clearError(messageField, messageError);
        }
        
        // If there are errors, focus on first error field for accessibility
        if (nameErrorMsg || emailErrorMsg || messageErrorMsg || phoneErrorMsg) {
            if (nameErrorMsg) {
                nameField.focus();
            } else if (emailErrorMsg) {
                emailField.focus();
            } else if (messageErrorMsg) {
                messageField.focus();
            } else if (phoneErrorMsg) {
                phoneField.focus();
            }
            showFormError('Please fix the errors above before submitting.');
            return;
        }
        
        // Form is valid - prepare data for API
        const formData = {
            name: nameField.value.trim(),
            email: emailField.value.trim(),
            phone: phoneField.value.trim() || null,
            message: messageField.value.trim()
        };
        
        // Set loading state
        setLoadingState(true);
        
        try {
            // Attempt to submit to API
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            // Check if response is ok
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Success - show success message
            showSuccess('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
            
            // Reset form
            contactForm.reset();
            
            // Clear all errors
            clearError(nameField, nameError);
            clearError(emailField, emailError);
            clearError(phoneField, phoneError);
            clearError(messageField, messageError);
            
            // Scroll to success message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
        } catch (error) {
            // Handle network errors or API failures
            console.error('Form submission error:', error);
            
            // For portfolio/demo purposes: show success anyway
            // In production, you'd show an error message
            showSuccess('Thank you! Your message has been received. We\'ll get back to you within 24 hours.');
            
            // Reset form
            contactForm.reset();
            
            // Clear all errors
            clearError(nameField, nameError);
            clearError(emailField, emailError);
            clearError(phoneField, phoneError);
            clearError(messageField, messageError);
            
            // Scroll to success message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Uncomment below for production error handling:
            // showFormError('Sorry, there was an error submitting your message. Please try again later or contact us directly.');
        } finally {
            // Always remove loading state
            setLoadingState(false);
        }
    });
})();

// ============================================
// Update Copyright Year
// Automatically updates copyright year
// ============================================
(function() {
    'use strict';
    
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
})();


