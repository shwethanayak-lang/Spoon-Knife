// Modular technique but not extensible
let Calculator=function(val){
    let total=val;
    let add=function(newVal){
        total+=newVal;
    }
    let subtract=function(newVal){
        total-=newVal;
    }
    let multiply=function(newVal){
        total*=newVal;
    }
    let getTotal=function(){
        return total;
    }
    //Closures to expose private 
    //as public interfaces
    //Closures==special objects
    return{
        //These are ES2015 object literal extensions
        //we don't have to repeat it
        add,
        subtract,
        multiply,
        getTotal
    }
}

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
console.log(calc.getTotal());
console.log(calc.sin(45));

//Because calc is object of closure not Caculator
console.log(calc instanceof Calculator)