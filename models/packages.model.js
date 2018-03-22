
const mongoose = require('mongoose');
const APIError = require('../lib/apierror');

const Package = mongoose.model('Package', {
  name: String,
  description: String,
  version: String,
  license: String,
});

function list() {
  return Package.find({});
}

function get(name) {
  return Package.findOne({ name });
/*     .then(array => array[0]); */
}

function create(pkg) {
  if (!pkg.name || !pkg.version) {
    return new Promise((resolve, reject) => {
      reject(new APIError('No name or version'));
    });
  }
  return Package.findOne({ name: pkg.name })
    .then((existPkg) => {
      if (existPkg) {
        throw new APIError('Ya existe ese nombre');
      }
      return new Package(pkg).save();
    });
  // return new Package(pkg).save();
}


module.exports = {
  list,
  get,
  create,
};

/*
const db = require('../BBDD/db');
const _ = require('lodash');

 function list() {
  return new Promise((resolve) => {
    resolve(db);
  });
}

function get(name) {
  return new Promise((resolve) => {
    const result = _.find(db, { name });
    console.log('getmodel', result);
    resolve(result);
  });
}


module.exports = {
  list,
  get,
}; */
