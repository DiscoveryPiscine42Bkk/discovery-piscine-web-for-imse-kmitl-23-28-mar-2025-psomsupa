// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');
const menuLinks = document.querySelectorAll('nav a');

mobileMenuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('mobile-menu-open');
});

// Close mobile menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('mobile-menu-open');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});