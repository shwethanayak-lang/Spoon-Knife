
let asyncFunction = function(){
    this.msg = "Hello";
    this.names = ['Name4','Name3','Name1','Name2']
    let p = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(this.names.sort())},1000)
    });
    return p;
}

asyncFunction().then(function(sortedValues){
    console.log(sortedValues);
});
console.log("HELLO1****");
