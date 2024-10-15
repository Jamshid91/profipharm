const prof_parallax = document.querySelector('.prof-parallax');
const prof_objectImgs = document.querySelectorAll('.prof-parallax .object');

prof_parallax.addEventListener('mousemove', (e) => {
    prof_objectImgs.forEach(img => {
        let moving_value = img.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 200;
        let y = (e.clientY * moving_value) / 200;

        img.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"
    })
});