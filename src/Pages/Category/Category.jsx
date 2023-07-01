import React from "react";
import Product from "../Product/Product";
import "./Category.css";

function Category({ category ,setPro,pro}) {
    console.log(category.icon);
    return (
        <div className="categoryContainer">
            <div className="headerContainer">
                <span className="title">{category.title}</span>
                <img style={{marginLeft:"20px",height:"35px",width:"auto"}} src={category.icon}></img>
                
            </div>
            <div className="line"></div>
            <div className="productsContainer">
                {category.products.map((product, i,a) => (
                    <Product key={i} sera={i} array={a} product={product} setPro={setPro} pro={pro}/>
                ))}
            </div>
        </div>
    );
}

export default Category;
