const express = require('express');

const util = require('util');

const app = express();
const bodyParser = require('body-parser');
const packagesRouter = require('../routes/package.route');

const mongoose = require('mongoose');

mongoose.connect('mongodb://51.15.194.153/test');

if (process.env.MONGO_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    const msg = `${collectionName}.${method}`;
    console.log(msg, util.inspect(query, false, 20), doc);
  });
}

app.use(bodyParser.json({ limit: '50mb' }));
app.use('/packages', packagesRouter);


app.listen(3000, () => console.log('Escuchando en el puerto 3000'));
