class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.outOfStock = [];
  }

  addItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    if (this.items.length >= this.capacity) {
      throw new Error("The inventory is already full.");
    }

    const existingItem = this.items.find((item) => item.name === itemName);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        name: itemName,
        quantity: quantity
      });
    }

    return `Added ${quantity} ${itemName}(s) to the inventory.`
  }

  sellItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    const existingItem = this.items.find((item) => item.name === itemName);
    if (!existingItem) {
      throw new Error(`The item ${itemName} is not available in the inventory.`);
    }

    if (quantity > existingItem.quantity) {
      throw new Error(`Not enough ${itemName}(s) in stock.`);
    }

    existingItem.quantity -= quantity;
    if (existingItem.quantity <= 0) {
      this.items = this.items.filter((item) => item.name !== itemName);
      this.outOfStock.push(itemName);
    }

    return `Sold ${quantity} ${itemName}(s) from the inventory.`
  }

  restockItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    const existingItem = this.items.find((item) => item.name === itemName);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        name: itemName,
        quantity: quantity
      });
    }

    // removing the existing item from outOfStock
    this.outOfStock = this.outOfStock.filter(item => item.name !== itemName);

    return `Restocked ${quantity} ${itemName}(s) in the inventory.`
  }

  getInventorySummary() {
    let result = ["Current Inventory:"];

    this.items.forEach(element => {
      result.push(`${element.name}: ${element.quantity}`);
    });

    if (this.outOfStock.length > 0) {
        result.push(`Out of Stock: ${this.outOfStock.join(', ')}`);
    }

    return result.join('\n');
  }
}
const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());

// Added 10 Drill(s) to the inventory.
// Added 5 Hammer(s) to the inventory.
// Uncaught Error Error: The inventory is already full.
