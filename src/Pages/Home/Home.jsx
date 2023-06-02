//DEPNDENCIES
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

//CSS
import "./Home.css";

//COMPONENTS
import Menu from "./../../Utils/Menu";
import Header from "./Header";
import Category from "../Category/Category";

//IMAGES
import bg from "./../../images/header/s_bg.jpg";
import logo from "./../../images/header/logo.png";
import logo2 from "./../../images/header/s_logoC.png";
import arrowImg from "./../../images/header/arrow.png"

function getPos(el) {
    for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return { x: lx, y: ly };
}
function Home({setPro,pro}) {
    const [searchParams, setSearchParams] = useSearchParams();
  const navigator = useNavigate();
    const [levelOne, setLevelOne] = useState(false);
    const [levelTwo, setLevelTwo] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [menu, setMenu] = useState(new Menu());
    const [lang,setLang] = useState("")
    useEffect(() => {
        let lang = searchParams.get("lang");
        setLang(lang);
        setMenu(new Menu(lang));
    }, []);
    const leavingPage = ()=>{
      document.getElementsByClassName("outerContainer")[0].classList.add("contOut")
      document.getElementsByClassName("header")[0].classList.add("headOut")
      document.getElementsByClassName("backBtn")[0].classList.add("buttonOut")
  
      setTimeout(()=>{
        navigator('/',{ replace: true });
      },700)
    }
    const clicked = (i) => {
        let y = getPos(document.getElementsByClassName("categoryContainer")[i]).y;
        const offset = window.innerWidth / 6;
        document.getElementsByClassName("outerContainer")[0].scrollTo({ top: y + offset, behavior: "smooth" });
        setSelectedCategory(i);
    };
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
    return (
        <div className="Main">
          <img className="logo" src={logo2}></img>
            <div onClick={leavingPage} className="backBtn">
              <img src={arrowImg}></img>
            </div>
            <div className="header">
                <img style={{borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"}} src={bg} className="bgim" />
                <img src={logo} className="logoImg" />
            </div>
            {levelOne && (
                <div className="headerLevOne">
                    <img src={logo} className="logoInHeader" />
                </div>
            )}
            {levelTwo && <Header menu={menu} clicked={clicked} selected={selectedCategory} pro={pro} lang={lang} />}

            <div onScroll={onScroll} className="outerContainer">
                <div className="menu">
                    {menu.categories.map((category, i) => {
                        return <Category id={"c" + i} key={i} category={category} setPro={setPro} pro={pro} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
