const ligar = document.getElementById('ligar')
const lampada = document.getElementById('lamp')
const rest = document.getElementById('restaurar')
var texto = document.getElementById('estado')
var ligado = false

function Quebrada(){
    return lampada.src.indexOf('quebrada') > -1
    //isso retorna True ou False
}

function lampLigada(){
    if (!Quebrada()){
        if (!ligado){
            lampada.src = "img/ligada.jpg"
            ligado = true
            texto.innerHTML = 'LIGADA';
        }
        else if (ligado){
            lampada.src = "img/desligada.jpg"
            ligado = false
            texto.innerHTML = 'DESLIGADA';
        }
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

lampada.addEventListener('dblclick',lampQuebrar)
rest.addEventListener('click',lampRest)

lampada.addEventListener('mouseover',lampLigada)
lampada.addEventListener('mouseleave',lampDesligada)

