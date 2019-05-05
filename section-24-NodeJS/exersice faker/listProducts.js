var faker = require('faker')
console.log("-------\n");

for (let i = 0; i < 10; i++) {
    var product = faker.commerce.productName();
    var price = faker.commerce.price();
    console.log("product: " + product + " price: " + price);
    console.log('====================================');
}

console.log('====================================');
console.log();
console.log('====================================');
