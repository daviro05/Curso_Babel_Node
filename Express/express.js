const express = require('express');
const app = express();

app.use((req, res, next) =>{
    const promise = new Promise((resolve) => resolve('hola'));
    promise.then((result) => {
        req.hola = 'hola';
        next();
    });    
})
/* app.get('/', (req, res) => {
    console.log(req.hola);
    res.send('hola33');
}); */

function login(req, res, next){
    //next();
    res.status(401).send('Login incorrect');
}

app.post('/users', (req, res) => {
    console.log('hola soy post');
    next();
}, (req, res) => {
    return res.json({user: 'hola soy el post'});
});

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    return res.json({user: req.params.id});
});

app.listen(3000, () => console.log('Escuchando en el puerto 3000'));