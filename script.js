document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Desktop Dropdown
  if (window.innerWidth > 768) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");
      toggle.addEventListener("mouseenter", () =>
        menu.classList.remove("hidden")
      );
      dropdown.addEventListener("mouseleave", () =>
        menu.classList.add("hidden")
      );
    });
  }

  // Mobile Accordion
  const mobileDropdownToggles = document.querySelectorAll(
    ".mobile-dropdown-toggle"
  );
  mobileDropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const menu = toggle.nextElementSibling;
      const icon = toggle.querySelector("i");
      menu.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });

  const glide = document.querySelector(".glide");
  if (glide) {
    new Glide(glide, {
      type: "carousel",
      startAt: 0,
      perView: 3,
      gap: 32,
      breakpoints: {
        1024: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }
});
