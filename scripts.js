document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to all navigation links
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            var sectionId = this.getAttribute('href').substring(1); // Get the section ID
            var section = document.getElementById(sectionId); // Find the section by ID
            if (section) {
                // Scroll smoothly to the section
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
