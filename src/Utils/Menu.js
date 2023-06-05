import Category from "./Category";
import Product from "./Product";
import photo from "./../images/header/bg.jpg";
import data from "./data";

class Menu {
    constructor(lang, isRest = false) {
        this.categories = [];
        this.lang = lang;
        this.isRest = isRest;
        this.init();
    }

    init() {
        for (let i = 0; i < data.categories.length; i++) {
            if (this.isRest == data.categories[i].isRest) {
                const category = new Category(data.categories[i].title[this.lang]);
                let products = [];
                for (let j = 0; j < data.categories[i].products.length; j++) {
                    const product = data.categories[i].products[j];
                    products.push(new Product(product.title[this.lang], product.price, product.desc[this.lang], product.photo));
                }
                category.setProducts(products);
                this.categories.push(category);
            }
        }
    }
}
export default Menu;
