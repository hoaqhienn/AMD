/**
 * Creates a circle object with the given center and radius.
 * @param {Coordinate} center - The center coordinate of the circle.
 * @param {number} radius - The radius of the circle.
 * @returns {Circle} The circle object.
 */
import { Coordinate } from "./coordinate";
import { Circle } from "./cricle";

const center = new Coordinate("O", 5, 5);
const circle = new Circle(center, 10.5);

console.log(
  `Hình tròn có tâm ${circle
    .getCenter()
    .toString()} với bán kính ${circle.getRadius()} có diện tích và chu vi lần lượt là ${circle
    .calculateArea()
    .toFixed(3)} và ${circle.calculateCircumference().toFixed(3)}`
);
