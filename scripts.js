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
/*
    // Example of adding dynamic content
    var mainContent = document.querySelector('main');
    var newContent = document.createElement('div');
    newContent.innerHTML = `
        <h2>New Section</h2>
        <p>This is dynamically added content.</p>
    `;
    mainContent.appendChild(newContent);
    */
});
