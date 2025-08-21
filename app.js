let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSecreto = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`,`Acertaste el numero en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled"); //elimina el atributo de disabled del boton nuevo juego al ganar la partida
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero secreto es menor");
        } else {
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value = " ";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSecreto)
    //Si ya sorteamos todos los numeros

    if (listaNumeroSecreto.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumeroSecreto.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSecreto.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento(`p`, `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de inicio de numeros
    //Generar el numero aleatorio
    condicionesIniciales();
    //Desactivar boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
    //inicializar el numero de intentos
}

condicionesIniciales();
