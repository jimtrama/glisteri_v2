import React from "react";
import Product from "../Product/Product";
import "./Category.css";

function Category({ category ,setPro,pro,addMargin}) {
    return (
        <div className={`categoryContainer ${addMargin&&"extraMargin"} `}>
            <div className="headerContainer">
                <span className="title">{category.title}</span>
                <img alt="" style={{marginLeft:"20px",height:"35px",width:"auto"}} src={category.icon}></img>
                
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
