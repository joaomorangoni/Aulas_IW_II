var altu = parseInt(document.getElementById('altura').value)
var peso = parseInt(document.getElementById('peso').value)

function myFunction(MyValue){
    document.getElementById("currentValue").innerHTML = MyValue;
    
}

function myFunction2(MyValue2){
    document.getElementById("currentValue2").innerHTML = MyValue2;
    
}

function sexo(Sexo){
    var sex = Sexo
}

function calculo(){
    var imc = altu * altu / peso
    console.log(imc)
}

