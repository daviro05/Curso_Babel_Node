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

function setPackage(req, res, next){
    libCache.setPackage().then();
}

router.route('/')
  .get(packageCtrl.list)
  .post(packageCtrl.create);

router.route('/:name')
  .get(packageCtrl.get);

/* app.get('/packages', (req, res) => {
    return res.json(db);
});

app.get('/packages/:name', (req, res, next) => {
    const names = req.params.name;
    console.log(names);
    const separar = req.params.name.split('-').join(' ');
    console.log(separar);
    const dev = _.find(db, { 'name': names });
    return res.json(dev);
});


app.post('/packages', (req, res, next) => {
    if (!req.body.name) {
        const error = new APIError('no name', HTTPStatus.BAD_REQUEST);
        return next(error); //Devolvemos el error para que luego un app.use lo capture.
    }
    db.push(req.body);
    return res.json(req.body);
}); */

module.exports = router;
