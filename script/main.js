const volunteerSwiper = new Swiper(".volunteer__swiper", {
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 6,
    },
  },
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
