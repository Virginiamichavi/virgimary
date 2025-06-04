
document.querySelectorAll('.btn-servicio').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.servicio-card');
        card.classList.toggle('active');
        btn.textContent = card.classList.contains('active') ? 'Cerrar' : 'Ver más';
      });
    });