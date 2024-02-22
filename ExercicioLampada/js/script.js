const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const rest = document.getElementById('restaurar')
var texto = document.getElementById('estado')

function Quebrada(){
    return lampada.src.indexOf('quebrada') > -1
    //isso retorna True ou False
}

function lampLigada(){
    if (!Quebrada()){
        lampada.src = "img/ligada.jpg"
        texto.innerHTML = 'LIGADA';
    }
}

function lampDesligada(){
    if (!Quebrada()){
        lampada.src = "img/desligada.jpg"
        texto.innerHTML = 'DESLIGADA';
    }
}

function lampQuebrar(){
    lampada.src = "img/quebrada.jpg"
    texto.innerHTML = 'QUEBRADA';
}

function lampRest(){
    lampada.src = "img/desligada.jpg"
    texto.innerHTML = 'DESLIGADA';
}

ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)

lampada.addEventListener('dblclick',lampQuebrar)
rest.addEventListener('click',lampRest)

lampada.addEventListener('mouseover',lampLigada)
lampada.addEventListener('mouseleave',lampDesligada)

