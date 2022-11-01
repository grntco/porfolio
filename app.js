// const cards = document.querySelectorAll('.card');
// const cardImg = document.querySelectorAll('.card-img');

// cards.forEach(card => {
//     card.addEventListener('click', () => {

//     })
// });


// Dark/Light Mode


const sidebar = document.querySelector('.sidebar');
const name = document.querySelector('.name');
const sidebarLinks = document.querySelectorAll('sidebar-links.a');




const mainContainer = document.querySelector('.main-container');
const cards = document.querySelectorAll('.card');
const links = document.getElementsByTagName('a');


let themeIcon = document.querySelector('.theme-icon');

themeIcon.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // document.getElementsByClassName('theme-icon').classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        themeIcon.innerHTML = '<i class="far fa-sun"></i>';
    } else {
        themeIcon.innerHTML = '<i class="fa-regular fa-moon"></i>';
    }
})




// themeIcon.addEventListener('click', () => {
//     goDark();
// });

// function goDark() {
//     //Body
//     document.body.style.backgroundColor = '#121212';
//     document.body.style.color = '#F0F0F0';

//     // Theme Icon
//     themeIcon.style.backgroundColor = '#181818'
//     themeIcon.style.borderColor = '#404040';
//     themeIcon.style.boxShadow = '2px 2px 8px 0px rgba(30,30,30,1)';

//     // Sidebar
//     sidebar.style.backgroundColor = '#181818';
//     sidebar.style.borderColor = '#404040';
//     sidebar.style.boxShadow = '2px 2px 8px 0px rgba(30,30,30,1)';
//     name.style.color = '#F8F8F8';
    
//     sidebarLinks.forEach(link => {
//         link.style.color = '#F8F8F8';
//     });





    // Brighten text

    // links.forEach(link => {
    //     link.style.color = '#F0F0F0';
    // });


//     //Darken backgrounds
//     mainContainer.style.backgroundColor = '#121212';

//     cards.forEach(card => {
//         card.style.backgroundColor = '#181818';
//     });
// };