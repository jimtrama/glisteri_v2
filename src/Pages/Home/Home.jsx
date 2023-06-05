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
import downArr from "./../../images/down_arrow.png"



function Home({setPro,pro}) {
    const [levelOne, setLevelOne] = useState(false);
    const [levelTwo, setLevelTwo] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [menu, setMenu] = useState(new Menu("el",false));
    const [isEl,setIsEl] = useState(true);
  
    const switchLang = () =>{
        if(isEl){
            setMenu(new Menu('en',menu.isRest))
        }else{
            setMenu(new Menu('el',menu.isRest))
        }
        setIsEl(!isEl);
    }
   
    
    
    
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
                setSelectedCategory(i);
                let x = getPos(document.getElementsByClassName("categoryHeaderContainer")[i]).x;
                document.getElementsByClassName("headerLevTwo")[0].scrollTo({ behavior: "smooth", left: x - 100 });
                break;
            }
        }
    };
    const changed = (e)=>{
        console.log(e);
        setMenu(new Menu(isEl?"el":"en",e.target.checked));
    }
   
    return (
        <div className="Main">
          <img className="logo" src={logo2}></img>
            
            <div className="header">
                <img style={{borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"}} src={bg} className="bgim" />
                <img src={logo} className="logoImg" />
            </div>
            {levelOne && (
                <div className="headerLevOne">
                    <img src={logo} className="logoInHeader" />
                </div>
            )}
            {levelTwo && <Header menu={menu} clicked={clicked} selected={selectedCategory}  m={isEl}  switchLang={switchLang} />}

            <div onScroll={onScroll} className="outerContainer">
               
                <div className="menu">
                    <div style={{display:"flex",justifyContent:"space-evenly",width:"100%"}} >
                        <img className="downArrow" src={downArr}></img>
                        
                        <FormControlLabel control={<Switch onChange={changed} color="secondary" />} label={!isEl?"Switch for Restaurant Menu":"Για Μενού εστιατορίου"} />
                       

                    </div>
                    
                    {menu.categories.map((category, i) => {
                        return <Category id={"c" + i} key={i} category={category} setPro={setPro}  />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
