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