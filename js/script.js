// Wait for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header'); // Select the header element

    // Add scroll event listener
    window.addEventListener('scroll', function() {
        // Check if page has been scrolled
        if (window.scrollY > 0) {
            header.classList.add('shadow'); // Add the shadow class on scroll
        } else {
            header.classList.remove('shadow'); // Remove the shadow class when at the top
        }
    });
});

  