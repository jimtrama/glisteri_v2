import React, { useEffect, useState } from "react";
import "./Product.css";


function Product({ product, sera, array,setPro ,pro}) {
  
    const [imgl,setimgl] = useState(false);
    useEffect(()=>{
        const im = document.getElementById(sera);
        console.log(im);
        im.onload = (e) => {
            console.log("fff");
        }
    },[])

  function addProduct(){
    setPro([...pro,product]);
  }
    return (
        <div onClick={addProduct} className={sera == array.length - 1 ? "productCont last" : "productCont"}>
            <div className="productInfo">
                <span className="productTitle">{product.title}</span>
                <span className="productDesc">{product.desc}</span>
                <span className="productPrice">{product.price + "€"}</span>
            </div>
            <div className="productPhotoCont">
                <img id={sera} loading="lazy" className="productPhoto" src={product.photo}></img>
            </div>
        </div>
    );
}

export default Product;
