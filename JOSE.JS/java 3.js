function toggleMenu() {
  const menu = document.getElementById("menu");
  const contenido = document.querySelector(".contenido");

  menu.classList.toggle("activo");
  contenido.classList.toggle("mover");
}