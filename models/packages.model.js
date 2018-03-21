const db = require('../BBDD/db');
const APIError = require('../lib/apierror');
const _ = require('lodash');

function list() {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject(new APIError('No db', 500));
    }
    resolve(db);
  });
}

function get(name) {
  return new Promise((resolve) => {
    resolve(_.find(db, { name }));
  });
}


module.exports = {
  list,
  get,
};
