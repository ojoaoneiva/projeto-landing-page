gsap.registerPlugin(ScrollTrigger);

// Animation for .container
gsap.from(".container", {
  y: "60%",
  autoAlpha: 0,
  duration: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".container",
    start: "top 100%",
    end: "top 20%",
    toggleActions: "play none none none",
    onToggle: (self) => {
      if (self.isActive) {
        gsap.set(".container", { autoAlpha: 1 });
      }
    },
  },
});

// Rotation animation for images
function animateImage(selector, yOffset1, yOffset2, rotateDeg) {
  gsap.to(selector, {
    y: window.innerWidth < 600 ? `-${yOffset1}%` : `-${yOffset2}%`,
    rotate: `${rotateDeg}deg`,
    ease: "power4.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 90%",
      end: "top 1%",
      scrub: 1,
    },
  });
}

animateImage(".image-wrapper1", 120, 40, 10);
animateImage(".image-wrapper2", 160, 60, 5);

// Text animation
function applyTextAnimation(element) {
  const letters = Array.from(element.textContent);
  element.innerHTML = '';

  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    element.appendChild(span);

    gsap.from(span, {
      y: '100%',
      autoAlpha: 0,
      duration: 2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 10%',
      },
    });
  });
}

document.querySelectorAll('h1.titleeffect').forEach(applyTextAnimation);

// Parallax setup
function setupParallax() {
  gsap.utils.toArray('.parallax').forEach(section => {
    const image = section.querySelector('.parallax-img');

    gsap.from(image, {
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: -500,
      opacity: 1,
    });
  });
}

document.addEventListener('DOMContentLoaded', setupParallax);

// Function to show/hide menu
function toggleMenu() {
  const menuMobile = document.querySelector(".mobile-menu");
  const icon = document.querySelector(".ICON");
  
  menuMobile.classList.toggle("open");
  icon.src = menuMobile.classList.contains("open") ? "./assets/icons/close.svg" : "./assets/icons/menu.svg";
}

// Left slider images
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var progressBar = document.querySelector(".progress-bar");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

  // Update width and position of the white bar
  var progressWidth = 90 / slides.length;  // Constant width (1/3)
  var progressPosition = (slideIndex - 1) * progressWidth;

  progressBar.style.width = progressWidth + "%";
  progressBar.style.left = progressPosition + "%";

  // Apply transformation to images
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(" + ((i - (slideIndex - 1)) * 100) + "%)";
  }
}

// Right slider images
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var progressBar2 = document.querySelector(".progress-bar2");

  if (n > slides2.length) { slideIndex2 = 1; }
  if (n < 1) { slideIndex2 = slides2.length; }

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  slides2[slideIndex2 - 1].style.display = "block";

  // Update width and position of the white bar
  var progressWidth2 = 90 / slides2.length;  // Constant width (1/3)
  var progressPosition2 = (slideIndex2 - 1) * progressWidth2;

  progressBar2.style.width = progressWidth2 + "%";
  progressBar2.style.left = progressPosition2 + "%";

  // Apply transformation to images
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.transform = "translateX(" + ((i - (slideIndex2 - 1)) * 100) + "%)";
  }
}

// Smooth scroll
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  ScrollTrigger.update(e);
});

gsap.ticker.add((time) => {
  lenis.raf(time * 700);
});

gsap.ticker.lagSmoothing(0);

// Smooth section transition
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-list li a');

  function scrollToSection(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offset = targetSection.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }

  navLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
  });
});

// Set scroll position to top on page load/refresh
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

// Loading page
document.addEventListener("DOMContentLoaded", function () {
  const loadingOverlays = [
    document.getElementById("loading-strip1"),
    document.getElementById("loading-strip2"),
    document.getElementById("loading-strip3"),
    document.getElementById("loading-strip4"),
  ];

  loadingOverlays.forEach((loadingOverlay, index) => {
    setTimeout(() => {
      gsap.to(loadingOverlay, {
        y: "-100%",
        opacity: 1,
        duration: index===0 ? index + 0.2 : index * 1.005,
        ease: "power4.out",
        onComplete: () => {
          loadingOverlay.style.display = "none";
        },
      });
    }, 300);
  });
});