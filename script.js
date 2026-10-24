// Page transition: slide the start page away, then open the home page
document.querySelector('.cta').addEventListener('click', function(event) {
    event.preventDefault(); // Wait for the animation before navigating
    var target = this.href; // Read it now: event.currentTarget is cleared once the click finishes

    document.body.classList.add('home');

    setTimeout(function() {
        window.location.href = target;
    }, 500); // Add a delay for the transition to complete before navigating
});
