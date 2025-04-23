// Base Class for Products
class ProductProperties {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // returns price x quantity
  getTotalValue() {
    return this.price * this.quantity;
  }

  // returns information on the product
  toString() {
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
  }

  // applies discount to all products
  static applyDiscount(products, discount) {
    products.forEach((product) => {
      product.price = product.price * (1 - discount);
    });
  }
}

// Inheritance for Perishable Products subclass
class PerishableProductProperties extends ProductProperties {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

  // overwritten toString method with expiry date
  toString() {
    return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
  }
}

//creating instances of perishable products
const apple = new PerishableProductProperties(
  "Honeycrisp",
  1.25,
  30,
  "24-04-2025"
);

const bread = new PerishableProductProperties("Sourdough", 5, 20, "30-04-2025");

console.log(apple.toString());
console.log(bread.toString());
