// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add an event listener to reveal sections on scroll
const sections = document.querySelectorAll('section');

function revealOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Check if section is in viewport
        if (sectionTop < viewportHeight - 150) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Initial call to check visibility on load
revealOnScroll();

// Add scroll event listener
window.addEventListener('scroll', revealOnScroll);
