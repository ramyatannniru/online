const products = require('../dbs/products').products;


class ProductService {
    constructor(){
        
        this.products = products;
    }
   
    getAllproducts(){
        return this.products;
    }
    // verify if valid credentials
     
    
    _add(products){
        this.products.push(products);
        return this.products;
    }
    search(productname)

    {
          return this.products.find((u)=>
          {
             return u.name==name
          });

    }
}

module.exports.ProductService = ProductService;
