const navToggler = document.querySelector('.nav-toggler');
const headerNavbar = document.querySelector('.navbar-nav');
const closeBtn = document.querySelector('.close-btn');

navToggler.addEventListener('click', () => {
    headerNavbar.style.left = 0;
});

closeBtn.addEventListener('click', () => {
    headerNavbar.style.left = -150 + '%';
});
