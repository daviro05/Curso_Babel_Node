
const _ = require('lodash');
const APIError = require('../lib/apierror');
// const HTTPStatus = require('http-status');

const packageModel = require('../models/packages.model');

function list(req, res, next) {
  packageModel.list()
    .then(res.json.bind(res))
    .catch(next);
  // return res.json(db);
}

function get(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      return reject(new APIError('no params name'));
    }
    return packageModel.get(name).then(resolve);
  });
}


function create(pkg) {
  return packageModel.create(pkg);
}


module.exports = {
  list,
  get,
  create,
};
