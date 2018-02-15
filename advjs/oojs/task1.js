let myFunc = function(x,y,cb){
    cb(x+y)
}

myFunc(2,3,(function(output){console.log(output)}));

myFunc(5,6,((output)=>console.log(output)));

//Asynchronous

// let myFunc = function(x,y,cb){
//     setTimeout(()=>{cb(x+y)},1000)    
// }

// myFunc(2,3,(function(output){console.log(output)}));

// myFunc(5,6,((output)=>console.log(output)));