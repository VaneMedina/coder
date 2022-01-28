const Contenedor = require('./app');

const instancia = new Contenedor("./products.json");

const product1 = {
    title: 'Almohadones Tusor',
    price: 120,
    thumbnail: ''
}

instancia.save(product1);