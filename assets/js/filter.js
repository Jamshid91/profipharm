const filterBtn = document.querySelector('.categories-btn'),
      filter = document.querySelector('.filter-menu'),
      filter_close = document.querySelector('.filter-close');



filterBtn.addEventListener('click', () => {
    filter.classList.remove('d-none');
    body.classList.add('bodyStopScroll');
    scrollTo(0, 0)
});


filter_close.addEventListener('click', () => {
    filter.classList.add('d-none');
    body.classList.remove('bodyStopScroll');
});

document.addEventListener('click', (e) => {
    if(e.target == filter) {
        filter.classList.add('d-none');
        body.classList.remove('bodyStopScroll');
    }
});