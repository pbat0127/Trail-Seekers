// Cambiar entre modo claro y oscuro
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleMode");
    const body = document.body;
    const sunIcon = '<i class="bi bi-sun-fill"></i>';
    const moonIcon = '<i class="bi bi-moon-fill"></i>';

    // Verificar el modo guardado en localStorage y configurar el ícono y el texto inicial
    if (localStorage.getItem("mode") === "dark") {
        body.classList.add("dark-mode");
        toggleButton.innerHTML = `${sunIcon}`;
    } else {
        body.classList.add("light-mode");
        toggleButton.innerHTML = `${moonIcon}`;
    }

    // Evento para alternar entre modos y actualizar el ícono
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // Actualizar el ícono y texto del botón
        if (body.classList.contains("dark-mode")) {
            toggleButton.innerHTML = `${sunIcon}`;
            localStorage.setItem("mode", "dark");
        } else {
            toggleButton.innerHTML = `${moonIcon}`;
            localStorage.setItem("mode", "light");
        }
    });
});

// Modal para la política de privacidad
document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("closeModalBtn");
  
    // Función para abrir el modal
    openModalBtn.onclick = function() {
      modal.style.display = "flex"; // Mostrar el modal
    };
  
    // Función para cerrar el modal
    closeModalBtn.onclick = function() {
      modal.style.display = "none"; // Ocultar el modal
    };
  
    // Cerrar el modal al hacer clic fuera del contenido
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
});
  
// Video reproducido automáticamente 
const videoIframe = document.getElementById('videoIframe');
    
document.getElementById('carouselExampleFade').addEventListener('slide.bs.carousel', function (event) {
    if (event.relatedTarget.classList.contains('active')) {
        // Reproduce el video cuando el slide se activa
        videoIframe.src += "?autoplay=1"; // Agrega autoplay a la URL
    } else {
        // Detiene el video cuando el slide se desactiva
        videoIframe.src = videoIframe.src.replace("?autoplay=1", ""); // Elimina autoplay
    }
});


