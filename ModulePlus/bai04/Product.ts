/**
 * Represents a product.
 */
export class Product {
  private description: string;
  private productID: string;
  private price: number;

  /**
   * Creates a new instance of the Product class.
   * @param description - The description of the product.
   * @param productID - The ID of the product.
   * @param price - The price of the product.
   */
  constructor(description: string, productID: string, price: number) {
    this.description = description;
    this.productID = productID;
    this.price = price;
  }

  /**
   * Gets the description of the product.
   * @returns The description of the product.
   */
  getDescription(): string {
    return this.description;
  }

  /**
   * Gets the ID of the product.
   * @returns The ID of the product.
   */
  getProductID(): string {
    return this.productID;
  }

  /**
   * Gets the price of the product.
   * @returns The price of the product.
   */
  getPrice(): number {
    return this.price;
  }

  /**
   * Sets the description of the product.
   * @param description - The new description of the product.
   */
  setDescription(description: string): void {
    this.description = description;
  }

  /**
   * Sets the ID of the product.
   * @param productID - The new ID of the product.
   */
  setProductID(productID: string): void {
    this.productID = productID;
  }

  /**
   * Sets the price of the product.
   * @param price - The new price of the product.
   */
  setPrice(price: number): void {
    this.price = price;
  }

  /**
   * Returns a string representation of the product.
   * @returns A string representation of the product.
   */
  toString(): string {
    return `Product [description=${this.description}, productID=${this.productID}, price=${this.price}]`;
  }
}
