let slideIndex = 0;
let slideWidth;

function showSlides() {
    let slides = document.getElementsByClassName("testimonial-slide");
    let dots = document.getElementsByClassName("dot");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Update slide width and position on each slide change
    slideWidth = slides[0].clientWidth;
    let newTransform = -((slideIndex - 1) * slideWidth) + 'px';
    document.querySelector('.testimonial-slideshow').style.transform = `translateX(${newTransform})`;

    // Update dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    dots[slideIndex - 1].className += " active-dot";

    setTimeout(showSlides, 7000);
}

// Recalculate slide width on resize
function handleResize() {
    slideWidth = document.querySelector('.testimonial-slide').clientWidth;
    let newTransform = -((slideIndex - 1) * slideWidth) + 'px';
    document.querySelector('.testimonial-slideshow').style.transform = `translateX(${newTransform})`;
}

// Initialize slideshow
showSlides();

// Handle window resize
window.addEventListener('resize', handleResize);