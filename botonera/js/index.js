
let container = document.getElementById("container");
const CUADRADOS = 500;
const arrayColores = ["#e74c3c" , "8e44ad" , "#3498db" , "#e67e22" , "#2ecc71"]


for(let i = 0; i < CUADRADOS; i++ ){

    const cuadrado = document.createElement("div");
    cuadrado.classList.add("cuadrado")
    cuadrado.addEventListener("mouseover", () => ponerColor(cuadrado));
    cuadrado.addEventListener("mouseout" , () => sacarColor(cuadrado));
    container.appendChild(cuadrado);
}

function ponerColor(e) {
    const color = colorRandom();
    e.style.background = color;
    e.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`;
}
function sacarColor(e) {
    e.style.background = "#1d1d1d";
    e.style.boxShadow = "0 0 2px #000";
}
function colorRandom() {
    return arrayColores[Math.floor(Math.random() * arrayColores.length)]
}


