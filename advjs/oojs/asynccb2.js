

let myFunc = function(msg){
    for(var i=0;i<10;i++){
        setTimeout(function(msg){console.log(msg)}.bind(this,msg),1000)
    }
}

myFunc("hello");
console.log('Im executed First');