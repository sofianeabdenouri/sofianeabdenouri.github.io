document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to all navigation links
    var navLinks = document.querySelectorAll('.sidebar a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            var sectionId = this.getAttribute('href').substring(1); // Get the section ID
            var section = document.getElementById(sectionId); // Find the section by ID
            if (section) {
                // Show the content for the selected section
                showContent(sectionId);

                // Scroll smoothly to the section
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Show Hypertec content by default
    showContent('hypertec');

    // Set Hypertec link as active by default
    document.querySelector('.sidebar a[href="#hypertec"]').classList.add('active');
});

function showContent(id) {
    // Hide all content
    var contents = document.querySelectorAll('.content > div');
    contents.forEach(function(content) {
        content.classList.remove('active');
        content.style.display = 'none'; // Hide the content
    });

    // Remove active class from all sidebar links
    var links = document.querySelectorAll('.sidebar a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Show the selected content
    var selectedContent = document.getElementById(id);
    selectedContent.classList.add('active');
    selectedContent.style.display = 'block'; // Show the selected content

    // Add active class to the clicked sidebar link
    document.querySelector('.sidebar a[href="#' + id + '"]').classList.add('active');
}
