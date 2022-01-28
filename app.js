const fs = require('fs');


class Contenedor{
    constructor(nameFile){
        this.nameFile = nameFile;
        this.products = [{}];
    }
    async save(product) {
        try {
            if(fs.existsSync(this.nameFile)){
                fs.readFile(this.nameFile, (error, data) => {
                    const productsArray = JSON.parse(data);
                    if(error) {
                        console.log(error)
                    }else{
                        productsArray.push(product);
                        fs.writeFile(this.nameFile, JSON.stringify(productsArray, null, 2) , error =>{
                            if (error) {
                                console.log('error')
                            } else {
                                console.log('Al fin se guardó')
                            }
                        })
                        console.log(productsArray);
                    }
                })
            }else{
                await fs.promises.writeFile(this.nameFile, '[]');
            }
        }catch (error) {
            console.log(error)
        }
    }
    async read() {
        try {
            const content = await fs.promises.readFile(this.nameFile);
            //const obj = await JSON.parse(content);
            //console.log(obj.id);
        } catch (error) {
            console.log(error)
        }
    }
    async getById(id){
        try {
            const product = await this.products.find(product => product.id === id);
            if(product){
                console.log(product);
            }else{
                console.log('No se encontró el producto');
            }
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

//objeto1.getById(1);
