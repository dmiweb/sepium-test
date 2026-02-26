export const initCardLink = (card) => {
  card.addEventListener('click', (e) => {
    const interactive = e.target.closest('.product-card__interactive');

    if (interactive) return;

    window.open('/card', '_blank');
  });
}