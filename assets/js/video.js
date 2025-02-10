const video = document.querySelectorAll('.video')

video.forEach(play => {
    play.addEventListener('click', ()=> {
        play.classList.add('playVideo');
        play.children[0].play();
    });
})