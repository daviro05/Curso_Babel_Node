

const mongoose = require('mongoose');
const Package = mongoose.model('Package', { //El name corresponde con la coleccion.
    name: String,
    description: String,
    version: String,
    license: String,
}//,{ strict: false }
);

function list() {

    return Package.find({});
    /*  return new Promise((resolve) => {
         resolve([]); // Devolvemos una promesa que nos devolverá el resultado
     }); */
}

function create(pkg){
    const packageModel = new Package(pkg);
    return packageModel.save();

}

module.exports = {
    list,
    create,
}