// Variables
const mainContainer = document.querySelector(".main-container");
const sidebar = document.querySelector(".sidebar");
const themeIcon = document.querySelector(".theme-icon");
const sidebarLinks = document.querySelectorAll(".sidebar-link a");
const hamMenu = document.querySelector(".hamburger-menu");
const cards = [...document.querySelectorAll(".card")];
const sections = document.querySelectorAll("section");
let cardExpanded = false;

// Toggle light/dark mode

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.contains("dark-mode")
    ? (themeIcon.innerHTML = '<i class="far fa-sun"></i>')
    : (themeIcon.innerHTML = '<i class="fa-regular fa-moon"></i>');
};

themeIcon.addEventListener("click", toggleTheme);

// Expand cards to show more info
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
  };
};

cards.forEach((card) => {
  card.addEventListener("click", function (e) {
    let readMore = card.querySelector(".read-more");
    if (e.target === card || e.target === readMore) {
      expandCard(card);
      if (readMore.textContent === "Read More" && cardExpanded) {
        readMore.textContent = "Show Less";
      } else {
        readMore.textContent = "Read More";
      };
    };
  });
});

// Highlight sidebar links on scroll
function highlightSidebar() {
  let current = "";
  let scrollPos = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPos >= sectionTop - sectionHeight / 2.5) {
      current = section.getAttribute("id");
    };
  });
  sidebarLinks.forEach((link) => {
    link.classList.remove("sidebar-highlight");
    if (link.classList.contains(current)) {
      link.classList.add("sidebar-highlight");
    };
  });
};

window.addEventListener("scroll", highlightSidebar);

// Expand sidebar nav on mobile menu click
function toggleSidebar() {
  sidebar.classList.toggle("sidebar-active");
  sidebar.classList.contains("sidebar-active")
    ? (hamMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>')
    : (hamMenu.innerHTML = '<i class="fa-solid fa-bars"></i>');
};

hamMenu.addEventListener("click", toggleSidebar);

// Close sidebar on mobile if a sidebar link is clicked
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (
      window.innerWidth <= 1024 &&
      sidebar.classList.contains("sidebar-active")
    ) {
      toggleSidebar();
    };
  });
});

// Close sidebar on mobile if the main container is clicked
mainContainer.addEventListener("click", () => {
  if (
    window.innerWidth <= 1024 &&
    sidebar.classList.contains("sidebar-active")
  ) {
    toggleSidebar();
  };
});
