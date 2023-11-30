let stars = document.getElementById('stars');
let header = document.querySelector('header');
let moon = document.getElementById('moon1')

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.right = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px'
    moon.style.top = value + 50 + 'px'
})