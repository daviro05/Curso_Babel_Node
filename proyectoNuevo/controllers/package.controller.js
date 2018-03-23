
// Creamos nuestra función list que devolverá una promesa.

const packageModel = require('../models/package.model');


function list(){

    return packageModel.list();
    /*return new Promise((resolve) => {
        resolve([]); // Devolvemos una promesa que nos devolverá un array vacío.
       
    });*/
}

function create(pkg){
    return packageModel.create(pkg);
}


module.exports = {
    list,
    create,
}