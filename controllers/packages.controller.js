const db = require('../BBDD/db');
const _ = require('lodash');
const APIError = require('../lib/apierror');
const HTTPStatus = require('http-status');

const packageModel = require('../models/packages.model');

function list(req, res, next) {
  packageModel.list()
    .then(res.json.bind(res))
    .catch(next);
  // return res.json(db);
}

/* function response(promesa) {
  return (req, res, next) => promesa
    .then(res.json.bind(res))
    .catch(next);
} */

function get(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      return reject(new APIError('no params name'));
    }
    return packageModel.get(name).then(resolve);
  });
}

function create(req, res, next) {
  if (!req.body.name) {
    const error = new APIError('no name', 500);
    return next(error);
  }
  db.push(req.body);
  return res.json(req.body);
}


module.exports = {
  list,
  get,
  create,
};
