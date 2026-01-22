document.addEventListener('DOMContentLoaded', function() {
    // Alert on subscribe
    const subscribeForm = document.querySelector('form[action*="formspree"]');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function() {
            alert('Thanks for subscribing! We\'ll send gardening tips to your email.');
        });
    }
    // Simple image hover effect
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});