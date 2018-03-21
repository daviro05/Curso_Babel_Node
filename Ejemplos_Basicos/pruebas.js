// Código con callbacks


function callback(msg) {
  console.log(msg);
  return msg;
}

function hola(cb) {
  console.log(cb('hola'));
}
// hola(callback);

function sumaCB(cb, a, b) {
  setTimeout(() => {
    cb(a + b);
  });
}

// Código con promesas

function suma(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}


// Pruebas

/* suma (2,3)
.then((resultado) => {
    console.log("#### Ejemplo de suma con promesa ####");
    console.log(`Resultado: ${resultado}`);
    return suma(resultado,5);
})
.then((resultado2) => {
    console.log(`Resultado2: ${resultado2}`);
})
.catch((error) => {
    console.log(`Error: ${error}`);
}) */

// Para realizar varias sumas

/* Promise.all([suma(2,3), suma(4,5)])
.then((result) => {
    console.log(result);
}) */

const array = [[2, 3], [4, 5]];
const promesas = [];
array.forEach(par => promesas.push(suma(par[0], par[1])));

/* console.log(promesas);
promesas.forEach((promesa) => {
    promesa.then(console.log);
}); */


/* P.map(promesas, (resultado) => resultado * 20)
.then(console.log); */


/* const array2 = [[2,3], [4,5]];

console.log(array2.map(map));

function map(result){
   return suma(result[0],result[1])
   .then((result) => {
       return result;
   });
} */

function hola() {
  this.msg = 'hola'; // El this se refiere a la propia funcion.
  return hola2(this);
}

const hola2 = (self) => {
  console.log(self.msg);
};

hola();
