
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
