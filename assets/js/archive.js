const archive = new Swiper('.swiper-archive', {
    loop: false,
    spaceBetween: 24,
    pagination: {
        el: '.archive-pagination',
        clickable: 'true',
    },
    breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1300: {
            spaceBetween: 25,
            slidesPerView: 3,
        },
  }
  
  });