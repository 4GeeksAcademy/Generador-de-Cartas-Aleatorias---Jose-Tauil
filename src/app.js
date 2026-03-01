const numero = document.getElementById("contenidoCarta");
const arriba = document.querySelector(".arriba");
const abajo = document.querySelector(".abajo");

const valores = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const palos = [
    { simbolo: "♥", color: "#b00020" },
    { simbolo: "♦", color: "#b00020" },
    { simbolo: "♠", color: "#111111" },
    { simbolo: "♣", color: "#111111" },
];

function generarCarta() {
    const valor = valores[Math.floor(Math.random() * valores.length)];
    const palo = palos[Math.floor(Math.random() * palos.length)];

    numero.textContent = valor;
    arriba.textContent = palo.simbolo;
    abajo.textContent = palo.simbolo;

    numero.style.color = palo.color;
    arriba.style.color = palo.color;
    abajo.style.color = palo.color;
}

generarCarta();