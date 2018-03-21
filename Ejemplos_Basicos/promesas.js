function suma(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

const array = [[2, 3], [4, 5]];
const promesas = [];
array.forEach(par => promesas.push(suma(par[0], par[1])));
Promise.all(promesas).then(console.log);

/*
const resultados = [];

promesas.forEach((promesa) => {
    promesa.then((result) => resultados.push(result *20))
    .then(() => console.log(resultados));
});

promesas.forEach((promesa) => {
    promesa.then((result) => {
        resultados.push(result *20);
        printResult(promesas.length);
});
});
*/

let num = 0;

function printResult(numTotal) {
  num++;
  if (num === numTotal) {
    console.log(resultados);
  }
}

