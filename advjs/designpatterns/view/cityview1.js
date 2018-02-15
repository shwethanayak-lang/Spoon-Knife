import Model from "../model/city1";
import Controller from "../presenter/citypresenter";

class View{
    constructor(elements){
        this.elements = elements;
    }
    
}

export default new View({addBtn:document.querySelector('#addBtn'),
removeBtn:document.querySelector('#removeBtn'),
cityList:document.querySelector('#cityList')});