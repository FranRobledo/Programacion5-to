
let j = 0;
let i = true
var y = []
var sum = 0;
let f = 0;

while (i == true){
    var numero = parseInt(prompt("ingrese un numero: "))
    j++;    
    y = numero + y;
    while (numero < 0){
        array.forEach(y, function(numeros) {
            sum += numeros;
            alert( `la suma de los numeros es : ${sum}`);
            alert(`la dedia de los numeros es : ${sum / j}`);
            i = false;
        }); 
    };
};