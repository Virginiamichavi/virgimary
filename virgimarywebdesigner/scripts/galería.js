let indexSlide = 0;
  const track = document.getElementById('sliderTrack');
  const slides = track.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');
  const totalSlides = slides.length;

  function actualizarSlider() {
    // Transformación deslizante
    const ancho = track.clientWidth;
    track.style.transform = `translateX(-${indexSlide * ancho}px)`;

    // Actualizar clases de visibilidad
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === indexSlide);
    });

    // Actualizar puntitos
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === indexSlide);
    });
  }

  function moverSlider(direccion) {
    indexSlide = (indexSlide + direccion + totalSlides) % totalSlides;
    actualizarSlider();
  }

  function irASlide(num) {
    indexSlide = num;
    actualizarSlider();
  }

  setInterval(() => moverSlider(1), 5000);
  window.addEventListener('resize', () => actualizarSlider());