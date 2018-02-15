// All Objects will have the reference to Prototype
// Less resources will be consumed

// Prototype is a very special object in JS
// For inheritance as well as for defining methods of class
// It helps to link other objects together
let Calculator=function(val){
    this.total = val;
}
    Calculator.prototype = {
        add:function(newVal){
            this.total+=newVal;
        },
        subtract:function(newVal){
            this.total-=newVal;
        },
        multiply:function(newVal){
            this.total*=newVal;
        },
        getTotal:function(){
            return this.total;
        }
    }

    // Calculator.prototype = {
    //     divide:function(newVal){
    //         this.total /= newVal;
    //     }
    // }

let ScientificCalculator=function(val){
    Calculator.call(this,val);
    this.sin=function(newVal){
        return Math.sin(newVal);
    }
    this.cos=function(newVal){
        return Math.cos(newVal);
    }
}

ScientificCalculator.prototype=Calculator.prototype;
let calc=new ScientificCalculator(10);
calc.add(10);
calc.subtract(5);
//calc.divide(3);
console.log(calc.getTotal());
console.log(calc.sin(45));

//Because calc is object of closure not Caculator
console.log(calc instanceof Calculator)