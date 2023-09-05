// transition


document.querySelector('.nav-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    document.body.classList.add('home');

    setTimeout(function() {
        window.location.href = "home.html"; // Replace with your actual page URL
    }, 500); // Add a delay for the transition to complete before navigating
});


// JavaScript for the image slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}