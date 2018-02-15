let Calculator=function(val){
    this.total=val;
    this.add=function(newVal){
        this.total+=newVal;
    }
    this.subtract=function(newVal){
        this.total+=newVal;
    }
    this.multiply=function(newVal){
        this.total*=newVal;
    }
    this.getTotal=function(){
        return this.total;
    }
}
let ScientificCalculator=function(val){
    //Calculator.call(this,val);
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
console.log(calc.getTotal());
console.log(calc.sin(45));
console.log(calc instanceof Calculator)