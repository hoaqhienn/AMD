/**
 * Prints the string representation of each triangle in the given array.
 * @param triangles - An array of Triangle objects.
 */
import { Triangle } from "./triangle";

function main() {
  const triangles = [
    new Triangle(-1, 2, 3),
    new Triangle(1, -2, 3),
    new Triangle(3, 4, 5),
    new Triangle(5, 5, 5),
    new Triangle(3, 4, 4),
  ];
  console.log(triangles.map((t) => t.toString()));
}

main();
