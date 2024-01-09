/**
 * This file contains code for creating an order and performing operations on it.
 */
import { Product } from "./Product";
import { Order } from "./Order";

const products = [
  new Product("Nước  tương", "sp1", 8000),
  new Product("Gạo", "sp2", 18000),
  new Product("Đường", "sp3", 10000),
  new Product("Gạo", "sp4", 18000),
];

const order = new Order(1, new Date());
order.addLineItem(products[0], 10);
order.addLineItem(products[1], 5);
order.addLineItem(products[2], 1);
order.addLineItem(products[3], 1);

console.log("Mã HD:", order.getOrderID());

const formattedDate = `${order.getOrderDate().getDate()}/${order.getOrderDate().getMonth() + 1}/${order.getOrderDate().getFullYear()}`;
console.log("Ngày lập hoá đơn:", formattedDate);

order.printTable();
console.log("Tổng tiền thanh toán:", order.calcTotalCharge() + " VND");
