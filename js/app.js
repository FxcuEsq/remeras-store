class Remera {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    render() {
        return `
            <div class="card">
                <img src="${this.imagen}" alt="${this.nombre}">
                <h2>${this.nombre}</h2>
                <p>$${this.precio}</p>
            </div>
        `;
    }
}

const contenedor = document.getElementById("contenedor");

const remeras = [
    new Remera("Oversize", 20000, "img/berserk_front.jpeg"),
    new Remera("Oversize", 20000, "img/berserk_back.jpeg"),
    new Remera("Oversize", 20000, "img/one_piece_front.jpeg"),
    new Remera("Oversize", 20000, "img/one_piece_back.jpeg"),
    new Remera("Oversize", 20000, "img/toji_front.jpeg"),
    new Remera("Oversize", 20000, "img/toji_back.jpeg"),
    new Remera("Remera Clasica Mujer", 15000, "img/butterfly.jpeg"),
    new Remera("Boxy Fit", 18000, "img/fentanxl.jpeg"),
    new Remera("Musculosa Mujer", 10000, "img/gojo_eye.jpeg"),
    new Remera("Musculosa Mujer", 10000, "img/heart_red.jpeg")
];


remeras.forEach(remera => {
    contenedor.innerHTML += remera.render();


const form = document.getElementById("formIdeas");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    mensaje.innerHTML = "Gracias por tu aporte <3.";

    form.reset();
});

});
