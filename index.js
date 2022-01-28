const Contenedor = require('./app');

const instancia = new Contenedor("./products.json");

const product1 = {
    title: 'Almohadones Tusor',
    price: 120,
    thumbnail: ''
}
const product2 = {
    title: 'Almohadones Pana',
    price: 140,
    thumbnail: ''
}


setTimeout(() => {instancia.save(product1).then(id => console.log(id))}, 1000); 
setTimeout(() => {instancia.save(product2).then(id => console.log(id))}, 3000); 

//instancia.save(product1).then(id => console.log(id))
//instancia.getById(1).then(product => console.log(product));
//instancia.getAll().then(products => console.log(products));
//instancia.deleteById(1);
//instancia.deleteAll();