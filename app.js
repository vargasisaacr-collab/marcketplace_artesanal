const productos = [
  { id: 1, nombre: "Sombrero de Paja Toquilla", precio: 25, img: "img/sombrero.jpg" },
  { id: 2, nombre: "Collar Artesanal", precio: 15, img: "img/collar.jpg" },
  { id: 3, nombre: "Bolso Tejido", precio: 35, img: "img/bolso.jpg" },
  { id: 4, nombre: "Cerámica Decorativa", precio: 40, img: "img/ceramica.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos");
  if (contenedor) {
    productos.forEach(prod => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
        <button>Comprar</button>
      `;
      contenedor.appendChild(div);
    });
  }
});
