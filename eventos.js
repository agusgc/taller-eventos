const contenedor = document.querySelector("div");
const boton = document.querySelector("button");

contenedor.addEventListener("click", () => {
    alert("Hola! Soy el div");
  });

boton.addEventListener("click", (event) => {
    event.stopPropagation();
  });
