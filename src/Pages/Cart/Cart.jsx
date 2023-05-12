import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./../Home/Home.css";
import "./../Category/Category.css"
import "./../Product/Product.css"

//IMAGES
import bg from "./../../images/header/bg.jpg";
import logo from "./../../images/header/logo.png";

import logo2 from "./../../images/header/logoC.png";
import arrowImg from "./../../images/header/arrow.png";
function Cart({ pro, setPro }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigator = useNavigate();
    const [levelOne, setLevelOne] = useState(false);
    const [lang, setLang] = useState("");

    useEffect(() => {
        setLang(searchParams.get("lang"));
    }, []);

    function remove(i){
        
        setPro(pro.filter((v,index)=>i!=index))
       
    }
    const leavingPage = () => {
        document.getElementsByClassName("outerContainer")[0].classList.add("contOut");
        document.getElementsByClassName("header")[0].classList.add("headOut");
        document.getElementsByClassName("backBtn")[0].classList.add("buttonOut");

        setTimeout(() => {
            navigator("/catalog?lang=" + lang, { replace: true });
        }, 700);
    };

    const onScroll = (e) => {
        const point1 = window.innerWidth / 2 - 80;
        const scroll = e.target.scrollTop;
        const categories = document.getElementsByClassName("categoryContainer");

        if (point1 < scroll) {
            setLevelOne(true);
        } else {
            setLevelOne(false);
        }
    };
    return (
        <div className="Main">
            <img className="logo" src={logo2}></img>
            <div onClick={leavingPage} className="backBtn">
                <img src={arrowImg}></img>
            </div>
            <div className="header">
                <img style={{ borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }} src={bg} className="bgim" />
                <img src={logo} className="logoImg" />
            </div>
            {levelOne && (
                <div className="headerLevOne">
                    <img src={logo} className="logoInHeader" />
                </div>
            )}

            <div onScroll={onScroll} className="outerContainer">
                <div className="menu">
                    <div className="productsContainer">
                        {pro.map((product,i) => (
                            <div className="productCont">
                                <div className="productInfo">
                                    <span className="productTitle">{product.title}</span>
                                    <span className="productDesc">{product.desc}</span>
                                </div>
                                <button className="removeBtn" onClick={()=>{remove(i)}} >
                                    {lang=="el"?"Αφαίρεση":"Remove"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
