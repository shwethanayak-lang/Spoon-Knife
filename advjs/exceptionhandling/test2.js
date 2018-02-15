let add = (x,y)=>{
    if(typeof x !== 'number')
        throw new TypeError('not Numeric');

    if(typeof y !== 'number')
        throw new TypeError('not Numeric');
    
    return x+y;
}

// try{
    console.log(add(2,3));
    console.log(add(4,"gello"));
    
    
// }catch(e){
//     console.log(e)
// }

//onerror = (msg,url,line)=>console.log('message'+msg)