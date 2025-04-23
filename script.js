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

// Function to test if full store inventory system works
function inventorySystemTest() {
  const creatine = new ProductProperties("Creatine Monohydrate", 20, 10);
  const honey = new ProductProperties("Royal Honey", 15, 5);
  const oil = new ProductProperties("Avocado Oil", 50, 45);
  const milk = new PerishableProductProperties("Cow Milk", 8, 22, "05-05-2025");
  const yogurt = new PerishableProductProperties(
    "Fat Free 0%",
    12,
    13,
    "01-06-2025"
  );

  // new store instance
  const groceryStore = new Store();
  [creatine, honey, oil, milk, yogurt].forEach((prod) =>
    groceryStore.addProduct(prod)
  );

  // Log inventory value before discount
  console.log(
    "Inventory Value Before Discount: $" + groceryStore.getInventoryValue()
  );

  // 15% discount applied
  ProductProperties.applyDiscount(groceryStore.inventory, 0.15);

  // Log inventory with 15% discount
  console.log(
    "Inventory Value After 15% Discount: $" + groceryStore.getInventoryValue()
  );

  // finding specific product
  const specificProduct = "Avocado Oil";
  const foundProduct = groceryStore.findProductByName(specificProduct);
  console.log("Found Product: " + foundProduct);
}

inventorySystemTest();
