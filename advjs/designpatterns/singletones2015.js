//IIFE
let instance = null
let Singleton = class Singleton{

    constructor(){
        // throw new Error('Cannot construct object');
        if(!instance){
            instance = this;
        }
        return instance;
    }
    static getData(){
        return new Date();
    }
}

module.exports = Singleton;

console.log(Singleton.getData());
console.log(Singleton.getData());
console.log(Singleton.getData());
console.log(Singleton.getData());

let inst1 = new Singleton();
let inst2 = new Singleton();

console.log(inst1 === inst2)

// console.log(inst1.getData());
// console.log(inst1.getData());
// console.log(inst1.getData());
// console.log(inst1.getData());
