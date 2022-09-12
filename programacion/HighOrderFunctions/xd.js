const setUps = [
    {processor: "i7 11700K", ram: "Fury 32GB", gpu: "RTX 3070 Ti", storage: 2, storageType: "SSD", monitor: 144, price: 2199},
    {processor: "ryzen 9 5900X", ram: "Fury 32GB", gpu: "Radeon RX 6500", storage: 4, storageType: "SSD", monitor: 144, price: 2499},
    {processor: "ryzen 7 5700G", ram: "HyperX 16GB", gpu: "Radeon RX 6500", storage: 2, storageType: "SSD", monitor: 60, price: 1599},
    {processor: "i5 10400F", ram: "HyperX 16GB", gpu: "RTX 2060", storage: 1, storageType: "SSD", monitor: 60, price: 1499},
    {processor: "i9 12900", ram: "Fury 8GB", gpu: "RTX 2060", storage: 4, storageType: "HDD", monitor: 60, price: 999},
    {processor: "ryzen 5 5600X", ram: "HyperX 8GB", gpu: "Radeon PRO W6400", storage: 4, storageType: "HDD", monitor: 60, price: 949}
];
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

const reducir = setUps.reduce ((contador, setup) => {
    return contador + setup.price * 5
    }, 0);
console.log("Total de todos los precios: ", reducir);