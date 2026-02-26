export const initLike = () => {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-card__likes-btn');
    if (!btn) return;

    e.stopPropagation();

    const card = btn.closest('.product-card');
    if (!card) return;

    const counter = card.querySelector('.product-card__likes-count');
    if (!counter) return;

    let count = Number(counter.textContent);
    const isActive = btn.classList.toggle('product-card__likes-btn--active');

    counter.textContent = isActive ? count + 1 : Math.max(0, count - 1);
  })
}