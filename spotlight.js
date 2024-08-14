let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlideIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // Go to the last slide
    } else {
        currentSlideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlideIndex ? 'block' : 'none';
    });
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

// Initialize slideshow
showSlide(currentSlideIndex);