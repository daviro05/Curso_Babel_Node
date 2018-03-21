const express = require('express');

const app = express();
const bodyParser = require('body-parser');
// const HTTPStatus = require('http-status');

// const APIError = require('../lib/apierror');

const packagesRouter = require('../routes/package.route');

app.use(bodyParser.json({ limit: '50mb' }));

app.use('/packages', packagesRouter);


/* app.use((req, res, next) => {
  console.log('entra en el use sin error');
  return next();
});

app.use((error, req, res, next) => {
  console.log('Entra en el app.use con error message');
  if (error instanceof APIError) {
    return res.status(error.status).json({ message: error.message });
  }
  return next(error);
});

app.use((error, req, res) => {
  console.log('Entra en el app.use con error desconocido');
  return res.status(500).json({ message: 'desconocido' });
}); */


app.listen(3000, () => console.log('Escuchando en el puerto 3000'));
