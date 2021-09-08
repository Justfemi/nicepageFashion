let bars = document.querySelector('.hamburger');
let navbar = document.querySelector('.navbar');
let closeBtn = document.querySelector('.close');

bars.addEventListener('click', () => {
    // bars.classList.toggle('.fa-times');
    navbar.classList.add('active');
    // console.log('clicked');
});

navbar.addEventListener('click', () => {
    navbar.classList.remove('active');
})

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
})