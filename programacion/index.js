
var inicio = true;

while (inicio == true){
    inicio = false;
    var num1 = parseInt(prompt("Ingrese el primer numero: "));
    var num2 = parseInt(prompt("Ingrese el segundo numero: "));
    if (num1 <= 0 || num2 <= 0 || isNaN(num1) == true || isNaN(num2) == true){
        inicio = true;
    }
};

function identificacion (numeros){
    if (num1 > num2){
        alert(`el primer numero que ingreso es mayor: ${num1}`)
    } if (num1 < num2){
        alert(`el segundo numero que ingreso es mayor: ${num2}`)
    } else {
        alert(`los dos numero son iguales`)
    }
};

identificacion();

