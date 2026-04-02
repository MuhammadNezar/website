// ======================
// TOGGLE NAVBAR (MENU HP)
// ======================
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// ======================
// ANIMASI CARD SAAT SCROLL
// ======================
const cards = document.querySelectorAll('.card');

// set awal animasi
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.5s ease";
});

// animasi saat scroll
window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
