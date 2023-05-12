import Product from './Product'
class Category{
    constructor(title){
        this.title = title;
        this.products = []
        
    }
    setProducts(products){
        for(const product of products){
            this.products.push(product);
        }
    }
}

export default Category;