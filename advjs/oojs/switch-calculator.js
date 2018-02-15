var calculate=function(num){
    return {
        answer : num ? num : 0,
        equals : function() {
          return this.answer
        },
    add : function(num) {
        this.answer+=num
        return this
      },
      subtract : function(num) {
        this.answer-=num
        return this
      },
      multiply : function(num) {
        this.answer*=num
        return this
      }
    }
    
}


var calc=new calculate();
console.log("Calculator adds one to the answer")
calc.add(2)
console.log("sum is = " + calc.equals())





