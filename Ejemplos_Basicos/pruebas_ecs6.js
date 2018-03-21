class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static pi() {
    return Math.PI;
  }
}


function map({ z, x, y }) {
  z = z || 0;
  console.log(x);
}
map({ x: 2, y: 2 });

const { x } = { x: 2, y: 2 };
console.log(x);


const array = [2, 3];
const array2 = [3, 4];
console.log([...array, ...array2]);
const circle = new Circle(...array);
console.log(`Punto: ${circle.x}, ${circle.y}`);
