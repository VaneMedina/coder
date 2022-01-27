const fs = require('fs');

class Contenedor{
    constructor(nameFile){
        this.nameFile = nameFile;
    }
    async save(product) {
        try {
            await fs.promises.writeFile(this.nameFile, JSON.stringify(product, null, 2));
            this.read();
        } catch (error) {
            console.log(error)
        }
    }
    async read() {
        try {
            const content = await fs.promises.readFile(this.nameFile);
            const obj = JSON.parse(content);
            console.log(obj.id);
        } catch (error) {
            console.log(error)
        }
    }
}

const objeto1 = new Contenedor('./products.txt');

const product = {
    title: 'Almohadones Tusor',
    price: 120,
    thumbnail: '',
    id: 1  
}

objeto1.save(product);

