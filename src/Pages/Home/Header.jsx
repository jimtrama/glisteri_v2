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
            
            <div className="headerLevTwo">
                {menu.categories.map((categorie, i) => (
                    <div style={{display:"flex",alignItems:"center"}}>
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
                    <img style={{height:"25px",width:"auto",marginRight:"10px"}} src={categorie.icon} ></img>
                     </div>
                    
                ))}
            </div>
            
            
        </div>
    );
}

export default Header;
