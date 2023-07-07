import React from "react";
import "./Product.css";


function Product({ product, sera, array,setPro ,pro}) {
  
   
    

  function addProduct(){
    setPro([...pro,product]);
  }
    return (
        <div onClick={addProduct} className={sera === array.length - 1 ? "productCont last" : "productCont"}>
            <div className="productInfo">
                <span className="productTitle">{product.title}</span>
                <span className="productDesc">{product.desc}</span>
                <span className="productPrice">{product.price + " €"} </span>
            </div>
            <div className="productPhotoCont">
                {
                    product.photo != null &&
                    <img alt="error" id={sera} loading="lazy" className="productPhoto" src={product.photo}></img>
                }
               
            </div>
        </div>
    );
}

export default Product;
