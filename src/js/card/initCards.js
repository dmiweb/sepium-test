import { initCard } from './initCard';

export function initCards() {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(initCard);
}