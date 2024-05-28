/*Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name,
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand
how to manage product data.*/
// define an array named inventory to store product information
var inventory = [];
// Create three separate objects
var product1 = {
    name: "headfone",
    model: "new123",
    cost: 2000,
    quantity: 5
};
var product2 = {
    name: "HP Elitebook",
    model: "2024",
    cost: 100000,
    quantity: 10
};
var product3 = {
    name: "Redmi",
    model: "letest_10",
    cost: 40000,
    quantity: 15
};
// Add these product objects to the inventory array 
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
//Access and log the quantity property of a specific product in the inventory array
console.log("The quantity of ".concat(inventory[2].name, " is ").concat(inventory[2].quantity));
// Explore adding and accessing more elements within the inventory array
inventory.push({
    name: "Ipod",
    model: "Samsung_88",
    cost: 800000,
    quantity: 15
});
console.log("Updated Inventory:");
for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
    var product = inventory_1[_i];
    console.log("Name: ".concat(product.name, ", Model: ").concat(product.model, ", Cost: ").concat(product.cost, ", Quantity: ").concat(product.quantity));
}
