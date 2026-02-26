export const initModifications = (card) => {
  const mods = card.querySelectorAll('.product-card__modification');

  mods.forEach(mod => {
    mod.addEventListener('click', (e) => {
      e.stopPropagation();

      mods.forEach(m =>
        m.classList.remove('product-card__modification--active')
      );

      mod.classList.add('product-card__modification--active');
    });
  })
}