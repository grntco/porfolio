// Dark Mode

const themeIcon = document.querySelector('.theme-icon');

themeIcon.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.contains('dark-mode')
        ? themeIcon.innerHTML = '<i class="far fa-sun"></i>'
        : themeIcon.innerHTML = '<i class="fa-regular fa-moon"></i>';
});