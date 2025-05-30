//DEPNDENCIES
import React, { useState } from "react";

//CSS
import "./Home.css";

//COMPONENTS
import Menu from "./../../Utils/Menu";
import Header from "./Header";
import Category from "../Category/Category";
import { Switch } from "@mui/material";

//IMAGES
import bg from "./../../images/header/s_bg.jpg";
import logo from "./../../images/header/logo.png";
import el_flag from "./../../images/flags/s_eflag.png";
import en_flag from "./../../images/flags/s_gflag.png";

//icons
import menu_icon from "./../../images/icons/general/menu.png"
import lang_icon from "./../../images/icons/general/language.png"
import info_icon from "./../../images/info.png"
import close_icon from "./../../images/close.png"
import fb_icon from "./../../images/facebook.png"
import insta_icon from "./../../images/instagram.png"
import google_icon from "./../../images/googlemaps.png"
import taxi_icon from "./../../images/taxi.png"
import reserve_icon from "./../../images/reserve.png"
import sunbed_icon from "./../../images/sunbed.png"
function Home({ setPro, pro }) {
    const [levelOne, setLevelOne] = useState(false);
    const [levelTwo, setLevelTwo] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [menu, setMenu] = useState(new Menu("el", false));
    const [isEl, setIsEl] = useState(true);
    const [show, setShow] = useState(true);
    const [infoShow,setInfoShow] = useState(false);
   


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
        setShow(false);
        const point1 = window.innerWidth / 2 - 80;
        const point2 = window.innerWidth / 2 + 20;
        const scroll = e.target.scrollTop;
        const categories = document.getElementsByClassName("categoryContainer");

        if (point1 < scroll && scroll < point2) {
            setLevelOne(true);
            setInfoShow(false);
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
                document.getElementsByClassName("headerLevTwo")[0]?.scrollTo({ behavior: "smooth", left: x - 50 });
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
            <img alt="problem" src={info_icon} onClick={()=>{
                if(infoShow){
                    document.getElementById("info").classList.remove("moveIn");
                    document.getElementById("info").classList.add("moveOut");
                    setTimeout(()=>{setInfoShow(!infoShow)},1000)
                }else
                setInfoShow(!infoShow);
                
                }} className="info" ></img>
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
                            <img alt="error" src={lang_icon}  style={{height:"40px",width:"auto"}}></img>
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
                        style={{display:"flex",justifyContent:"center",alignItems:"center"}}
                            className="buttonModal"
                            onClick={() => {
                                changed({ target: { checked: true } });
                                setShow(false);
                            }}
                        >
                            <img alt="error" style={{height:"30px",width:"auto"}} src={menu_icon} ></img>
                            {isEl ? "Εστιατορίου" : "Restaurant"}
                        </button>
                        <button
                        style={{display:"flex",justifyContent:"center",alignItems:"center"}}
                            className="buttonModal"
                            onClick={() => {
                                changed({ target: { checked: false } });
                                setShow(false);
                            }}
                        >
                            <img alt="error" style={{height:"30px",width:"auto"}} src={menu_icon} >
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

            {
                infoShow&&
                <div id="info" className="infoCont moveIn">
                    <img
                        alt="problem" 
                        onClick={()=>{
                        document.getElementById("info").classList.remove("moveIn");
                        document.getElementById("info").classList.add("moveOut");
                        setTimeout(()=>{setInfoShow(false)},1000)
                    }} src={close_icon} className="closeIcon" ></img>
                    <a href="tel:+306937604194" >
                        <img src={reserve_icon} className="reserve_icon" ></img>
                    </a>
                    
                    <img src={sunbed_icon} className="sun_icon" ></img>
                    
                    
                    <div className="taxi_cont">
                        <img src={taxi_icon} className="taxi_icon" ></img>
                        <a href="tel:+306972429568">CLICK TO CALL</a>
                    </div>

                    
                    <div className="social_cont">
                        <a target="_blank" href="https://web.facebook.com/glysteriskopelos" >
                            <img src={fb_icon} className="social_icon" ></img>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/glysteribeachbar/" >
                            <img src={insta_icon} className="social_icon" ></img>
                        </a>
                        <a target="_blank" href="https://goo.gl/maps/EJ2KNv4JvEXsi8128" >
                            <img src={google_icon}  className="social_icon" ></img>
                        </a>
                    </div>
                </div>
            }


           

            <div className="header">
                <img alt="error" style={{ borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }} src={bg} className="bgim" />
                <img alt="error" src={logo} className="logoImg" />
            </div>
            {levelOne && (
                <div className="headerLevOne">
                    <img alt="error" src={logo} className="logoInHeader" />
                </div>
            )}
            {levelTwo && <Header menu={menu} clicked={clicked} selected={selectedCategory} switchLanguege={switchLang} switchMenu={changed} isEl={isEl}/>}

            <div  onScroll={onScroll} className="outerContainer">
                <div className="menu">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%" }}>

                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
                            <Switch onChange={changed} color="primary"  checked={menu.isRest}/>
                            <img alt="error" style={{height:"40px",width:"auto"}} src={menu_icon} ></img>
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
                            <img alt="error" style={{height:"30px",width:"auto",marginRight:"10px"}}  src={lang_icon} ></img>
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
                        return <Category id={"c" + i} key={i} category={category} setPro={setPro} addMargin={i===0 && levelTwo} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
