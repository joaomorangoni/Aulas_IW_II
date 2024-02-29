const resultado = document.getElementById('resultado')
const numero1 = document.getElementById('num1')
const numero2 = document.getElementById('num2')

function ad(){
    num1 = Number(numero1.value)
    num2 = Number(numero2.value)
    var soma = num1 + num2    
    resultado.innerHTML = soma
}

function sub(){
    num1 = Number(numero1.value)
    num2 = Number(numero2.value)
    var sub = num1 - num2    
    resultado.innerHTML = sub
}

function mult(){
    num1 = Number(numero1.value)
    num2 = Number(numero2.value)
    var mult = num1 * num2    
    resultado.innerHTML = mult
}

function divi(){
    num1 = Number(numero1.value)
    num2 = Number(numero2.value)
    var divi = num1 / num2    
    resultado.innerHTML = divi
}

function limpar(){
    numero1.value = 0
    numero2.value = 0
    resultado.innerHTML = 0

}

