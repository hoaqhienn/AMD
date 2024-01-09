import { Product } from "./Product";
export class OrderDetail {
    private quantity: number;
    private product: Product;
  
    constructor(product: Product, quantity: number) {
      this.product = product;
      this.quantity = quantity;
    }
    
    calcTotalPrice(): number {
      return this.quantity * this.product.getPrice();
    }
  
    getProduct(): Product {
      return this.product;
    }

    getQuantity(): number {
      return this.quantity;
    }
  
    setQuantity(quantity: number): void {
      this.quantity = quantity;
    }
  
    toString(): string {
      return `OrderDetail [quantity=${this.quantity}, product=${this.product}]`;
    }
  }