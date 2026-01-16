window.addEventListener("load", () => {
  document
    .querySelectorAll(".hero .reveal")
    .forEach((el) => el.classList.add("reveal--active"));
});

//Swiper
document.addEventListener("DOMContentLoaded", () => {
  const volunteerSwiper = new Swiper(".volunteer__swiper", {
    loop: true,
    speed: 450,
    slidesPerView: 2,
    spaceBetween: 16,
    autoplay: {
      disableOnInteraction: false,
    },

    breakpoints: {
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 6 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const nextBtn = document.querySelector(".swiper-button-next");
  const prevBtn = document.querySelector(".swiper-button-prev");

  [nextBtn, prevBtn].forEach((btn) => {
    if (!btn) return;

    btn.addEventListener("mouseenter", () => {
      volunteerSwiper.autoplay.stop();
    });

    btn.addEventListener("mouseleave", () => {
      volunteerSwiper.autoplay.start();
    });
  });
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => observer.observe(el));
