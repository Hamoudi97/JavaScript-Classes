// Base Class for Products
class ProductProperties {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Returns price x quantity
  getTotalValue() {
    return this.price * this.quantity;
  }

  // Returns information on the product
  toString() {
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
  }

  // Applies discount to all products
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

  // Overwritten toString method with expiry date
  toString() {
    return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
  }
}

// Creating instances of perishable products
const apple = new PerishableProductProperties(
  "Honeycrisp",
  1.25,
  30,
  "24-04-2025"
);

const bread = new PerishableProductProperties("Sourdough", 5, 20, "30-04-2025");

console.log(apple.toString());
console.log(bread.toString());

//Store Class to manage inventory

class Store {
  constructor() {
    this.inventory = [];
  }

  // Adds product to inventory
  addProduct(product) {
    this.inventory.push(product);
  }

  // Calculates total value of all the products in the inventory
  getInventoryValue() {
    return this.inventory.reduce(
      (total, prod) => total + prod.getTotalValue(),
      0
    );
  }

  // Finds product by name
  findProductByName(name) {
    return this.inventory.find((prod) => prod.name === name) || null;
  }
}
