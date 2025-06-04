// Animaciones personalizadas con JS puro

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const verMasBtn = document.getElementById("verMasBtn");
  const cerrarBtn = document.getElementById("cerrarBtn");
  const historiaContent = document.getElementById("historiaContent");
  const navToggler = document.querySelector(".navbar-toggler");
  const navMenu = document.getElementById("navMenu");

  // Aumentar tamaño del botón Ver Más si existe
  if (verMasBtn) {
    verMasBtn.style.fontSize = "1.25rem";
    verMasBtn.style.padding = "0.8rem 2rem";
  }

  // Efecto al hacer scroll en la navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      nav.classList.add("bg-dark", "shadow-lg");
    } else {
      nav.classList.remove("bg-dark", "shadow-lg");
    }
  });

  // Mostrar historia
  if (verMasBtn && historiaContent) {
    verMasBtn.addEventListener("click", () => {
      historiaContent.style.display = "block";
      verMasBtn.style.display = "none";
    });
  }

  // Ocultar historia
  if (cerrarBtn && historiaContent && verMasBtn) {
    cerrarBtn.addEventListener("click", () => {
      historiaContent.style.display = "none";
      verMasBtn.style.display = "inline-block";
    });
  }

  // Cerrar menú hamburguesa al hacer clic en un enlace
  const bsCollapse = new bootstrap.Collapse(navMenu, { toggle: false });
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btnVer = document.getElementById("btnNoticiasVer");
  const btnCerrar = document.getElementById("btnNoticiasCerrar");
  const contenido = document.getElementById("contenidoNoticias");

  if (btnVer && contenido) {
    btnVer.addEventListener("click", () => {
      contenido.style.display = "block";
      btnVer.style.display = "none";
    });
  }

  if (btnCerrar && btnVer) {
    btnCerrar.addEventListener("click", () => {
      contenido.style.display = "none";
      btnVer.style.display = "inline-block";
    });
  }
});

  

