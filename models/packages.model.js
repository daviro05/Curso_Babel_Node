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
};
