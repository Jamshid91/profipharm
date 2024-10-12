

  function myFunction(x) {
    if (x.matches) { // If media query matches
      const photos = new Swiper('.swiper-block4', {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 16,
        pagination: {
            el: '.block4-pagination',
            clickable: 'true',
        },
      });
    } 
  }
  
  var x = window.matchMedia("(max-width: 576px)")
  myFunction(x);
  
  x.addEventListener("change", function() {
    myFunction(x);
  });