const express = require('express');
const router = express.Router();

const packageCtrl = require('../controllers/package.controller');

router.get('/', function(req, res, next) {
 packageCtrl.list() // Llamamos al metodo de packageCtrl que nos devuelve una promesa.
 .then(res.json.bind(res)) // El bind lo que hace es que cuando le paso esa funcion, el this, es el de res y no el del objeto. También valdría .then(resultado => res.json(resultado))
 .catch(next);
});

router.post('/', (req,res,next) => {
    packageCtrl.create(req.body)
    .then(resultado => res.json(resultado))
    .catch(next);
})

module.exports = router;
