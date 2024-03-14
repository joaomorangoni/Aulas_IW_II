const numero1 = document.getElementById('num1')
const numero2 = document.getElementById('num2')
var sexo = null
var result = document.getElementById('resultados')
var diag = document.getElementById('diagnostico')

function Homem(){
    sexo = true
    console.log(sexo)
}

function Mulher(){
    sexo = false
    console.log(sexo)
}

function Calculo(){
    num1 = Number(numero1.value)
    num2 = Number(numero2.value)
    var resul = num2 / (num1 * num1)
    console.log(resul)

    result.innerHTML = '- Seu IMC é de ' + resul

    if (sexo === true) {
        if (resul < 20) {
            diag.innerHTML = "- Você está abaixo do peso";
        } else if (resul >= 20 && resul < 24.9) {
            diag.innerHTML = "- Você está com peso normal";
        } else if (resul >= 25 && resul < 29.9) {
            diag.innerHTML = "- Você está com Obesidade leve";
        } else if (resul >= 30 && resul < 39.9) {
            diag.innerHTML = "- Você está com Obesidade moderada";
        } else if (resul > 39.9) {
            diag.innerHTML = "- Você está com Obesidade morbida";
        } 
    }

    if (sexo === false) {
        if (resul < 19) {
            diag.innerHTML = "- Você está abaixo do peso";
        } else if (resul >= 19 && resul < 23.9) {
            diag.innerHTML = "- Você está com peso normal";
        } else if (resul >= 24 && resul < 28.9) {
            diag.innerHTML = "- Você está com Obesidade leve";
        } else if (resul >= 29 && resul < 38.9) {
            diag.innerHTML = "- Você está com Obesidade moderada";
        } else if (resul >= 38.9) {
            diag.innerHTML = "- Você está com Obesidade morbida";
        }
    }
}

function reset(){
    window.location.reload();
}