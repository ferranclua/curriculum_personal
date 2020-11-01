let parallax = document.querySelector('.parallax');

function scrollParallax() {
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * -0.1 + 'px)';
}

window.addEventListener('scroll', scrollParallax);