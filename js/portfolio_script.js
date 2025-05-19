// === Vanta Birds Background ===
window.addEventListener('DOMContentLoaded', () => {
  VANTA.BIRDS({
    el: "#lead",
    backgroundColor: 0x3498db, // blue
    color1: 0xff1493,          // pink
    color2: 0xff6600,          // orange
    quantity: 5.0,
    speedLimit: 6.0,
    cohesion: 1.0,
    separation: 70.0,
    alignment: 0.8,
    backgroundAlpha: 1.0,
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00
  });
});

// === Scroll to Top ===
const topBtn = document.getElementById("myBtn");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// === Mobile Menu Toggle ===
document.getElementById("mobile-menu-open").onclick = () => {
  document.querySelector("header").classList.add("active");
};
document.getElementById("mobile-menu-close").onclick = () => {
  document.querySelector("header").classList.remove("active");
};
