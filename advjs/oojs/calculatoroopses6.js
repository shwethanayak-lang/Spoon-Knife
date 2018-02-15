class Calculator{
    constructor(val){
    this.total=val;}
    add(newVal){
        this.total+=newVal;
    }
    subtract(newVal){
        this.total+=newVal;
    }
    multiply(newVal){
        this.total*=newVal;
    }
    getTotal=function(){
        return this.total;
    }
}
class ScientificCalculator extends Calculator{
    //Calculator.call(this,val);
    constructor(val){
        super(val)
    }
    
    sin(newVal){
        return Math.sin(newVal);
    }
    cos(newVal){
        return Math.cos(newVal);
    }
}

let calc=new ScientificCalculator(10);
calc.add(10);
console.log(calc.getTotal());
console.log(calc.sin(45));
console.log(calc instanceof Calculator)