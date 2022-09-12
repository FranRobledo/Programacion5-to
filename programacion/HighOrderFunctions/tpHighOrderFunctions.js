// Grupo: Robledo y Fernandez

//   Feliz Primavera ! 

//   TP: Funciones de orden superior en JavaScript - 09/09/2022

//   Dado el siguiente array, resolver utilizando funciones de orden superior:

const setUps = [
    {processor: "i7 11700K", ram: "Fury 32GB", gpu: "RTX 3070 Ti", storage: 2, storageType: "SSD", monitor: 144, price: 2199},
    {processor: "ryzen 9 5900X", ram: "Fury 32GB", gpu: "Radeon RX 6500", storage: 4, storageType: "SSD", monitor: 144, price: 2499},
    {processor: "ryzen 7 5700G", ram: "HyperX 16GB", gpu: "Radeon RX 6500", storage: 2, storageType: "SSD", monitor: 60, price: 1599},
    {processor: "i5 10400F", ram: "HyperX 16GB", gpu: "RTX 2060", storage: 1, storageType: "SSD", monitor: 60, price: 1499},
    {processor: "i9 12900", ram: "Fury 8GB", gpu: "RTX 2060", storage: 4, storageType: "HDD", monitor: 60, price: 999},
    {processor: "ryzen 5 5600X", ram: "HyperX 8GB", gpu: "Radeon PRO W6400", storage: 4, storageType: "HDD", monitor: 60, price: 949}
];

// 1) Filtrar aquellos setUps que posean mas de 8GB de memoria RAM.

var filtrado = setUps.filter((setup) => setup.ram == "HyperX 8GB" || setup.ram == "Fury 8GB");
console.log( filtrado)

// 2) Aplicar el 15% de descuento en el precio del setUp correspondiente al "processor: ryzen 9 5900X" y mostrar el nuevo "price".

setUps.forEach((setup) => {
    if (setup.processor == "ryzen 9 5900X"){
        setup.price = setup.price - setup.price * (15/100)}
    }
)
console.log(setUps[1])

// 3) Ordenar de mayor a menor los setUps en funcion de su capacidad de almacenamiento o "storage".

var ordenado = setUps.sort((a, b) => b.storage - a.storage);
console.log(ordenado)

// 4) Mostrar por consola solo el valor de la frecuencia de "monitor" de todos los setUps.

var mapeo = setUps.map((setup) => {
    return {
        monitor: setup.monitor,
    }
})
console.log(mapeo)

// 5) Venta al por mayor. Calcular el total de todos los precios o "price" multiplicados por 5.


const reducir = setUps.reduce ((contador, setup) => {
    return contador + setup.price * 5
    }, 0);
console.log("Total de todos los precios: ", reducir);

// 6) Encontrar el setUp cuya "gpu" sea "Radeon RX 6600".

var encontrar = setUps.find((setup) => setup.gpu === "Radeon RX 6500");
console.log(encontrar)

// 7) Agregar una nueva propiedad a todos los setUps definida como: "stock: 10".

var mapeo2 = setUps.map((setup) => {
    return{
        processor: setup.processor,
        ram: setup.ram,
        gpu: setup.gpu,
        storage: setup.storage,
        storageType: setup.storageType,
        monitor: setup.monitor,
        price: setup.price,
        stock: 10,
    }
}) 
console.log(mapeo2)

// 8) Filtrar los nuevos setUps del punto 7 cuyo precio sea mayor que 1500 y restar en 2 unidades el stock del setUp cuya gpu sea "RTX 3070 Ti".

var filtrado2 = mapeo2.filter ((setup) => setup.price > 1500)
var restock = filtrado2.find((setup) => setup.gpu === "RTX 3070 Ti")
restock.stock = restock.stock - 2;
console.log(filtrado2)