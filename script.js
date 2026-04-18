// 1. Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animasi icon hamburger
    menuToggle.classList.toggle('active');
    // Simple bar animation
    const bars = document.querySelectorAll('.menu-toggle span');
    if (menuToggle.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Menutup menu saat link diklik (untuk mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.querySelectorAll('.menu-toggle span').forEach(bar => bar.style.transform = 'none');
        document.querySelectorAll('.menu-toggle span')[1].style.opacity = '1';
        menuToggle.classList.remove('active');
    });
});

// 2. Mouse Glow Effect (Desktop Only)
const cursorGlow = document.getElementById('cursor-glow');
if (window.innerWidth > 1024) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// 3. 3D Parallax Profil Effect (Desktop Only)
const heroImage = document.querySelector('.hero-visual');
const profileCard = document.querySelector('.profile-card');
const innerImg = document.getElementById('profile-img');

if (window.innerWidth > 1024) {
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        profileCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        
        // Sedikit pergerakan pada gambar dalam agar lebih realistis
        innerImg.style.transform = `scale(1.1) translateX(${xAxis/2}px) translateY(${yAxis/2}px)`;
    });
    
    // Reset saat mouse keluar dari area hero
    document.querySelector('.hero').addEventListener('mouseleave', () => {
        profileCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
        innerImg.style.transform = 'scale(1.1) translateX(0) translateY(0)';
        profileCard.style.transition = 'transform 0.5s ease';
        setTimeout(() => profileCard.style.transition = 'none', 500);
    });
}

// 4. Scroll Reveal Animations (Efek Muncul saat Scroll)
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: false // Jangan ulangi animasi saat scroll ke atas
});

sr.reveal('.reveal-left', { origin: 'left' });
sr.reveal('.reveal-right', { origin: 'right' });
sr.reveal('.reveal-item', { interval: 100, origin: 'bottom' }); // Muncul bergantian
sr.reveal('.reveal-bottom', { origin: 'bottom' });
sr.reveal('.section-title', { distance: '40px' });