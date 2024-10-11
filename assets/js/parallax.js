const parallax = document.querySelector('.parallax');
const objectImgs = document.querySelectorAll('img.object');

parallax.addEventListener('mousemove', (e) => {
    objectImgs.forEach(img => {
        let moving_value = img.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 250;
        let y = (e.clientY * moving_value) / 250;

        img.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"
    })
})