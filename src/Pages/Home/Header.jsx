import React from "react";
import logo from "./../../images/header/s_logo.png";
import el_flag from "./../../images/flags/s_eflag.png";
import en_flag from "./../../images/flags/s_gflag.png";
import "./Header.css";

import { Switch } from "@mui/material";

//icons
import menu_icon from "./../../images/icons/general/menu.png"
import lang_icon from "./../../images/icons/general/language.png"



function Header({ menu, clicked, selected , switchLanguege,switchMenu,isEl}) {
    
   
    
    
    return (
        <div className="mainHeaderContainer">
            <div className="topHeader">
                <div className="headerSwitchContainer">
                    <img alt="error" style={{height:"40px",width:"auto"}} src={menu_icon} ></img>
                    <Switch onChange={switchMenu} color="primary"  checked={menu.isRest} size="small"/>
                </div>
                <img alt="problem loading" className="imageL" src={logo}></img>
                <div 
                            className="headerLanguageCont"
                            onClick={() => {
                                switchLanguege(isEl);
                            }}
                        >
                            <img alt="error" style={{height:"20px",width:"auto",marginRight:"20px"}}  src={lang_icon} ></img>
                            {!isEl ? (
                                <img
                                    alt="problem loading"
                                    style={{ height: "1.5vh", width: "auto" }}
                                    src={en_flag}
                                    
                                ></img>
                            ) : (
                                <img
                                    alt="problem loading"
                                    style={{ height: "1.5vh", width: "auto" }}
                                    src={el_flag}
                                    
                                ></img>
                            )}
                            
                        </div>
            </div>
           
            
            <div className="headerLevTwo">
                {menu.categories.map((categorie, i) => (
                    <div key={"h"+i} style={{display:"flex",alignItems:"center"}}>
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
                    <img alt="error" style={{height:"25px",width:"auto",marginRight:"10px"}} src={categorie.icon} ></img>
                     </div>
                    
                ))}
            </div>
            
            
        </div>
    );
}

export default Header;
