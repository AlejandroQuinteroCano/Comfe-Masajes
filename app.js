    let titulo = document.querySelector(' h1' );
    titulo.innerHTML = "Juego del numero secreto";

    let parrafo = document.querySelector("p");
    parrafo.innerHTML = ' Indica un numero del 1 al 10';

    let numeroSecreto = generarNumeroSecreto();

    console.log(NumeroSecreto);

    function verificarIntento(){
        alert("Clic desde el Boton")
        return;
    }
    function generarNumeroSecreto(){
        return Math.floor(Math.random()*10 +1);
    }

    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p','Indica un Numero del 1 al 10');

