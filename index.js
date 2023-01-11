const pesoDolares = document.querySelector("#peso-gr-d");
const precioDolares = document.querySelector("#precio-d");
const pesoBolivares = document.querySelector("#peso-gr-b");
const precioBolivares = document.querySelector("#precio-b");

const totalDolares = document.querySelector("#total-d");
const totalBolivares = document.querySelector("#total-b");

const pesoCompra = document.querySelector("#peso-compra");
const precioCompra = document.querySelector("#precio-compra");
const totalPagado = document.querySelector("#total-pagado");
const buttonCompra = document.querySelector("#button-compra");
buttonCompra.addEventListener("click", registrarCompra);

const intervaloDolares = setInterval(() => {
    if(pesoDolares.value != 0){
    let resultado = calculadora(pesoDolares.value, precioDolares.value);
    console.log(resultado);
    totalDolares.innerHTML = `${resultado.toFixed(1)}$`
}}, 1000);

const intervaloBolivares = setInterval(() => {
    if(pesoBolivares.value != 0){
    let resultado = calculadora(pesoBolivares.value, precioBolivares.value);
    console.log(resultado);
    totalBolivares.innerHTML = `${resultado.toFixed(0)}bs`
}}, 1000);

function calculadora(peso, precio) {
    return peso * precio; 
}

function registrarCompra() {
    let peso = pesoCompra.value;
    let precio = precioCompra.value;
    let total = totalPagado;

    if(true){
        total.innerHTML = `${()=>{return peso * precio}}$`
    }
}









