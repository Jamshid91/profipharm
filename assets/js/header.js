const project_btn = document.querySelector('.projects-btn'),
      menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      menu_box = document.querySelector('.menu-box'),
      projects = document.querySelector('.projects'),
      backToMenu = document.querySelector('.projects .menu-title span'),
      projectsShow = document.querySelector('.projects-show_btn'),
      menu_close = document.querySelector('.menu-close'),
      body = document.querySelector('body');



project_btn.addEventListener('click', () => {
    project_btn.classList.toggle('clickPr-btn');
    menu.classList.toggle('d-none');
    body.classList.toggle('bodyStopScroll');
});

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('clickBtn');
    menu.classList.toggle('d-none');
    body.classList.toggle('bodyStopScroll');
    menu_box.classList.remove('d-none');
    projects.classList.add('d-none');
});

projectsShow.addEventListener('click', () => {
    menu_box.classList.add('d-none');
    projects.classList.remove('d-none');
});

backToMenu.addEventListener('click', () => {
    menu_box.classList.remove('d-none');
    projects.classList.add('d-none');
});

menu_close.addEventListener('click', () => {
    project_btn.classList.remove('clickPr-btn');
    menu.classList.add('d-none');
    menuBtn.classList.remove('clickBtn');
    body.classList.remove('bodyStopScroll');
});

document.addEventListener('click', (e) => {
    if(e.target == menu) {
        project_btn.classList.remove('clickPr-btn');
        menu.classList.add('d-none');
        menuBtn.classList.remove('clickBtn');
        body.classList.remove('bodyStopScroll');
    }
});