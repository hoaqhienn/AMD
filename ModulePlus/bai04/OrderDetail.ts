import { Product } from "./Product";

/**
 * Represents an order detail.
 */
export class OrderDetail {
  private quantity: number;
  private product: Product;

  /**
   * Creates a new instance of OrderDetail.
   * @param product - The product associated with the order detail.
   * @param quantity - The quantity of the product in the order detail.
   */
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  /**
   * Calculates the total price of the order detail.
   * @returns The total price of the order detail.
   */
  calcTotalPrice(): number {
    return this.quantity * this.product.getPrice();
  }

  /**
   * Gets the product associated with the order detail.
   * @returns The product associated with the order detail.
   */
  getProduct(): Product {
    return this.product;
  }

  /**
   * Gets the quantity of the product in the order detail.
   * @returns The quantity of the product in the order detail.
   */
  getQuantity(): number {
    return this.quantity;
  }

  /**
   * Sets the quantity of the product in the order detail.
   * @param quantity - The new quantity of the product.
   */
  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  /**
   * Returns a string representation of the order detail.
   * @returns A string representation of the order detail.
   */
  toString(): string {
    return `OrderDetail [quantity=${this.quantity}, product=${this.product}]`;
  }
}
