// script.js

// Variables to manage the slideshow
let slideIndex = 0;

// Function to show the current slide
function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Loop through all slides and hide them
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Loop through all dots and remove 'active' class
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and add 'active' class to the current dot
    slides[index].style.display = "block";
    dots[index].className += " active";
}

// Function to change slides
function changeSlide(n) {
    slideIndex += n;

    // Reset to the last slide if we're past the last slide
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    // Reset to the first slide if we're before the first slide
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlide(slideIndex);
}

// Function to set the current slide based on dot click
function currentSlide(n) {
    slideIndex = n - 1; // Adjust for zero-based index
    showSlide(slideIndex);
}

// Initialize the slideshow
function initSlideshow() {
    showSlide(slideIndex); // Show the first slide
    // Automatically change slide every 5 seconds
    setInterval(() => changeSlide(1), 5000);
}

// Call the init function when the window loads
window.onload = initSlideshow;
