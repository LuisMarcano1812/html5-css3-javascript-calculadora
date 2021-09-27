// Desde aquí se controla la calculadora

class Display {

    // El método constructor se llama automáticamente cada vez que se crea un objeto dentro de él, lo uso para actualizar la variable valor anterior y valor actual cuando sea necesario
    constructor(displayValorAnterior, displayValorActual) {

        // La variable this hace referencia al objeto actual, cuyo método está siendo invocado. Lo uso para evitar conflictos de nombres. Para que aparezca el valor actual y el valor anterior
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;

        // Este es para el display
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;

        // Estos valores son distintos al display, son los valores que se van guardando
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    // Para poder agregar números a la calculadora. Recibe como parámetro un número 
    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
    // Que el valor actual (el número que se está agregando) sea igual al número que recibe. Luego cada vez que se toque un botón se pueda agregar ese valor
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}