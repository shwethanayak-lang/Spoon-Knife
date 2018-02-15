let Sort = function(){
    return function(){console.log(this.names.sort())}
}
let asyncFunction = function(){
    this.msg = "Hello";
    //let self = this;
    this.names = ['Name4','Name3','Name1','Name2']
    setTimeout(()=>{Sort()},1000);
}

asyncFunction();
console.log("HELLO1****");
