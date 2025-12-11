/**
 * Main JavaScript File
 * Handles mobile navigation menu toggle and form validation
 */

// ============================================
// Mobile Navigation Toggle
// ============================================
(function() {
    'use strict';
    
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    const body = document.body;
    
    if (!navbarToggle || !navbarMenu) return;
    
    // Toggle mobile menu
    navbarToggle.addEventListener('click', function() {
        const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        
        navbarToggle.setAttribute('aria-expanded', !isExpanded);
        navbarMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking a link
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarToggle.setAttribute('aria-expanded', 'false');
            navbarMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbarMenu.contains(event.target) || navbarToggle.contains(event.target);
        
        if (!isClickInsideNav && navbarMenu.classList.contains('active')) {
            navbarToggle.setAttribute('aria-expanded', 'false');
            navbarMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
    
    // Close menu on window resize (if resizing to desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767 && navbarMenu.classList.contains('active')) {
            navbarToggle.setAttribute('aria-expanded', 'false');
            navbarMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
})();

// ============================================
// Smooth Scroll for Anchor Links
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
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
})();

// ============================================
// Form Validation
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
    
    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');
    const formMessage = document.getElementById('formMessage');
    
    // Validation functions
    function validateName(name) {
        if (!name || name.trim().length === 0) {
            return 'Name is required';
        }
        if (name.trim().length < 2) {
            return 'Name must be at least 2 characters';
        }
        if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
            return 'Name can only contain letters, spaces, hyphens, and apostrophes';
        }
        return '';
    }
    
    function validateEmail(email) {
        if (!email || email.trim().length === 0) {
            return 'Email is required';
        }
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
        // Basic phone validation (allows various formats)
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone.trim()) || phone.trim().length < 10) {
            return 'Please enter a valid phone number';
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
    
    // Display error function
    function showError(field, errorElement, errorMessage) {
        field.classList.add('error');
        field.setAttribute('aria-invalid', 'true');
        errorElement.textContent = errorMessage;
        errorElement.setAttribute('role', 'alert');
    }
    
    // Clear error function
    function clearError(field, errorElement) {
        field.classList.remove('error');
        field.setAttribute('aria-invalid', 'false');
        errorElement.textContent = '';
        errorElement.removeAttribute('role');
    }
    
    // Clear form message
    function clearFormMessage() {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
        formMessage.setAttribute('role', '');
    }
    
    // Show success message
    function showSuccess(message) {
        formMessage.textContent = message;
        formMessage.className = 'form-message success';
        formMessage.setAttribute('role', 'alert');
        formMessage.style.display = 'block';
    }
    
    // Show error message
    function showFormError(message) {
        formMessage.textContent = message;
        formMessage.className = 'form-message error';
        formMessage.setAttribute('role', 'alert');
        formMessage.style.display = 'block';
    }
    
    // Real-time validation on blur
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
    
    // Clear errors on input
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
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous messages
        clearFormMessage();
        
        // Validate all fields
        const nameErrorMsg = validateName(nameField.value);
        const emailErrorMsg = validateEmail(emailField.value);
        const phoneErrorMsg = validatePhone(phoneField.value);
        const messageErrorMsg = validateMessage(messageField.value);
        
        // Show errors
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
        
        // If there are errors, focus on first error field
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
        
        // Form is valid - show loading state
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Simulate form submission (in real app, this would be an API call)
        setTimeout(function() {
            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
            
            // Show success message
            showSuccess('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Clear all errors
            clearError(nameField, nameError);
            clearError(emailField, emailError);
            clearError(phoneField, phoneError);
            clearError(messageField, messageError);
            
            // Scroll to success message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1500);
    });
})();

// ============================================
// Update Copyright Year
// ============================================
(function() {
    'use strict';
    
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
})();


