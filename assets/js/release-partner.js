const release_partners = new Swiper('.swiper-release-partners', {
    loop: false,
      pagination: {
        el: '.release-partners-pagination',
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
        992: {
          slidesPerView: 1, 
          spaceBetween: 16,
          grid: {
            rows: 3,
            fill: 'row'
          },
        },
        1300: {
            slidesPerView: 1, 
            spaceBetween: 25,
            grid: {
              rows: 3,
              fill: 'row'
            },
        },
  }
  });