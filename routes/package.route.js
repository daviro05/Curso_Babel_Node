const express = require('express');

const router = express.Router();
const packageCtrl = require('../controllers/packages.controller.js');

const libCache = require('../lib/cache');

/* router.route('*')
  .get((req, res, next) => {
    console.log('llega: ', req.path);
    return next();
}); */

function getCachePackage(req, res, next) {
  libCache.getCache(req.params.name)
    .then((resultado) => {
      if (resultado) {
        console.log('cache');
        return res.json(resultado);
      }
      return next();
    });
}

/* function setPackage(req, res, next) {
  // libCache.setPackage().then();
} */

router.route('/')
  .get(packageCtrl.list)
  .post((req, res, next) => {
    packageCtrl.create(req.body)
      .then(res.json.bind(res))
      .catch(next);
  });

router.route('/:name')
  .get(
    getCachePackage,
    (req, res, next) => {
      console.log('param', req.params.name);
      packageCtrl.get(req.params.name)
        .then((data) => {
          console.log('data', data);
          req.bbcache = data;
          next();
        })
        .catch(error => next(error));
    },
    (req, res, next) => {
      console.log('req.cache', req.bbcache);
      libCache.saveCache(req.bbcache)
        .then(() => res.json(req.bbcache))
        .catch(error => next(error));
    },
  );


module.exports = router;
