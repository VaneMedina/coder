const fs = require('fs');

//Leer
fs.readFile('./archivosTexto.txt', 'utf-8', (error, data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})
//Escribir
fs.writeFile('./archivosTexto.txt', 'ESCRIBO CON OPERACIONES NO BLOQUEANTES', error => {
    if(error){
        console.log(error)
    }else{
        console.log('Se escribió correctamente')
    }
})