function cambiarIdioma(idioma) {
  document.querySelectorAll("[data-es]").forEach(el => {
    el.innerText = el.dataset[idioma];
  });

  localStorage.setItem("idioma", idioma);
}

const idiomaGuardado = localStorage.getItem("idioma");
if (idiomaGuardado) {
  cambiarIdioma(idiomaGuardado);
}