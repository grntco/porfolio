// Variables
const themeIcon = document.querySelector('.theme-icon');
const cards = [...document.querySelectorAll('.card')];

// Dark mode
themeIcon.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.contains('dark-mode')
        ? themeIcon.innerHTML = '<i class="far fa-sun"></i>'
        : themeIcon.innerHTML = '<i class="fa-regular fa-moon"></i>';
});

// Expanding cards to show more info
let cardExpanded = false;

function expandCard(card) {
    let cardImgs = card.querySelectorAll('.card-img');
    let moreInfo = card.querySelectorAll('.more-info');
    if (([...cardImgs].length === 0) || ([...moreInfo].length === 0)) {
        cardExpanded = false;
    } else {
        cardImgs.forEach(cardImg => {
            cardImg.classList.toggle('active');
        });
        moreInfo.forEach(p => {
            p.classList.toggle('active');
        });
        cardExpanded = true;
    }
};

cards.forEach(card => {
    card.addEventListener('click', function(e) {
        let readMore = card.querySelector('.read-more');
        if ((e.target === card) || (e.target === readMore)) {
            expandCard(card);
            if ((readMore.textContent === 'Read More') && (cardExpanded)) {
                readMore.textContent = 'Show Less';
            } else {
                readMore.textContent = 'Read More';
            }
        };
    });
});

// Highlight sidebar links on scroll
function highlightSidebar() {
    let aboutLink = document.getElementById('about-link');
    let projectsLink = document.getElementById('projects-link');
    let progressLink = document.getElementById('progress-link');

    let scrollPosition = window.scrollY;
    if (scrollPosition < 400) {
        aboutLink.classList.add('sidebar-highlight');
        projectsLink.classList.remove('sidebar-highlight');
        progressLink.classList.remove('sidebar-highlight');
        return;
    } else if ((scrollPosition >= 400) && (scrollPosition < 900)) {
        projectsLink.classList.add('sidebar-highlight');
        aboutLink.classList.remove('sidebar-highlight');
        progressLink.classList.remove('sidebar-highlight');
        return;
    } else if (scrollPosition >= 900) {
        progressLink.classList.add('sidebar-highlight');
        aboutLink.classList.remove('sidebar-highlight');
        projectsLink.classList.remove('sidebar-highlight');
        return;
    }
}
window.addEventListener('scroll', highlightSidebar);











