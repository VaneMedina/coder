const Contenedor = require('./app');

const instancia = new Contenedor("./products.json");

const product1 = {
    title: 'Almohadones Tusor',
    price: 120,
    thumbnail: ''
}

//instancia.save(product1);
//instancia.getById(1).then(product => console.log(product));
//instancia.getAll().then(products => console.log(products));
//instancia.deleteById(1);
