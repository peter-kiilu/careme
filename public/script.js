document.getElementById('whatsapp-button').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields before sending the message.');
        return;
    }

    const phoneNumber = '254103822934'; // e.g., 254712345678 (no "+" or leading 0)
    const text = `Hello CareMe,%0AMy name is ${name}.%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, '_blank');
});
