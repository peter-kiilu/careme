// whatsapp.js - Reusable WhatsApp button functionality
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsapp-button');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            // Check if we're on a contact page with a form
            if (document.getElementById('contact-form')) {
                const name = document.getElementById('name')?.value.trim() || '';
                const email = document.getElementById('email')?.value.trim() || '';
                const message = document.getElementById('message')?.value.trim() || '';
                
                if (name && email && message) {
                    // If form is filled, use that data
                    const phoneNumber = '254103822934'; // Your WhatsApp number without +
                    const text = `Hello CareMe,%0AMy name is ${name}.%0AEmail: ${email}%0AMessage: ${message}`;
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
                    window.open(whatsappUrl, '_blank');
                } else {
                    // If form isn't filled or doesn't exist, use default message
                    const phoneNumber = '254103822934';
                    const defaultMessage = 'Hello CareMe, I would like to get more information about your services.';
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
                    window.open(whatsappUrl, '_blank');
                }
            } else {
                // For all other pages
                const phoneNumber = '254103822934';
                const defaultMessage = 'Hello CareMe, I would like to get more information about your services.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
                window.open(whatsappUrl, '_blank');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    // Mobile menu toggle
    if (hamburger && navLinks && authButtons) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            authButtons.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-links a, .auth-buttons a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                authButtons.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });
    }
    
    // Scroll behavior
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Initialize hamburger icon
    if (hamburger) {
        hamburger.textContent = '☰';
    }
});