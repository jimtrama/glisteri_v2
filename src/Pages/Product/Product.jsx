import React from "react";
import "./Product.css";

function Product({ product, sera, array }) {
  return (
    <div
      className={sera === array.length - 1 ? "productCont last" : "productCont"}
    >
      <div className="productInfo">
        
          <span className="productTitle">{product.title}</span>
      
        {product.desc != "" && <span className="productDesc">{product.desc}</span> }
          <span className="productPrice">{product.price}</span>
      </div>
      <div className="productPhotoCont">
        {product.photo && product.isVideo !== true ? (
          <img
            alt="error"
            id={sera}
            loading="lazy"
            className="productPhoto"
            src={product.photo}
          ></img>
        ) : product.isVideo ? (
          <video
            playsInline
            id={sera}
            muted
            autoPlay
            loop
            className="productPhoto"
            src={product.photo}
          ></video>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Product;
