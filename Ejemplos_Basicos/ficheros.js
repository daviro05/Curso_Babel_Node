const fs = require('fs');
const P = require('bluebird');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const request = require('request');

/* function leerFichero(fichero){
    return new Promise((resolve, reject) => {
        fs.readFile('./fichero.txt', 'utf-8', (err,resultado) => {
            if(err){
               return reject(err);
            }
            const arr1 = resultado.split(',');
            return resolve(resultado);
        });
    })
}

leerFichero('./fichero.txt').
then(console.log).
catch(console.log); */

/* function leerFichero(fichero){
    return readFile(fichero, 'utf8')
    .then((resultado) => {
        const arr1 = resultado.split(',');
        return arr1;
    })
} */

/* const leerFichero = async(fichero) => {
    const result = await readFile(fichero, 'utf8')
    .then((resultado) => {
        const arr1 = resultado.split(',');
        return arr1;
    });
    console.log(result);
}

leerFichero('./fichero.txt'); */


// console.log(leerFichero('./fichero.txt'));
