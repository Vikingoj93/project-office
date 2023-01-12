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

const registroCompra = document.querySelector(".registro-compra");
const fechaRegistro = document.querySelector("#fecha-registro");
const pesoRegistro = document.querySelector("#peso-registro");
const precioRegistro = document.querySelector("#precio-registro");
const totalRegistro = document.querySelector("#total-registro");

const ListRegistro = [];

const intervaloDolares = setInterval(() => {
    if(pesoDolares.value != 0){
    let resultado = calculadora(pesoDolares.value, precioDolares.value);
    totalDolares.innerHTML = `${resultado.toFixed(1)}$`
}}, 1000);

const intervaloBolivares = setInterval(() => {
    if(pesoBolivares.value != 0){
    let resultado = calculadora(pesoBolivares.value, precioBolivares.value);
    totalBolivares.innerHTML = `${resultado.toFixed(0)}bs`
}}, 1000);

const intervaloRegistro = setInterval(() => {
    if(pesoCompra.value != 0){
    let total = totalPagado;
    let resultado = calculadora(pesoCompra.value, precioCompra.value);
    total.innerHTML = `${resultado.toFixed(2)}$`
}}, 1000);

function calculadora(peso, precio) {
    return peso * precio; 
}

function registrarCompra() {
    let fecha = `2/2/2`
    let peso = pesoCompra.value;
    let precio = precioCompra.value;
    let resultado = calculadora(pesoCompra.value, precioCompra.value);
    let total = resultado.toFixed(2);
    ListRegistro.push({fecha, peso, precio, total});
    if(peso > 0 && precio > 0){
        fechaRegistro.innerHTML += "01/01/2023<br>";
        pesoRegistro.innerHTML += `${peso}gr <br>`;
        precioRegistro.innerHTML += `${precio}$ <br>`;
        totalRegistro.innerHTML += `<strong>${total}$</strong><br>`;
    }
}

// Importamos Express desde la carpeta node_modules
const express = require('express');

// Creamos la aplicación de Express
const app = express();

// Escojemos un puerto por el que el servidor web escuchará
const port = 3000;

// Página para visualizar el mensaje "¡Hola Express!"
app.get('/', (req, res) => {
  res.send('¡Hola Express!');
});

// Activamos el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`¡Servidor listo!`);
});