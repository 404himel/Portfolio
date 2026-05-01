const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const cursorGlow = document.getElementById('cursorGlow');
const navLinks = document.querySelectorAll('.nav a');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navLinks.forEach((item) => item.classList.remove('active-link'));
        link.classList.add('active-link');
    });
});

window.addEventListener('mousemove', (event) => {
    if (!cursorGlow) return;
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.14 });

revealItems.forEach((item) => observer.observe(item));

const sections = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
                link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, { threshold: 0.35 });

sections.forEach((section) => sectionObserver.observe(section));
