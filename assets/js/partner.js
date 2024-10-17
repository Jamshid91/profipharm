const partner = new Swiper('.swiper-partner', {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: '.partner-next',
        prevEl: '.partner-prev',
      },
      pagination: {
        el: '.partner-pagination',
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
        800: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1300: {
            spaceBetween: 25,
            slidesPerView: 4,
        },
  }
  });