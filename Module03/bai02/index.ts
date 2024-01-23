interface Window {
  prompt(message?: string): string;
}

class Book {
  code: string;
  importDate: Date;
  unitPrice: number;
  quantity: number;
  publisher: string;

  constructor(
    code: string,
    importDate: Date,
    unitPrice: number,
    quantity: number,
    publisher: string
  ) {
    this.code = code;
    this.importDate = importDate;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.publisher = publisher;
  }
}

class TextBook extends Book {
  status: "new" | "old";

  constructor(
    code: string,
    importDate: Date,
    unitPrice: number,
    quantity: number,
    publisher: string,
    status: "new" | "old"
  ) {
    super(code, importDate, unitPrice, quantity, publisher);
    this.status = status;
  }

  getTotal() {
    if (this.status === "new") {
      return this.quantity * this.unitPrice;
    } else {
      return this.quantity * this.unitPrice * 0.5;
    }
  }
}

class ReferenceBook extends Book {
  tax: number;

  constructor(
    code: string,
    importDate: Date,
    unitPrice: number,
    quantity: number,
    publisher: string,
    tax: number
  ) {
    super(code, importDate, unitPrice, quantity, publisher);
    this.tax = tax;
  }

  getTotal() {
    return this.quantity * this.unitPrice + this.tax;
  }
}

// Tạo dữ liệu mẫu
let textBooks: TextBook[] = [
  new TextBook("TB1", new Date(), 100, 10, "A", "new"),
  new TextBook("TB2", new Date(), 80, 5, "B", "old"),
  new TextBook("TB3", new Date(), 120, 8, "C", "new"),
];

let referenceBooks: ReferenceBook[] = [
  new ReferenceBook("RB1", new Date(), 50, 20, "X", 10),
  new ReferenceBook("RB2", new Date(), 40, 15, "Y", 5),
  new ReferenceBook("RB3", new Date(), 45, 18, "Z", 8),
];

// Tính tổng thành tiền mỗi loại sách
let totalTextBooks = 0;
for (let book of textBooks) {
  totalTextBooks += book.getTotal();
}

let totalReferenceBooks = 0;
for (let book of referenceBooks) {
  totalReferenceBooks += book.getTotal();
}

console.log(`Tổng thành tiền sách giáo khoa: ${totalTextBooks}`);
console.log(`Tổng thành tiền sách tham khảo: ${totalReferenceBooks}`);

// Tính trung bình cộng đơn giá sách tham khảo
let avgUnitPrice =
  referenceBooks.reduce((total, book) => total + book.unitPrice, 0) /
  referenceBooks.length;

console.log(`Đơn giá trung bình sách tham khảo: ${avgUnitPrice}`);

let publisher = "A";

let books = textBooks.filter((book) => book.publisher === publisher);

console.log(`Sách giáo khoa của nhà xuất bản ${publisher}:`);
books.forEach((book) => {
  console.log(` - ${book.code}`);
});
