export class Product {
    private description: string;
    private productID: string; 
    private price: number;
  
    constructor(description: string, productID: string, price: number) {
      this.description = description;
      this.productID = productID;
      this.price = price;
    }
  
    getDescription(): string {
      return this.description;
    }
  
    getProductID(): string {
      return this.productID; 
    }
  
    getPrice(): number {
      return this.price;
    }
  
    setDescription(description: string): void {
      this.description = description;
    }
  
    setProductID(productID: string): void {
      this.productID = productID;
    }
  
    setPrice(price: number): void {
      this.price = price;
    }
  
    toString(): string {
      return `Product [description=${this.description}, productID=${this.productID}, price=${this.price}]`;
    }
  }