
let index = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(i) {
  slides.forEach(s => s.classList.remove("ativo"));
  slides[i].classList.add("ativo");
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
});


document.getElementById("form-contato").addEventListener("submit", e => {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !msg) {
    alert("Por favor, preencha todos os campos!");
  } else {
    alert("Mensagem enviada com sucesso! 🐾");
    e.target.reset();
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;
  const totalSlides = slides.length;
  const intervalTime = 5000; 
  let slideInterval;


  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }

  function nextSlide() {
    let newIndex = (currentIndex + 1) % totalSlides;
    showSlide(newIndex);
  }

  function prevSlide() {
    let newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(newIndex);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoSlide();
      showSlide(index);
      startAutoSlide();
    });
  });

  showSlide(currentIndex);
  startAutoSlide();
});
