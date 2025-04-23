// Base Class

class ProductProperties {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalValue() {
    let totalValue = this.price * this.quantity;
    return totalValue;
  }
}
