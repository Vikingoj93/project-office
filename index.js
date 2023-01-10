const pesoDolares = document.querySelector("#peso-gr-d");
const precioDolares = document.querySelector("#precio-d");
const pesoBolivares = document.querySelector("#peso-gr-b");
const precioBolivares = document.querySelector("#precio-b");
const totalDolares = document.querySelector("#total-d")
const totalBolivares = document.querySelector("#total-b")

function calculadora(peso, precio) {
    return peso * precio; 
}

let intervaloDolares = setInterval(() => {
    if(pesoDolares.value != 0){
    let resultado = calculadora(pesoDolares.value, precioDolares.value);
    console.log(resultado);
    totalDolares.innerHTML = `${resultado.toFixed(1)}$`
}}, 1000);

let intervaloBolivares = setInterval(() => {
    if(pesoBolivares.value != 0){
    let resultado = calculadora(pesoBolivares.value, precioBolivares.value);
    console.log(resultado);
    totalBolivares.innerHTML = `${resultado.toFixed(0)}bs`
}}, 1000);










