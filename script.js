// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const subNav = document.querySelector('.sub-nav');

if (hamburger && subNav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        subNav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    subNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            subNav.classList.remove('active');
        });
    });
}

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (hamburger && subNav && !event.target.closest('.main-header')) {
        hamburger.classList.remove('active');
        subNav.classList.remove('active');
    }
});

// Slider
let slideIndex = 0;
const track = document.getElementById('sliderTrack');
const dots = document.querySelectorAll('.dot');

function updateSlider() {
    track.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
    });
}

function moveSlide(n) {
    const totalSlides = document.querySelectorAll('.slide').length;
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    updateSlider();
}

function currentSlide(n) {
    slideIndex = n;
    updateSlider();
}

// Auto-play every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Back to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}