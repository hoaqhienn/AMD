
/**
 * Represents a triangle with three sides.
 */
export class Triangle {
    private ma: number;
    private mb: number;
    private mc: number;
  
    /**
     * Creates a new instance of the Triangle class.
     * @param a The length of side a.
     * @param b The length of side b.
     * @param c The length of side c.
     */
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
  
    /**
     * Creates a new Triangle instance.
     * @param a The length of side a.
     * @param b The length of side b.
     * @param c The length of side c.
     * @returns A new Triangle instance.
     */
    static create(a: number, b: number, c: number) {
      return new Triangle(a, b, c);
    }
  
    /**
     * Creates a new Triangle instance with default values.
     * @returns A new Triangle instance with all sides set to 0.
     */
    static createDefault() {
      return new Triangle(0, 0, 0);
    }
  
    /**
     * Gets the length of side a.
     */
    get getMA() {
      return this.ma;
    }
  
    /**
     * Sets the length of side a.
     * @param value The new length of side a.
     */
    set setMA(value: number) {
      if (value > 0) {
        this.ma = value;
      }
    }
  
    /**
     * Gets the length of side b.
     */
    get getMB() {
      return this.mb;
    }
  
    /**
     * Sets the length of side b.
     * @param value The new length of side b.
     */
    set setMB(value: number) {
      if (value > 0) {
        this.mb = value;
      }
    }
  
    /**
     * Gets the length of side c.
     */
    get getMC() {
      return this.mc;
    }
  
    /**
     * Sets the length of side c.
     * @param value The new length of side c.
     */
    set setMC(value: number) {
      if (value > 0) {
        this.mc = value;
      }
    }
  
    /**
     * Calculates the perimeter of the triangle.
     * @returns The perimeter of the triangle.
     */
    getPerimeter() {
      return this.ma + this.mb + this.mc;
    }
  
    /**
     * Calculates the area of the triangle.
     * @returns The area of the triangle.
     */
    getArea() {
      const s = this.getPerimeter()/2;
      return Math.sqrt(s* (s-this.ma)* (s-this.mb) * (s-this.mc));
    }
  
    /**
     * Determines the type of the triangle.
     * @returns The type of the triangle.
     */
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
  
     /**
      * Returns a string representation of the triangle.
      * @returns A string representation of the triangle.
      */
     toString() {
      return `Sides: ${this.ma}, ${this.mb}, ${this.mc}
      Type: ${this.getType()}
      Perimeter: ${this.getPerimeter()}
      Area: ${this.getArea()}`;
     }
}
