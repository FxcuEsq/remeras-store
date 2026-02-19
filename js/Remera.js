export default class Remera {
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
