const navToggler = document.querySelector('.nav-toggler');
const headerNavbar = document.querySelector('.navbar-nav');
const closeBtn = document.querySelector('.close-btn');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

navToggler.addEventListener('click', () => {
    headerNavbar.style.left = 0;
    main.style.display = 'none';
    footer.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    headerNavbar.style.left = -150 + '%';
    main.style.display = 'block';
    /* footer.style.display = 'block'; */
});
