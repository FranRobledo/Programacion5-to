let string = prompt('nombre')
let num = prompt('edad')

let lista = {
    string,
    num
}; 

localStorage.setItem("lista",lista)

var jamon = JSON.stringify(lista)

console.log(lista)

