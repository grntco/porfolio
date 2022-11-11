// Toggle light/dark mode
const themeIcon = document.querySelector(".theme-icon");

themeIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.body.classList.contains("dark-mode")
    ? (themeIcon.innerHTML = '<i class="far fa-sun"></i>')
    : (themeIcon.innerHTML = '<i class="fa-regular fa-moon"></i>');
});

// Expand cards to show more info
const cards = [...document.querySelectorAll(".card")];
let cardExpanded = false;

function expandCard(card) {
  let cardImgs = card.querySelectorAll(".card-img");
  let moreInfo = card.querySelectorAll(".more-info");
  if ([...cardImgs].length === 0 && [...moreInfo].length === 0) {
    cardExpanded = false;
  } else {
    cardImgs.forEach((cardImg) => {
      cardImg.classList.toggle("expand-card");
    });
    moreInfo.forEach((p) => {
      p.classList.toggle("expand-card");
    });
    cardExpanded = true;
  }
}

cards.forEach((card) => {
  card.addEventListener("click", function (e) {
    let readMore = card.querySelector(".read-more");
    if (e.target === card || e.target === readMore) {
      expandCard(card);
      if (readMore.textContent === "Read More" && cardExpanded) {
        readMore.textContent = "Show Less";
      } else {
        readMore.textContent = "Read More";
      }
    }
  });
});

// Highlight sidebar links on scroll
const sections = document.querySelectorAll("section");
const sidebarLinks = document.querySelectorAll(".sidebar-link a");

function highlightSidebar() {
  let current = "";
  let scrollPos = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPos >= sectionTop - sectionHeight / 2.5) {
      current = section.getAttribute("id");
    }
  });
  sidebarLinks.forEach((link) => {
    link.classList.remove("sidebar-highlight");
    if (link.classList.contains(current)) {
      link.classList.add("sidebar-highlight");
    }
  });
}

window.addEventListener("scroll", highlightSidebar);

// Expand sidebar nav on mobile menu click

const hamMenu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("sidebar-active");
  sidebar.classList.contains("sidebar-active")
    ? (hamMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>')
    : (hamMenu.innerHTML = '<i class="fa-solid fa-bars"></i>');
}

hamMenu.addEventListener("click", toggleSidebar);

// Close sidebar on mobile if a sidebar link is clicked
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (
      window.innerWidth <= 1024 &&
      sidebar.classList.contains("sidebar-active")
    ) {
      toggleSidebar();
    }
  });
});

// Close sidebar on mobile if the main container is clicked
const mainContainer = document.querySelector(".main-container");

mainContainer.addEventListener("click", () => {
  if (
    window.innerWidth <= 1024 &&
    sidebar.classList.contains("sidebar-active")
  ) {
    toggleSidebar();
  }
});
