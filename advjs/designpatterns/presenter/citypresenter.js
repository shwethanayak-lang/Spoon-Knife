import Model from "../model/city1";
import View from "../view/cityview1";

export default class Controller{
    constructor(view){
        this.model = Model;
        this.view = View;       
    }

    initialize(){
        this.model.cityAdded.attach((cityList)=>{this.render(cityList)})
        this.model.cityRemoved.attach((cityList)=>{this.render(cityList)})

        this.view.elements.addBtn.addEventListener('click',()=>{
            let newCity = prompt('Enter a New City');
            if(newCity){
                this.model.add(newCity);
            }
        })
        this.view.elements.removeBtn.addEventListener('click',()=>{
            let index = this.view.elements.cityList.options.selectedIndex;
            if(index!=-1){
                this.model.remove(index);
            }
        })
    }
    render(newCityList){
        //debugger;
        this.view.elements.cityList.innerHTML="";
        for(let city of newCityList){
            this.view.elements.cityList.appendChild(new Option(city,city));
        }
    }
}