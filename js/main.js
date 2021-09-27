// Aquí están todos los nodos para añadirle la interactividad a la página

const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
// Para poder seleccionar todos los números
const botonesNumeros = document.querySelectorAll('.numero');
// Para poder seleccionar todos los operadores
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

// Esto es para que aparezcan los números en la calculadora cuando se vayan digitando. El forEach ejecuta la función callback 
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});