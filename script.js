// Base Class for Products
class ProductProperties {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalValue() {
    return this.price * this.quantity;
  }

  toString() {
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
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
