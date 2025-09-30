const productos = [
  { id: 1, nombre: "Sombrero de Paja Toquilla", precio: 25, img: "https://images.unsplash.com/photo-1617196034794-8d5b2c951f3b" },
  { id: 2, nombre: "Collar Artesanal", precio: 15, img: "https://images.unsplash.com/photo-1587049352847-0d7e33539e88" },
  { id: 3, nombre: "Bolso Tejido", precio: 35, img: "https://images.unsplash.com/photo-1602810318383-e71dc0d6a5d5" },
  { id: 4, nombre: "Cerámica Decorativa", precio: 40, img: "https://images.unsplash.com/photo-1617191519605-fc0f7e3b6a27" }
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos");
  if (contenedor) {
    productos.forEach(prod => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}" width="200">
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
        <button>Comprar</button>
      `;
      contenedor.appendChild(div);
    });
  }
});

