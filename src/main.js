import { initCards } from './js/card/initCards';
import { initLike } from './js/card/like';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-card__slider')
    .forEach(slider => {

      new Swiper(slider, {
        loop: true,
        slidesPerView: 1,

        pagination: {
          el: slider.parentElement.querySelector('.swiper-pagination'),
          clickable: true,
        },

        navigation: {
          nextEl: slider.querySelector('.swiper-button-next'),
          prevEl: slider.querySelector('.swiper-button-prev'),
        },

        autoplay: window.innerWidth <= 768
          ? {
            delay: 3000,
            disableOnInteraction: false,
          }
          : false,
      });

    });

  Fancybox.bind('[data-fancybox]', {
    Thumbs: false,
  });

  document.querySelectorAll('.product-card__zoom-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      Fancybox.show([
        { src: './src/assets/images/img1.webp' },
        { src: './src/assets/images/img2.webp' },
        { src: './src/assets/images/img3.webp' },
        { src: './src/assets/images/img4.webp' },
        { src: './src/assets/images/img5.webp' },
        { src: './src/assets/images/img6.webp' },
      ])
    })
  })

  initLike();
  initCards();
});