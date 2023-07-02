//DEPNDENCIES
import React, { useState } from "react";

//CSS
import "./Home.css";

//COMPONENTS
import Menu from "./../../Utils/Menu";
import Header from "./Header";
import Category from "../Category/Category";
import { FormControlLabel, Switch } from "@mui/material";

//IMAGES
import bg from "./../../images/header/s_bg.jpg";
import logo from "./../../images/header/logo.png";
import logo2 from "./../../images/header/s_logoC.png";
import downArr from "./../../images/down_arrow.png";
import el_flag from "./../../images/flags/s_eflag.png";
import en_flag from "./../../images/flags/s_gflag.png";

//icons
import menu_icon from "./../../images/icons/general/menu.png"
import lang_icon from "./../../images/icons/general/language.png"

function Home({ setPro, pro }) {
    const [levelOne, setLevelOne] = useState(false);
    const [levelTwo, setLevelTwo] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [menu, setMenu] = useState(new Menu("el", false));
    const [isEl, setIsEl] = useState(true);
    const [show, setShow] = useState(true);
   

    const switchLang = (value) => {
        if (value) {
            setMenu(new Menu("en", menu.isRest));
            setIsEl(false);
        } else {
            setMenu(new Menu("el", menu.isRest));
            setIsEl(true);
        }
    };

    const clicked = (i) => {
        let y = getPos(document.getElementsByClassName("categoryContainer")[i]).y;
        const offset = window.innerWidth / 6;
        document.getElementsByClassName("outerContainer")[0].scrollTo({ top: y + offset, behavior: "smooth" });
        setSelectedCategory(i);
    };
    function getPos(el) {
        for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
        return { x: lx, y: ly };
    }
    
    const onScroll = (e) => {
        const point1 = window.innerWidth / 2 - 80;
        const point2 = window.innerWidth / 2;
        const scroll = e.target.scrollTop;
        const categories = document.getElementsByClassName("categoryContainer");

        if (point1 < scroll && scroll < point2) {
            setLevelOne(true);
        } else {
            setLevelOne(false);
        }

        if (point2 < scroll) {
            setLevelTwo(true);
        } else {
            setLevelTwo(false);
        }
        
        for (let i = categories.length - 1; i >= 0; i--) {
            if (getPos(categories[i]).y < scroll) {
                
                let x = getPos(document.getElementsByClassName("categoryHeaderContainer")[i]).x;
                document.getElementsByClassName("headerLevTwo")[0].scrollTo({ behavior: "smooth", left: x - 50 });
                setSelectedCategory(i);
                break;
            }
        }
    };
    const changed = (e) => {
        setMenu(new Menu(isEl ? "el" : "en", e.target.checked));
    };

    return (
        <div className="Main">
            {show && (
                <div className="modalContainer">
                    <div style={{ width: "100%", textAlign: "center" }}>
                    
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly",alignItems:"center", marginTop: "10px" }}>
                            <img
                                alt="problem loading"
                                style={{ height: "10vw", width: "auto" }}
                                src={en_flag}
                                onClick={() => {
                                    switchLang(false);
                                }}
                            ></img>
                            <img src={lang_icon}  style={{height:"40px",width:"auto"}}></img>
                            <img
                                alt="problem loading"
                                style={{ height: "10vw", width: "auto" }}
                                src={el_flag}
                                onClick={() => {
                                    switchLang(true);
                                }}
                            ></img>
                        </div>
                    </div>
                    <div style={{ height: "30%", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                        <button
                        style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}
                            className="buttonModal"
                            onClick={() => {
                                changed({ target: { checked: true } });
                                setShow(false);
                            }}
                        >
                            <img style={{height:"30px",width:"auto"}} src={menu_icon} ></img>
                            {isEl ? "Εστιατορίου" : "Restaurant"}
                        </button>
                        <button
                        style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}
                            className="buttonModal"
                            onClick={() => {
                                changed({ target: { checked: false } });
                                setShow(false);
                            }}
                        >
                            <img style={{height:"30px",width:"auto"}} src={menu_icon} >
                            </img>
                            {isEl ? "Παραλίας" : "Beach"}
                        </button>
                    </div>

                    <button
                        className="buttonModal"
                        style={{ color: "black" }}
                        onClick={() => {
                            setShow(false);
                        }}
                    >
                        {!isEl ? "Close" : "Κλείσιμο"}
                    </button>
                </div>
            )}
            <img className="logo" src={logo2}></img>

            <div className="header">
                <img style={{ borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }} src={bg} className="bgim" />
                <img src={logo} className="logoImg" />
            </div>
            {levelOne && (
                <div className="headerLevOne">
                    <img src={logo} className="logoInHeader" />
                </div>
            )}
            {levelTwo && <Header menu={menu} clicked={clicked} selected={selectedCategory} m={isEl} switchLang={switchLang} isEl={isEl} />}

            <div  onScroll={onScroll} className="outerContainer">
                <div className="menu">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%" }}>
                        <img className="downArrow" src={downArr}></img>

                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
                            <Switch onChange={changed} color="primary" />
                            <img style={{height:"40px",width:"auto"}} src={menu_icon} ></img>
                            <span id="gg" style={{marginLeft:"15px"}} >
                                {!isEl ? `${menu.isRest ? "Beach" : "Restaurant"}` : `${menu.isRest ? "Παραλιας" : "Εστιατοριου"}`}
                            </span>
                        </div>
                        
                        <div 
                            style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} 
                            onClick={() => {
                                switchLang(isEl);
                            }}
                        >
                            <img style={{height:"30px",width:"auto",marginRight:"10px"}}  src={lang_icon} ></img>
                            {!isEl ? (
                                <img
                                    alt="problem loading"
                                    style={{ height: "2.2vh", width: "auto" }}
                                    src={en_flag}
                                    
                                ></img>
                            ) : (
                                <img
                                    alt="problem loading"
                                    style={{ height: "2.2vh", width: "auto" }}
                                    src={el_flag}
                                    
                                ></img>
                            )}
                            
                        </div>
                        
                    </div>

                    {menu.categories.map((category, i) => {
                        return <Category id={"c" + i} key={i} category={category} setPro={setPro} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
