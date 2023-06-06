import React, { useState } from "react";
import logo from "./../../images/header/s_logo.png";
import el_flag from "./../../images/flags/s_eflag.png";
import en_flag from "./../../images/flags/s_gflag.png";
import "./Header.css";



function Header({ menu, clicked, selected , switchLang,isEl}) {
    
   
    const innerSwitch = (value)=>{
        switchLang(value);
       console.log("edede");
    }
    
    
    return (
        <div className="mainHeaderContainer">
            <img alt="problem loading" className="imageL" src={logo}></img>
            <div className="cartContainer" >
                {/* {
                    !isEl?
                    <img alt="problem loading" style={{height:"2.2vh",width:"auto"}} src={en_flag} onClick={()=>{innerSwitch(true)}} ></img>
                    :
                    <img alt="problem loading" style={{height:"2.2vh",width:"auto"}} src={el_flag} onClick={()=>{innerSwitch(false)}}></img>
                } */}
               
                
            </div>
            <div className="headerLevTwo">
                {menu.categories.map((categorie, i) => (
                    <div
                        key={i}
                        onClick={(e) => {
                            clicked(e.target.id);
                        }}
                        className={selected === i ? "categoryHeaderContainer selected" : "categoryHeaderContainer"}
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
