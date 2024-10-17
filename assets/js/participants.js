const participants = new Swiper('.swiper-participants', {
    loop: false,
      pagination: {
        el: '.participants-pagination',
        clickable: 'true',
    },
      breakpoints: {
        0: {
          slidesPerView: 1, 
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2, 
          spaceBetween: 16,
        },
        992: {
          slidesPerView: 3, 
          spaceBetween: 16,
        },
        1300: {
            slidesPerView: 3, 
            spaceBetween: 25,
        },
  }
  });