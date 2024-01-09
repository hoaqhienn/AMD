"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Prints the string representation of each triangle in the given array.
 * @param triangles - An array of Triangle objects.
 */
var triangle_1 = require("./triangle");
function main() {
    var triangles = [
        new triangle_1.Triangle(-1, 2, 3),
        new triangle_1.Triangle(1, -2, 3),
        new triangle_1.Triangle(3, 4, 5),
        new triangle_1.Triangle(5, 5, 5),
        new triangle_1.Triangle(3, 4, 4),
    ];
    console.log(triangles.map(function (t) { return t.toString(); }));
}
main();
