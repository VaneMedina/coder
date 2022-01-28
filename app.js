const fs = require('fs').promises;

class Contenedor{
    constructor(nameFile){
        this.nameFile = nameFile;
        this.id = 1
    }

    async save(product) {
        //Leo y almaceno los datos del archivo en una constante.
        product.id = this.id
        try{
            const dataFile = await fs.readFile(this.nameFile);
            const data = JSON.parse(dataFile);
            data.push(product);
            await fs.writeFile(this.nameFile, JSON.stringify(data, null, 2), 'utf-8');
        }catch(error){
            console.log(error);
        }
    }

    async getById(id){
    
    }
}



module.exports = Contenedor