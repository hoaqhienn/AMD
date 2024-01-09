import { Coordinate } from './coordinate';

/**
 * Represents a circle in a coordinate system.
 */
export class Circle {
  center: Coordinate;
  radius: number;

  /**
   * Creates a new Circle instance.
   * @param center - The center coordinate of the circle.
   * @param radius - The radius of the circle.
   */
  constructor(center: Coordinate, radius: number) {
    this.center = center;
    this.radius = radius;
  }

  /**
   * Gets the center coordinate of the circle.
   * @returns The center coordinate.
   */
  getCenter() {
    return this.center;
  }

  /**
   * Gets the radius of the circle.
   * @returns The radius.
   */
  getRadius() {
    return this.radius;
  }

  /**
   * Sets the center coordinate of the circle.
   * @param center - The new center coordinate.
   */
  setCenter(center: Coordinate) {
    this.center = center;
  }

  /**
   * Sets the radius of the circle.
   * @param radius - The new radius.
   */
  setRadius(radius: number) {
    this.radius = radius;
  }

  /**
   * Calculates the circumference of the circle.
   * @returns The circumference.
   */
  calculateCircumference() {
    return 2 * Math.PI * this.radius;
  }

  /**
   * Calculates the area of the circle.
   * @returns The area.
   */
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}
