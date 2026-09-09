/**
 * HarmReductionAdvocate.com - Main JavaScript
 * Built with bolt.net
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    setupMobileNav();
    
    // Smooth Scrolling for Anchor Links
    setupSmoothScrolling();
    
    // Add animation classes when elements enter viewport
    setupAnimations();
    
    // Initialize any forms with validation
    setupForms();
});

/**
 * Mobile Navigation Setup
 */
function setupMobileNav() {
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.setAttribute('aria-label', 'Toggle Navigation');
    navToggle.innerHTML = '<span>☰</span>';
    
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const mainNav = document.querySelector('.main-nav');
    
    if (header && nav && mainNav) {
        // Insert toggle button before the nav
        header.insertBefore(navToggle, nav);
        
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('show');
            
            // Change toggle icon based on menu state
            if (mainNav.classList.contains('show')) {
                navToggle.innerHTML = '<span>✕</span>';
            } else {
                navToggle.innerHTML = '<span>☰</span>';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !navToggle.contains(event.target) && mainNav.classList.contains('show')) {
                mainNav.classList.remove('show');
                navToggle.innerHTML = '<span>☰</span>';
            }
        });
        
        // Close menu when window is resized to desktop width
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mainNav.classList.contains('show')) {
                mainNav.classList.remove('show');
                navToggle.innerHTML = '<span>☰</span>';
            }
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Account for fixed header height
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without scrolling
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Animations on Scroll
 */
function setupAnimations() {
    // Add .animated class to elements when they enter viewport
    const elements = document.querySelectorAll('.service-card, .blog-card, .content-block, .section-title');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        elements.forEach(element => {
            element.classList.add('animated');
        });
    }
}

/**
 * Form Validation and Handling
 */
function setupForms() {
    const contactForm = document.querySelector('form.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let valid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            // Basic validation
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('error');
                    
                    // Create or update error message
                    let errorMsg = field.parentElement.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        field.parentElement.appendChild(errorMsg);
                    }
                    errorMsg.textContent = 'This field is required';
                } else {
                    field.classList.remove('error');
                    const errorMsg = field.parentElement.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                    
                    // Email validation
                    if (field.type === 'email' && !isValidEmail(field.value)) {
                        valid = false;
                        field.classList.add('error');
                        
                        // Create or update error message
                        let errorMsg = field.parentElement.querySelector('.error-message');
                        if (!errorMsg) {
                            errorMsg = document.createElement('div');
                            errorMsg.className = 'error-message';
                            field.parentElement.appendChild(errorMsg);
                        }
                        errorMsg.textContent = 'Please enter a valid email address';
                    }
                }
            });
            
            // Prevent form submission if validation fails
            if (!valid) {
                e.preventDefault();
                
                // Scroll to first error
                const firstError = contactForm.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                }
            } else {
                // If using bolt.net's form handling, you'd likely add additional code here to submit
                // the form data to bolt.net's backend API
                
                // For this demo, we'll just show a success message and prevent default submission
                e.preventDefault();
                
                // Hide the form
                contactForm.style.display = 'none';
                
                // Show a success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <h3>Thank you for reaching out!</h3>
                    <p>Your message has been received. We'll get back to you as soon as possible.</p>
                    <button class="btn primary-btn" id="reset-form">Send Another Message</button>
                `;
                
                // Insert after the form
                contactForm.parentElement.appendChild(successMessage);
                
                // Add event listener to reset button
                document.getElementById('reset-form').addEventListener('click', function() {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    successMessage.remove();
                });
            }
        });
        
        // Remove error styling when user starts typing
        contactForm.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('error');
                const errorMsg = this.parentElement.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            });
        });
    }
}

/**
 * Email Validation Helper
 */
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

/**
 * Lazy Loading Images
 * This will be useful when the site has many images
 */
function setupLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports 'loading' attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.setAttribute('loading', 'lazy');
            img.setAttribute('src', img.getAttribute('data-src'));
            img.removeAttribute('data-src');
        });
    } else {
        // Fallback to Intersection Observer
        if ('IntersectionObserver' in window) {
            const imgObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.getAttribute('data-src');
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imgObserver.observe(img);
            });
        } else {
            // No support for IntersectionObserver, load all images immediately
            document.querySelectorAll('img[data-src]').forEach(img => {
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
            });
        }
    }
}

/**
 * Dark Mode Toggle (if needed in the future)
 */
function setupDarkModeToggle() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        // Check for saved user preference
        const prefersDarkMode = localStorage.getItem('prefersDarkMode') === 'true';
        
        // Check system preference
        const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Set initial mode
        if (prefersDarkMode || (systemPrefersDark && localStorage.getItem('prefersDarkMode') === null)) {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
        
        // Listen for toggle changes
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('prefersDarkMode', 'true');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('prefersDarkMode', 'false');
            }
        });
    }
}
