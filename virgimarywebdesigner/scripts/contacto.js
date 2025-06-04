 const form = document.getElementById('formContacto');
    const mensaje = document.getElementById('mensajeExito');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      mensaje.style.display = 'block';
      setTimeout(() => mensaje.style.display = 'none', 4000);
      form.reset();
    });