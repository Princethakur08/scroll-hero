gsap.registerPlugin(ScrollTrigger);



// Headline stagger animation
gsap.from(".headline span", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.05,
  ease: "power3.out"
});

// Stats animation
gsap.from(".stat", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 60%",   // When hero reaches 60% of viewport
    toggleActions: "play none none reverse"
  }
});

// ----------------------
// Scroll Based Animation (CORE)
// ----------------------

gsap.to(".car", {
  x: 600,
  scale: 1.2,
  rotation: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

