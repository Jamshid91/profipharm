const review = new Swiper('.swiper-review', {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: '.review-next',
        prevEl: '.review-prev',
      },
      pagination: {
        el: '.review-pagination',
        clickable: 'true',
    },
  
  });