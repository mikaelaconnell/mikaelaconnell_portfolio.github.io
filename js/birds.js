document.addEventListener("DOMContentLoaded", function () {
  VANTA.BIRDS({
    el: "#lead",
    backgroundColor: 0x3498db,   // Blue
    color1: 0xff1493,            // Hot pink
    color2: 0xff6600,            // Orange
    quantity: 4.0,
    speedLimit: 3.5,
    cohesion: 0.3,               // Less flocking
    separation: 90.0,            // More spread out
    alignment: 0.2,              // Less uniform flying
    backgroundAlpha: 1.0,
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00
  });
});
