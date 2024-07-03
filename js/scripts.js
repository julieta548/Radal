let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
let diapositivaActual = 0;

// function mostrarDiapositiva(indice) {
//     const diapositivas = document.querySelectorAll('.carrusel-item');
//     const totalDiapositivas = diapositivas.length;
//     const diapositivasPorVista = 4;

//     if (indice >= 6) {
//         diapositivaActual = 0;
//     } else if (indice < 0) {
//         diapositivaActual = totalDiapositivas - 1;
//     } else {
//         diapositivaActual = indice;
//     }

//     const desplazamiento = -diapositivaActual * 100 / diapositivasPorVista;
//     document.querySelector('.carrusel-interior').style.transform = `translateX(${desplazamiento}%)`;
// }

// function diapositivaSiguiente() {
//     mostrarDiapositiva(diapositivaActual + 1);
// }

// function diapositivaAnterior() {
//     mostrarDiapositiva(diapositivaActual - 1);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     mostrarDiapositiva(diapositivaActual);
// });

function mostrarDiapositiva(indice) {
  const diapositivas = document.querySelectorAll(".carrusel-item");
  const totalDiapositivas = diapositivas.length;

  let diapositivasPorVista = 4; // Valor por defecto

  if (window.innerWidth <= 600) {
    diapositivasPorVista = 1; // Ajuste para pantallas pequeñas
    if (indice >= totalDiapositivas / diapositivasPorVista) {
      diapositivaActual = 0;
    } else if (indice < 0) {
      diapositivaActual =
        Math.ceil(totalDiapositivas / diapositivasPorVista) - 1;
    } else {
      diapositivaActual = indice;
    }
  } else {
    if (indice >= 6) {
      diapositivaActual = 0;
    } else if (indice < 0) {
      diapositivaActual = totalDiapositivas - 1;
    } else {
      diapositivaActual = indice;
    }
  }

  const desplazamiento = (-diapositivaActual * 100) / diapositivasPorVista;
  document.querySelector(
    ".carrusel-interior"
  ).style.transform = `translateX(${desplazamiento}%)`;
}

function diapositivaSiguiente() {
  mostrarDiapositiva(diapositivaActual + 1);
}

function diapositivaAnterior() {
  mostrarDiapositiva(diapositivaActual - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarDiapositiva(diapositivaActual);
});

window.addEventListener("resize", () => {
  mostrarDiapositiva(diapositivaActual);
});
