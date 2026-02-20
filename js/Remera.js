import Remera from "./Remera.js";

const contenedor = document.getElementById("contenedor");

const remeras = [
    new Remera("Urban Violeta", 15000, "img/remera1.jpg", {
        S: 5,
        M: 3,
        L: 2,
        XL: 0
    }),
    new Remera("Minimal White", 14000, "img/remera2.jpg", {
        S: 4,
        M: 6,
        L: 1,
        XL: 2
    }),
    new Remera("Grey Classic", 16000, "img/remera3.jpg", {
        S: 2,
        M: 0,
        L: 3,
        XL: 1
    })
];

remeras.forEach(remera => {
    contenedor.innerHTML += remera.render();
});
