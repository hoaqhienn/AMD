"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
/**
 * Represents a triangle with three sides.
 */
var Triangle = /** @class */ (function () {
    /**
     * Creates a new instance of the Triangle class.
     * @param a The length of side a.
     * @param b The length of side b.
     * @param c The length of side c.
     */
    function Triangle(a, b, c) {
        if (a < 0 || b < 0 || c < 0 || !(a + b > c && a + c > b && b + c > a)) {
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        }
        else {
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
    Triangle.create = function (a, b, c) {
        return new Triangle(a, b, c);
    };
    /**
     * Creates a new Triangle instance with default values.
     * @returns A new Triangle instance with all sides set to 0.
     */
    Triangle.createDefault = function () {
        return new Triangle(0, 0, 0);
    };
    Object.defineProperty(Triangle.prototype, "getMA", {
        /**
         * Gets the length of side a.
         */
        get: function () {
            return this.ma;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "setMA", {
        /**
         * Sets the length of side a.
         * @param value The new length of side a.
         */
        set: function (value) {
            if (value > 0) {
                this.ma = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "getMB", {
        /**
         * Gets the length of side b.
         */
        get: function () {
            return this.mb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "setMB", {
        /**
         * Sets the length of side b.
         * @param value The new length of side b.
         */
        set: function (value) {
            if (value > 0) {
                this.mb = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "getMC", {
        /**
         * Gets the length of side c.
         */
        get: function () {
            return this.mc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "setMC", {
        /**
         * Sets the length of side c.
         * @param value The new length of side c.
         */
        set: function (value) {
            if (value > 0) {
                this.mc = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Calculates the perimeter of the triangle.
     * @returns The perimeter of the triangle.
     */
    Triangle.prototype.getPerimeter = function () {
        return this.ma + this.mb + this.mc;
    };
    /**
     * Calculates the area of the triangle.
     * @returns The area of the triangle.
     */
    Triangle.prototype.getArea = function () {
        var s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.ma) * (s - this.mb) * (s - this.mc));
    };
    /**
     * Determines the type of the triangle.
     * @returns The type of the triangle.
     */
    Triangle.prototype.getType = function () {
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
    };
    /**
     * Returns a string representation of the triangle.
     * @returns A string representation of the triangle.
     */
    Triangle.prototype.toString = function () {
        return "Sides: ".concat(this.ma, ", ").concat(this.mb, ", ").concat(this.mc, "\n      Type: ").concat(this.getType(), "\n      Perimeter: ").concat(this.getPerimeter(), "\n      Area: ").concat(this.getArea());
    };
    return Triangle;
}());
exports.Triangle = Triangle;
