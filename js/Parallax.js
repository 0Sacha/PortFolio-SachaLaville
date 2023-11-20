let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let earth = document.getElementById(('earth'))
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function (){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.marginLeft= value * .4 + 'px';
    earth.style.marginRight = value * .1 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px'

})