const hamburger = document.querySelector(".nav__hamburger");
const menu = document.querySelector(".nav__menu");
const closeNav = document.querySelector(".nav__close_btn");

// mobile nav animations
if (window.screen.width < 768) {
  hamburger.addEventListener("click", () => {
    TweenMax.to(menu, 0.5, {
      y: "0",
      opacity: 1,
      ease: Expo.easeInOut,
    });
  });

  closeNav.addEventListener("click", () => {
    TweenMax.to(menu, 0.5, {
      y: "-100",
      opacity: 0,
      ease: Expo.easeInOut,
    });
  });
}

// nav and logo animations
TweenMax.from(".nav__logo", 1.5, {
  delay: 1,
  y: "-150",
  ease: Expo.easeInOut,
});

if (window.screen.width >= 768) {
  TweenMax.from(".nav__menu .nav__link", 1.5, {
    delay: 1.4,
    y: "-150",
    ease: Expo.easeInOut,
  });
}

TweenMax.from(".nav__hamburger", 1.5, {
  delay: 1.8,
  y: "-150",
  ease: Expo.easeInOut,
});

// Overlay Animations
TweenMax.to(".first", 1.5, {
  delay: 0.1,
  top: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.to(".second", 1.5, {
  delay: 0.3,
  top: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.to(".third", 1.5, {
  delay: 0.7,
  top: "-100%",
  ease: Expo.easeInOut,
});

// header animations
TweenMax.from(".intro__heading .hide", 1.5, {
  delay: 2,
  y: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".intro__text .hide", 1.5, {
  delay: 2.4,
  y: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".intro__btn", 1.5, {
  delay: 2.5,
  x: "-100%",
  opacity: 0,
  ease: Expo.easeInOut,
});
// featured image animations
TweenMax.from(".featured_image", 1.5, {
  delay: 2.2,
  opacity: 0,
  ease: Expo.easeInOut,
});
// process list animations
TweenMax.from(".process__item.one", 1.5, {
  delay: 2.5,
  opacity: 0,
  y: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".process__item.two", 1.5, {
  delay: 2.7,
  opacity: 0,
  y: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".process__item.three", 1.5, {
  delay: 3,
  opacity: 0,
  y: "100%",
  ease: Expo.easeInOut,
});
// social icons animations
TweenMax.from(".facebook", 1.5, {
  delay: 3.1,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from(".instagram", 1.5, {
  delay: 3.3,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from(".twitter", 1.5, {
  delay: 3.5,
  opacity: 0,
  ease: Expo.easeInOut,
});
