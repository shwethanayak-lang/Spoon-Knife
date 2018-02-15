const order = {email:'asfsd@gmail.com'}
try{
    //Reference error
  //  myFunction();

    //Type Error
   // null.myFunction();

    eval('Hello something')
    if(!order.name)
        throw new SyntaxError('SyntaxError: Order has no name')


    order.name;
}catch(e){
    console.log(e.message)
    console.log(e.name)
    console.log(e instanceof ReferenceError)
}

finally{
    console.log("inside Finally")
}

console.log('hello')