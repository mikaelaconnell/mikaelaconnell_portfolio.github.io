document.addEventListener("DOMContentLoaded", function () {
  VANTA.BIRDS({
    el: "#lead",
    backgroundColor: 0x3498db,        // Blue background
    color1: 0xff1493,                 // Hot pink
    color2: 0xff6600,                 // Orange
    birdSize: 1.8,                    // Smaller birds for realism
    wingSpan: 20.0,
    speedLimit: 6.0,                  // Higher speed makes movement more dynamic
    separation: 70.0,                 // Spacing between birds
    alignment: 0.3,                   // Slight group coordination
    cohesion: 0.5,                    // Lower = more scattered, less clumping
    quantity: 4.0,                    // Adjust if you want more/less birds
    backgroundAlpha: 1.0,
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00
  });
});
