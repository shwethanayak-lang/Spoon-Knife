const {Customer,Order} = require('./moduleA/customer');

let order = new Order(1,"Some Name");

console.log('Customer Details: '+Customer);
console.log('Order Details: '+order);