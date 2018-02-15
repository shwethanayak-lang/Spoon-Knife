let Singleton = require('./singletones2015')

let inst1 = new Singleton();
let inst2 = new Singleton();

console.log(inst1 === inst2)
console.log(inst1.getData())