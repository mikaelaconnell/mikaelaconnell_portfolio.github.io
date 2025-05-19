// main.js

// Vanta Birds animation
window.addEventListener('DOMContentLoaded', () => {
  VANTA.BIRDS({
    el: "#lead",
    backgroundColor: 0x3498db, // Blue
    color1: 0xff1493,         // Hot Pink
    color2: 0xff6600,         // Orange
    quantity: 4.0,
    speedLimit: 6.0,
    cohesion: 0.6,
    separation: 70.0,
    alignment: 0.4,
    backgroundAlpha: 1.0,
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00
  });
});

// Mobile menu toggle
const mobileMenuOpen = document.getElementById('mobile-menu-open');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const menu = document.getElementById('menu');

if (mobileMenuOpen) {
  mobileMenuOpen.addEventListener('click', () => {
    menu.classList.add('active');
  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', () => {
    menu.classList.remove('active');
  });
}

// Smooth scroll for internal links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to Top button
const backToTopBtn = document.getElementById("myBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
