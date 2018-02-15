import Module1, * as obj from "./modulesource"

let mod1 = new Module1();
let mod2= new obj.Module2();
let mod3 =new obj.Module3();

console.log(mod1.msg1);
console.log(mod2.msg2);
console.log(mod3.msg3);