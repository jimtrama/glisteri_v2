import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../images/header/s_logo.png";
import cart from "./../../images/header/cart.png";
import "./Header.css";

function Header({ menu, clicked, selected ,pro,lang}) {
    const navigator = useNavigate();

    function goToCart (){
        navigator('/cart?lang='+lang,{ replace: true });
    }

    return (
        <div className="mainHeaderContainer">
            <img className="imageL" src={logo}></img>
            <div className="cartContainer" onClick={goToCart}>
                <img className="cartImg" src={cart} ></img>
                <span className="lengthOfCart">{pro.length}</span>
            </div>
            <div className="headerLevTwo">
                {menu.categories.map((categorie, i) => (
                    <div
                        key={i}
                        onClick={(e) => {
                            clicked(e.target.id);
                        }}
                        className={selected == i ? "categoryHeaderContainer selected" : "categoryHeaderContainer"}
                        id={i}
                    >
                        {categorie.title}
                    </div>
                ))}
            </div>
            
            
        </div>
    );
}

export default Header;
