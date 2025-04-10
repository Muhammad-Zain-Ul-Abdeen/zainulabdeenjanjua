// Slider functionality for Career Highlights
const highlightsSlides = document.querySelector('#highlights .slides');
const highlightsDots = document.querySelectorAll('#highlights .slider-dot');
let highlightsCurrentSlide = 0;

// Slider functionality for Leadership & Communication
const featsSlides = document.querySelector('#feats .slides');
const featsDots = document.querySelectorAll('#feats .slider-dot');
let featsCurrentSlide = 0;

// Initialize sliders
function initSliders() {
    // Career Highlights slider
    highlightsDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            highlightsCurrentSlide = index;
            updateHighlightsSlider();
        });
    });
    
    // Leadership & Communication slider
    featsDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            featsCurrentSlide = index;
            updateFeatsSlider();
        });
    });
    
    // Auto-rotate sliders
    setInterval(() => {
        highlightsCurrentSlide = (highlightsCurrentSlide + 1) % highlightsDots.length;
        updateHighlightsSlider();
        
        featsCurrentSlide = (featsCurrentSlide + 1) % featsDots.length;
        updateFeatsSlider();
    }, 5000);
}

function updateHighlightsSlider() {
    highlightsSlides.style.transform = `translateX(-${highlightsCurrentSlide * 100}%)`;
    
    highlightsDots.forEach((dot, index) => {
        if (index === highlightsCurrentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function updateFeatsSlider() {
    featsSlides.style.transform = `translateX(-${featsCurrentSlide * 100}%)`;
    
    featsDots.forEach((dot, index) => {
        if (index === featsCurrentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initSliders);

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});