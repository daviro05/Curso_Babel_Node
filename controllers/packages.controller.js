const db = require('../BBDD/db');
const _ = require('lodash');
const APIError = require('../lib/apierror');
const HTTPStatus = require('http-status');

const packageModel = require('../models/packages.model');

function list(req, res, next) {
  packageModel.list()
    .then((resultado) => {
      res.json(resultado);
    })
    .catch(next);
  // return res.json(db);
}

function get(req, res, next) {
  if (req.params.name) {
    return next();
  }
  return packageModel.get(req.params.name)
    .then(resultado => res.json(resultado));
}

function create(req, res, next) {
  if (!req.body.name) {
    const error = new APIError('no name', HTTPStatus.BAD_REQUEST);
    return next(error); // Devolvemos el error para que luego un app.use lo capture.
  }
  db.push(req.body);
  return res.json(req.body);
}


module.exports = {
  list,
  get,
  create,
};
