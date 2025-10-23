import { cards } from "./eventCardArray.js";


export function cardGenerator() {
  const container = document.getElementById('cardSpace');

  // limpiar el contenedor
  container.innerHTML = '';

 
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
      <p><strong>Lugar:</strong> ${card.place}</p>
      <p><strong>Fecha:</strong> ${card.fecha}</p>
      <button class="btn-delete">Eliminar</button>
    `;
    container.appendChild(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  cardGenerator();
});









