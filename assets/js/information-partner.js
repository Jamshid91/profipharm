const information_partners = new Swiper('.swiper-information-partners', {
    loop: false,
      pagination: {
        el: '.partners-pagination',
        clickable: 'true',
    },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
          grid: {
            rows: 1,
            fill: 'row'
          },
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 16,
          grid: {
            rows: 1,
            fill: 'row'
          },
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 16,
          grid: {
            rows: 2,
            fill: 'row'
          },
        },
        1300: {
            slidesPerView: 4, 
            spaceBetween: 25,
            grid: {
              rows: 2,
              fill: 'row'
            },
        },
  }
  });