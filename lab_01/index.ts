class Triangle {
  private ma: number;
  private mb: number;
  private mc: number;

  constructor(a: number, b: number, c: number) {
    if (a < 0 || b < 0 || c < 0 || !(a + b > c && a + c > b && b + c > a)) {
      this.ma = 0;
      this.mb = 0;
      this.mc = 0;
    } else {
      this.ma = a;
      this.mb = b;
      this.mc = c;
    }
  }

  static create(a: number, b: number, c: number) {
    return new Triangle(a, b, c);
  }

  static createDefault() {
    return new Triangle(0, 0, 0);
  }

  get getMA() {
    return this.ma;
  }

  set setMA(value: number) {
    if (value > 0) {
      this.ma = value;
    }
  }

  get getMB() {
    return this.mb;
  }

  set setMB(value: number) {
    if (value > 0) {
      this.mb = value;
    }
  }

  get getMC() {
    return this.mc;
  }

  set setMC(value: number) {
    if (value > 0) {
      this.mc = value;
    }
  }

  getPerimeter() {
    return this.ma + this.mb + this.mc;
  }

  getArea() {
    const s = this.getPerimeter()/2;
    return Math.sqrt(s* (s-this.ma)* (s-this.mb) * (s-this.mc));
  }

  getType() {
    if (this.ma === 0 || this.mb === 0 || this.mc === 0) {
      return "Not a triangle";
    }
    if (this.ma === this.mb && this.mb === this.mc) {
      return "Equilateral triangle";
    }
    if (this.ma === this.mb || this.ma === this.mc || this.mb === this.mc) {
      return "Isosceles triangle";
    }
    return "Scalene triangle";
   }

   toString() {
    return `Sides: ${this.ma}, ${this.mb}, ${this.mc}
    Type: ${this.getType()}
    Perimeter: ${this.getPerimeter()}
    Area: ${this.getArea()}`;
   }
}

function main() {
  const triangles = [
    new Triangle(-1, 2, 3),
    new Triangle(1, -2, 3),
    new Triangle(3, 4, 5),
    new Triangle(5, 5, 5),
    new Triangle(3, 4, 4)
  ];
  console.log(triangles.map(t => t.toString()));
}

main();
