document.addEventListener("DOMContentLoaded", function () {
  // === Menu hamburguer ===
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // === Carrossel automático com tempo configurável ===
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const totalSlides = images.length;

  let currentIndex = 0;

  // Altere aqui o tempo em milissegundos (por exemplo: 5000 = 5 segundos)
  const displayTime = 5000;

  function showSlide(index) {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  // Ajusta a largura da div slides dinamicamente
  slides.style.width = `${100 * totalSlides}%`;

  // Inicia o carrossel
  showSlide(currentIndex);
  setInterval(nextSlide, displayTime);
});
