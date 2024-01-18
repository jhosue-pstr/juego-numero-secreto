let numeroAleatorio = 0;
let intentos = 0;
let numerosSorteados= [];
let numeroMaxino = 10;

function verificarIntento(){
    let numeroDeUsuarion = parseInt(document.getElementById("valorUsuario").value);
    if (numeroAleatorio === numeroDeUsuarion){
        asignarTextoElemento("p", `acertaste el numero en ${intentos} ${intentos == 1? "vez": "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (numeroDeUsuarion > numeroAleatorio){
            asignarTextoElemento("P","el numero es menor");
        } else {
            asignarTextoElemento("p","el numero es mayor");
        }
        intentos++;
         limpiarCaja();   
    }
    return;
}

//funciones
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "juedo del numero secreto");
    asignarTextoElemento("p", "Indica un numero del 1 al "+ numeroMaxino);
    numeroAleatorio = generarNumero();
    intentos = 1;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";

}

function asignarTextoElemento(elemento , texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumero(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaxino)+1;
    if(numerosSorteados.length == numeroMaxino){
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
    }else {
        if (numerosSorteados.includes(numeroGenerado)){
            return generarNumero();
        }else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }   
    }
}

condicionesIniciales();