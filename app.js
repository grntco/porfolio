// Dark mode
const themeIcon = document.querySelector('.theme-icon');

themeIcon.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.contains('dark-mode')
        ? themeIcon.innerHTML = '<i class="far fa-sun"></i>'
        : themeIcon.innerHTML = '<i class="fa-regular fa-moon"></i>';
});

// Expanding cards to show more info
const cards = [...document.querySelectorAll('.card')];

cards.forEach(card => {
    card.addEventListener('click', function(e) {
        let index = cards.indexOf(e.target);
        if (index >= 1) {
            expandCard(cards[index]);
        } 
    });
});

function expandCard(card) {
    let cardImgs = card.querySelectorAll('.card-img');
    let moreInfo = card.querySelectorAll('.more-info');
    cardImgs.forEach(cardImg => {
        cardImg.classList.toggle('active');
    });
    moreInfo.forEach(p => {
        p.classList.toggle('active');
    });
}