export default class Observer{
    constructor(){
        this.observers = [];
    }

    attach(cb){
        debugger;
        this.observers.push(cb);
    }
    notify(newCity){
        debugger;
        this.observers.forEach((cb)=>{debugger; cb(newCity)})
    }
}