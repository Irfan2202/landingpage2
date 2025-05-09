$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  navText: [
    '<i class="bi bi-dash-lg fs-2"></i>',
    '<i class="bi bi-dash-lg fs-2"></i>',
  ],
  dots: false,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
const toggle = document.getElementById("darkModeToggle");
const icon = document.getElementById("toggleIcon");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle icon
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");
  } else {
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-fill");
  }
});
