// ScrollReveal Animations
const sr = ScrollReveal({
    distance: '35px',
    duration: 1000,
    reset: true
});



sr.reveal('.home h1', { delay: 60, origin: 'top' });
sr.reveal('.home h6', { delay: 60, origin: 'top' });
sr.reveal('.home-text a', { delay: 100, origin: 'left' });
sr.reveal('.center-text h2', { delay: 45, origin: 'top' });
sr.reveal('.newsletter-text h2', { delay: 45, origin: 'top' });
sr.reveal('.newsletter-text p', { delay: 50, origin: 'right' });


// Obtener elementos del DOM
const userIcon = document.getElementById('user-icon');
const userDropdown = document.getElementById('user-dropdown');

// Manejar el clic en el ícono de usuario
userIcon.addEventListener('click', function (event) {
    // Prevenir que el clic en el enlace navegue
    event.preventDefault();
    
    // Alternar la clase 'active' en el menú desplegable
    userDropdown.classList.toggle('active');
});

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function (event) {
    if (!userIcon.contains(event.target) && !userDropdown.contains(event.target)) {
        userDropdown.classList.remove('active');
    }
});