import { OrderDetail } from "./OrderDetail";
import { Product } from "./Product";

/**
 * Represents an order.
 */
export class Order {
  private orderID: number;
  private orderDate: Date;
  private lineItems: OrderDetail[];

  constructor(orderID: number, orderDate: Date) {
    this.orderID = orderID;
    this.orderDate = orderDate;
    this.lineItems = [];
  }

  addLineItem(product: Product, quantity: number): void {
    const orderDetail = new OrderDetail(product, quantity);
    this.lineItems.push(orderDetail);
  }

  calcTotalCharge(): number {
    return this.lineItems.reduce(
      (total, orderDetail) => total + orderDetail.calcTotalPrice(),
      0
    );
  }

  getLineItems(): OrderDetail[] {
    return this.lineItems;
  }

  getOrderDate(): Date {
    return this.orderDate;
  }

  getOrderID(): number {
    return this.orderID;
  }

  setOrderDate(orderDate: Date): void {
    this.orderDate = orderDate;
  }

  printTable(): void {
    const tableData = this.lineItems.map((orderDetail, index) => {
      const product = orderDetail.getProduct();
      return {
        STT: index + 1,
        "Mã SP": product.getProductID(),
        "Mô tả": product.getDescription(),
        "Đơn giá": product.getPrice(),
        SL: orderDetail.getQuantity(),
        "Thành tiền": orderDetail.calcTotalPrice(),
      };
    });

    console.table(tableData);
  }
}
