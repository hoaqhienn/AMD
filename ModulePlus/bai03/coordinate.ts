/**
 * Represents a coordinate in a 2D plane.
 */
export class Coordinate {
  name?: string;
  x: number;
  y: number;

  /**
   * Creates a new Coordinate instance.
   * @param name - The name of the coordinate.
   * @param x - The x-coordinate value.
   * @param y - The y-coordinate value.
   */
  constructor(name: string, x: number, y: number) {
    this.name = name;
    this.x = x;
    this.y = y;
  }

  /**
   * Gets the x-coordinate value.
   * @returns The x-coordinate value.
   */
  getX() {
    return this.x;
  }

  /**
   * Gets the y-coordinate value.
   * @returns The y-coordinate value.
   */
  getY() {
    return this.y;
  }

  /**
   * Sets the x-coordinate value.
   * @param x - The new x-coordinate value.
   */
  setX(x: number) {
    this.x = x;
  }

  /**
   * Sets the y-coordinate value.
   * @param y - The new y-coordinate value.
   */
  setY(y: number) {
    this.y = y;
  }

  /**
   * Returns a string representation of the coordinate.
   * @returns The string representation of the coordinate.
   */
  toString() {
    return `${this.name}(${this.x}, ${this.y})`;
  }
}
