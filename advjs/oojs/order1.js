class Order{
    constructor(orderId,orderName,orderStatus,orderPurchaseDate){
        this.orderId = orderId;
        this.orderName = orderName;
        this.orderStatus = orderStatus;
        this.orderPurchaseDate = orderPurchaseDate;
    }
}

let array = [];

let Sort = function(mainArray){
    let sortedArray = [];
    for (let i in mainArray){
        if(mainArray[i].orderStatus === "Completed")
            sortedArray.push(mainArray[i]);
    }
    return sortedArray;
}

let order1 = new Order(101,"Samsung_S8","New","21/01/2018");
array.push(order1);
let order2 = new Order(102,"Oneplus5","Processing","22/01/2018");
array.push(order2);
let order3 = new Order(103,"Nokia6","Completed","22/01/2018");
array.push(order3);
let order4 = new Order(104,"Nubia3","Processing","01/01/2018");
array.push(order4);
let order5 = new Order(105,"Nubia03","Processing","04/01/2018");
array.push(order5);
let order6 = new Order(106,"PenDocket","Completed","07/12/2017");
array.push(order6);
let order7 = new Order(107,"Nokia8","New","04/02/2018");
array.push(order7);

let sortedArray = array.filter(function(o1){
    return o1.orderStatus === "Completed"   
});


for(let i in sortedArray){
    console.log(sortedArray[i]);
}

