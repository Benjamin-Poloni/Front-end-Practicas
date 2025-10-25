import { cards } from "./eventCardArray.js";

document.addEventListener('DOMContentLoaded', () => {
  cardGenerator();
});


export function cardGenerator() {
  const container = document.getElementById('cardSpace');

  // limpiar el contenedor
  container.innerHTML = '';
  // se limpia el contenedor cada vez que se ejecuta la funcion porque sino se mostrarian cards repetidas
 
  if (cards.length === 0) {
    container.innerHTML = '<p>No hay eventos aún</p>';
    return;
  }

  // generador dinámico de las cards
  cards.forEach(card => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <h3>${card.nombre}</h3>
      <img src="./src/fotoVacia.jpg" alt="la foto esta rota">
      <p><strong>Lugar:</strong> ${card.place}</p>
      <p><strong>Fecha:</strong> ${card.fecha}</p>
      <button class="btn-delete">Eliminar</button>
    `;
    container.appendChild(el);
  });
}











