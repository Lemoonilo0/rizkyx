// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover Effect for Content Items (Smooth animation on hover)
const contentItems = document.querySelectorAll('.content-item');
contentItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Optional: Add dynamic effects to section headings (like animated underline on load)
const sectionTitles = document.querySelectorAll('section h2');
sectionTitles.forEach(title => {
    title.addEventListener('mouseover', () => {
        const underline = title.querySelector('::after');
        title.style.setProperty('--scaleX', '1');
    });

    title.addEventListener('mouseout', () => {
        title.style.setProperty('--scaleX', '0');
    });
});

// Optional: Lazy Load Content or Images for better performance
const lazyImages = document.querySelectorAll('img[data-src]');
const loadImage = (image) => {
    image.src = image.getAttribute('data-src');
    image.removeAttribute('data-src');
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

lazyImages.forEach(image => {
    imageObserver.observe(image);
});

// Adjust layout on window resize (if needed)
window.addEventListener('resize', () => {
    // You can perform any responsive logic here if necessary
    console.log('Window resized');
});
