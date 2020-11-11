let parallax = document.querySelector('.photo');

function scrollParallax() {
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * -0.2 + 'px)';
}

window.addEventListener('scroll', scrollParallax);