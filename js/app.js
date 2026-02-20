export default class Remera {
    constructor(nombre, precio, imagen, stockPorTalle) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.stockPorTalle = stockPorTalle;
    }

    render() {
        let opciones = "";

        for (let talle in this.stockPorTalle) {
            opciones += `<option value="${talle}">
                ${talle} (${this.stockPorTalle[talle]} disponibles)
            </option>`;
        }

        return `
            <div class="card">
                <img src="${this.imagen}" alt="${this.nombre}">
                <h2>${this.nombre}</h2>
                <p>$${this.precio}</p>

                <select class="talle-select">
                    ${opciones}
                </select>

                <button>Comprar</button>
            </div>
        `;
    }
}
