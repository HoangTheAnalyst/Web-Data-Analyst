// ===================================
// Navigation & Hamburger Menu
// ===================================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLink.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===================================
// Smooth Scroll & Active Link
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (window.scrollY >= top && window.scrollY <= top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// ===================================
// Intersection Observer for Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate only cards that can safely start hidden.
// Keep contact cards always visible to avoid intermittent disappearing state.
document.querySelectorAll('.project-card, .skill-card').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showNotification('Vui lòng điền tất cả các trường', 'error');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('Vui lòng nhập email hợp lệ', 'error');
            return;
        }

        // Simulate form submission (in real app, send to backend)
        console.log('Form data:', formData);
        
        // Show success message
        showNotification('Thank you for reaching out! I will get back to you as soon as possible.', 'success');

        // Reset form
        contactForm.reset();

        // Here you would typically send the data to a backend server
        // Example:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         showNotification('Message sent successfully!', 'success');
        //         contactForm.reset();
        //     }
        // })
        // .catch(error => {
        //     showNotification('Error sending message. Please try again.', 'error');
        //     console.error('Error:', error);
        // });
    });
}

// ===================================
// Notification System
// ===================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    const styles = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 2000;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        max-width: 400px;
        word-wrap: break-word;
    `;

    const typeStyles = {
        success: `
            background-color: #10b981;
            color: white;
        `,
        error: `
            background-color: #ef4444;
            color: white;
        `,
        info: `
            background-color: #3b82f6;
            color: white;
        `
    };

    notification.setAttribute('style', styles + typeStyles[type]);
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===================================
// Parallax Effect
// ===================================

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Hero section parallax
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// ===================================
// Navbar Shadow on Scroll
// ===================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===================================
// Project Card Hover Effects
// ===================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// Featured Projects Horizontal Scroll
// ===================================

const projectsGrid = document.getElementById('projectsGrid');
const projectsScrollPrev = document.getElementById('projectsScrollPrev');
const projectsScrollNext = document.getElementById('projectsScrollNext');

if (projectsGrid && projectsScrollPrev && projectsScrollNext) {
    projectsScrollPrev.addEventListener('click', () => {
        const firstCard = projectsGrid.querySelector('.project-card');
        const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 380;
        const gap = 32;

        projectsGrid.scrollBy({
            left: -(cardWidth + gap),
            behavior: 'smooth'
        });
    });

    projectsScrollNext.addEventListener('click', () => {
        const firstCard = projectsGrid.querySelector('.project-card');
        const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 380;
        const gap = 32;

        projectsGrid.scrollBy({
            left: cardWidth + gap,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Add scroll animation to elements
// ===================================

const scrollAnimateElements = document.querySelectorAll(
    '.about-text, .contact-info, .skills-list li'
);

const scrollAnimateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            scrollAnimateObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

scrollAnimateElements.forEach(element => {
    element.style.opacity = '0';
    scrollAnimateObserver.observe(element);
});

// ===================================
// Dark/Light Mode Toggle (Optional)
// ===================================

function initThemeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDark.matches) {
        document.documentElement.style.colorScheme = 'dark';
    }

    prefersDark.addEventListener('change', (e) => {
        document.documentElement.style.colorScheme = e.matches ? 'dark' : 'light';
    });
}

initThemeToggle();

// ===================================
// Add animation keyframes dynamically
// ===================================

function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }

        .nav-link.active {
            color: #6366f1;
        }

        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
}

addDynamicStyles();

// ===================================
// Loader/Spinner Animation
// ===================================

window.addEventListener('load', () => {
    // Remove loading state if you have one
    document.body.classList.add('loaded');
});

// ===================================
// Accessibility Enhancements
// ===================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Focus visible for better accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
    }
});

document.addEventListener('mousedown', (e) => {
    document.body.classList.remove('using-keyboard');
});

// ===================================
// Performance: Lazy Loading
// ===================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Initialize on DOM Ready
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    updateActiveNavLink();
});
