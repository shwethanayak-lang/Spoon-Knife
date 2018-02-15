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
    getTotal(){
        return this.total;
    }
}



let calc=new Calculator(10);
calc.add(10);
console.log(calc.getTotal());