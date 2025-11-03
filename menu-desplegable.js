// Cambio de color al hacer scroll
window.addEventListener("scroll", function() {
  const menu = document.getElementById("menu");
  if (window.scrollY > 50) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
});

// Submenús desplegables
document.querySelectorAll(".alineacion-menu li > a").forEach(link => {
  link.addEventListener("click", function(e) {
    const parent = this.parentElement;
    if (parent.querySelector(".submenu")) {
      e.preventDefault();
      parent.classList.toggle("show-submenu");
    }
  });
});

// Menú hamburguesa
const hamburguesa = document.getElementById("hamburguesa");
const menuOpciones = document.getElementById("menu-opciones");
hamburguesa.addEventListener("click", () => {
  hamburguesa.classList.toggle("active");
  menuOpciones.classList.toggle("show");
});


   
    