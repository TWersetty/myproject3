let swiper; 
function initSwiper() {
  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth < 768) {
    if (!swiper || swiper.destroyed) {
      swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 'auto', 
        spaceBetween: 32, 
        loop: false, 
        centeredSlides: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    if (swiper && !swiper.destroyed) {
      swiper.destroy(true, true); 
    }
  }
}
initSwiper();
window.addEventListener('resize', initSwiper);