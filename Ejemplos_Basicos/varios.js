function Circle(x,y) {
    this.x = x;
    this.y = y;

    // Esto no funciona

      this.point = function() {
        console.log(this);
        console.log(`Point: ${this.x}`);
    }

    // Con arrow function si
/*     this.point = () => {
        console.log(this);
        console.log(`Point: ${this.x}`);
    } */


}

const circulo = new Circle(3,4);
/* circulo.point(); */
// setTimeout(circulo.point.bind(circulo), 1000);
//setTimeout(circulo.point, 1000);