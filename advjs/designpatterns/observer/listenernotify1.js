import Model from "../model/city1";

export default class Observer{
    constructor(){
        this.observers = [];
        this.model = Model;
    }

    attach(cb){
        this.observers.push(cb);
    }
    notify(newCity){
        this.observers.forEach((cb)=>{cb(newCity)})
    }
}