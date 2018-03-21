// LEER LAS CARPETAS DE node_modules Y DE CADA UNA DE ELLAS SACAREMOS SU PACKAGE.JSON

const _ = require('lodash');

const fs = require('fs');
// Libreria de utilidad de node.
const util = require('util');
// Convierte una funcion que recibe un callback en una promesa.
const fs_readFolder = util.promisify(fs.readdir);

// Cogemos la funcion de readFile.js que hemos exportado anteriormente.
const getPackageJson = require('./readFile');

const folder = '../node_modules/';

function getDir() {
  return getListFolder()
    .then(getPackageFromList)
    .then(filterPackagesNull)
    .then(data => console.log(data));
}

function filterPackagesNull(array) {
  return _.filter(array, element => element !== null);
}

function getListFolder() {
  return fs_readFolder(folder);
}

function getPackageFromList(list) {
  // console.log(list);
  const promises = [];
  list.forEach((element) => {
    promises.push(resolverVersion(element));
  });
  return Promise.all(promises);
}

function resolverVersion(folder) {
  return getPackageJson(folder)
    .then(mi_package => _.get(mi_package, 'version'));
}


/* function getPackageFromList(list){
    console.log(list);
    const promises = [];
    list.forEach((element) => {
       promises.push(getPackageJson(element));
    });
} */

/* function getPackageFromList(list){
    console.log(list);
    const result = [];
    let count = 0;
    list.forEach((element,i) => {
        getPackageJson(element)
        .then((packageInfo) => {
            result.push(packageInfo);
            count = i;
        })
    });
    if(count === list.length){
        return result;
    }
} */

getDir();
