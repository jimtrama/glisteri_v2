import React from "react";
import Product from "../Product/Product";
import "./Category.css";

function Category({ category ,setPro,pro}) {
    return (
        <div className="categoryContainer">
            <div className="headerContainer">
                <span className="title">{category.title}</span>
                <div className="line"></div>
            </div>
            <div className="productsContainer">
                {category.products.map((product, i,a) => (
                    <Product key={i} sera={i} array={a} product={product} setPro={setPro} pro={pro}/>
                ))}
            </div>
        </div>
    );
}

export default Category;
