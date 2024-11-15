let currentSlide = 0;
const productos = document.querySelectorAll('.producto');
const productoActual = document.querySelector('.producto-actual');

function updateSlide() {
    const product = productos[currentSlide];
    const img = product.querySelector('img').src;
    const title = product.querySelector('h3').textContent;
    const desc = product.querySelector('p').textContent;
    const price = product.querySelector('span').textContent;

    productoActual.innerHTML = `
        <img src="${img}" alt="${title}">
        <h3>${title}</h3>
        <p>${desc}</p>
        <span>${price}</span>
    `;
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = productos.length - 1;
    } else if (currentSlide >= productos.length) {
        currentSlide = 0;
    }
    updateSlide();
}

updateSlide();
