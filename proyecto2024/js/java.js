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
        currentSlide = producto.length - 1;
    } else if (currentSlide >= producto.length) {
        currentSlide = 0;
    }
    updateSlide();
}

updateSlide();

let carrito = [];

function agregarAlcarrito (producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function eliminarDelCarrito (index) {
    carrito.splice (index, 1);
    actualizarCarrito();
}

function actualizarCarrito () {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;
        const item = document.createElement('div');
        item.classList.add('carrito-item');
        item.innerHTML =`
            <p>${producto.nombre} - $${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoElement.appendChild(item);
});

    const totalElement = document.getElementById('total');
    totalElement.innerText = `Total: $${total}`;

}

    function vaciarCarrito() {
        carrito = [];
        actualizarCarrito();
    }

    let producto = [
        {
            id: 1,
            nombre:"Humor Libertad",
            descripcion:"Fragancia unisex",
            precio:"$35000",
            imagen:"multimedia/humorlibertad.jpg",
        },

        {
            id: 2,
            nombre:"Humor Transforma",
            descripcion:"Fragancia unisex",
            precio:"$35000",
            imagen:"multimedia/humortransforma.jpg",
        },

        {
            id: 3,
            nombre:"Kit de algodon",
            descripcion:"Body splash + crema hidratante corporal",
            precio:"$17000",
            imagen:"multimedia/kit algodon.jpg",
        },

        {
            id: 4,
            nombre:"Kit de maracuja",
            descripcion:"Nectar corporal + crema para manos + jabón",
            precio:"$19000",
            imagen:"multimedia/kit maracuyja.jpg",
        },

        {
            id: 5,
            nombre:"Body Splash",
            descripcion:"Fragancia avellana y casis",
            precio:"$15000",
            imagen:"multimedia/splash avellana y casis.jpg",
        },

        {
            id: 6,
            nombre:"Serum Chronos",
            descripcion:"Reductor de bolsas y ojeras",
            precio:"$23000",
            imagen:"multimedia/crema chronos.jpg",
        },

        {
            id: 7,
            nombre:"Kit de castaña",
            descripcion:"Mini frescor + crema para manos + jabón liquido corporal",
            precio:"$25000",
            imagen:"multimedia/Castaña.jpg",
        },

        {
            id: 8,
            nombre:"Labial Faces cremoso",
            descripcion:"Tono Rojo",
            precio:"$6000",
            imagen:"multimedia/labial rojo.jpg",
        },

        {
            id: 9,
            nombre:"Rimel Faces",
            descripcion:"A prueba de agua",
            precio:"$11000",
            imagen:"multimedia/rimel (1).jpg",
        },

        {
            id: 10,
            nombre:"Beijo de humor",
            descripcion:"Fragancia femenina",
            precio:"$37000",
            imagen:"multimedia/Beijo.jpg",
        },

        {
            id: 11,
            nombre:"Kaiak urbe",
            descripcion:"Fragancia masculina",
            precio:"$37000",
            imagen:"multimedia/Urbe.jpg",
        },

        {
            id: 12,
            nombre:"Conexao de humor",
            descripcion:"Fragancia masculina",
            precio:"$35000",
            imagen:"multimedia/Conexao.jpg" ,
        },

        {
            id: 13,
            nombre:"Humor Estelar",
            descripcion:"Fragancia masculina",
            precio:"$35000",
            imagen:"multimedia/Estelar.jpg",
        },

        {
            id: 14,
            nombre:"Festival de humor",
            descripcion:"Fragancia femenina",
            precio:"$35.000",
            imagen:"multimedia/Festival.jpg",
        },

        {
            id: 15,
            nombre:"Humor Galaxia",
            descripcion:"Fragancia femenina",
            precio:"$35.000",
            imagen:"multimedia/Galaxia.jpg",
        },

    ];

    app.get('/producto',(req,res)=> {
        res.json(productos);
    });

    app.listen(port, () => {
        console.log(`servidor corriendo en http://localhost:${port}`);
    });

    function guardarCarrito() {
        localStorage.setItem('carrito', JSON,stringify(carrito));
    }

    function cargarCarrito() {
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
            carrito = JSON.parse(carritoGuardado);
            actualizarCarrito();
        }
    }

    window.onload = cargarCarrito;

    fetch('https://api.example.com/productos')
    .then(response => response.json())
    .then(data => {
        const productoElement = document.getElementById('productos');
        data.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto');
            productoElement.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <span>$${producto.precio}</span>
                <button onclick="agregarAlCarrito(${JSON.stringify(producto)})">Agregar al carrito</button>
            `;
            productoElement.appendChild(productoElement);
        })
})

.catch(error => console.error('Error al cargar los productos:', error));

