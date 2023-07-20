import Category from "./Category";
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
                    products.push({
                        title:product.title[this.lang], 
                        price:product.price, 
                        desc:product.desc[this.lang],
                        photo:product.photo,
                        isVideo:product.isVideo
                        });
                }
                category.setProducts(products);
                category.icon = data.categories[i].icon;
                this.categories.push(category);
            }
        }
    }
}
export default Menu;
