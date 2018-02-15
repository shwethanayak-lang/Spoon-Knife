class Page{
    constructor(){
        this.message = "This is default Page"
    }
}

class SearchPage extends Page{
    constructor(){
        super();
    }
}

class CartPage extends Page{
    constructor(){
        super();
    }
}

class PaymentPage extends Page{
    constructor(){
        super();
    }
}

class AboutPage extends Page{
    constructor(){
        super();
    }
}

class PostPage extends Page{
    constructor(){
        super();
    }
}

class WebsiteFactory{
    static createWebsite(type){
        switch(type){
            case "Ecom":
                return{
                    searchpage: new SearchPage(),
                    cartpage: new CartPage(),
                    paymentpage: new PaymentPage()
                } 
                break;
            case "Blog":
                return{
                    aboutpage: new AboutPage(),
                    postpage: new PostPage()
                } 
                break;
            default:
                return new Page()
        }
    }
}

let inst =WebsiteFactory.createWebsite('Ecom');
console.log(inst.searchpage);
console.log(inst.cartpage);