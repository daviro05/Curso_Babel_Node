const _ = require('lodash');

const fs = require('fs');
// Libreria de utilidad de node.
const util = require('util');
// Convierte una funcion que recibe un callback en una promesa.
const fs_readfile = util.promisify(fs.readFile);
// const path = require('path');


function getPackageJson(nameFolder) {
  const file = `../node_modules/${nameFolder}/package.json`;
  return fs_readfile(file, 'utf-8')
    .then(convertStringToJSON)
    .then(parseData)
    .catch(() => null);
  // .then(console.log);
}

function convertStringToJSON(data) {
  return JSON.parse(data);
}

function parseData(data) {
  return {
    name: _.get(data, 'name'),
    description: _.get(data, 'description'),
    version: _.get(data, 'version'),
    license: _.get(data, 'license'),
  };
  /* return {
            name: data.name,
            description: data.description,
            version: data.version,
            license: data.license,
        }; */
}

// getPackageJson('moment');

module.exports = getPackageJson;
