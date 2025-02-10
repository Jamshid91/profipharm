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
    menu_close.classList.remove('d-none');
});

projectsShow.addEventListener('click', () => {
    menu_box.classList.add('d-none');
    projects.classList.remove('d-none');
    menu_close.classList.add('d-none');
});

backToMenu.addEventListener('click', () => {
    menu_box.classList.remove('d-none');
    projects.classList.add('d-none');
    menu_close.classList.remove('d-none');
});

menu_close.addEventListener('click', () => {
    project_btn.classList.remove('clickPr-btn');
    menu.classList.add('d-none');
    menuBtn.classList.remove('clickBtn');
    menu_close.classList.remove('d-none');
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

const profile_btn = document.querySelectorAll('.profile_btn');

profile_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('showProfile');
        btn.parentElement.parentElement.classList.toggle('showProfile');
    })
});

document.addEventListener('click', (e) => {
    profile_btn.forEach(btn => {
        btn.parentElement.contains(e.target) || btn.parentElement.classList.remove('showProfile');
        btn.parentElement.parentElement.contains(e.target) || btn.parentElement.parentElement.classList.remove('showProfile');
    });
})