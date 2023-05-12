import React, { useEffect, useState } from "react";
import "./Entry.css";
import { useNavigate } from "react-router-dom";
import logo from "./../../images/header/logoC.png";

import bgImage from "./../../images/header/bg.jpg";
import v from "./../../images/bg.mp4";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import flagG from "./../../images/flags/gflag.png"
import flagE from "./../../images/flags/eflag.png"
const photoVertion = false;
function Entry() {
    const [langue, setLang] = useState("");

    useEffect(() => {
        const cont = document.getElementById("fadeCont");
     
        cont.classList.remove("fadeInBg");
        cont.classList.add("fadeOutBg");
        setTimeout(() => {
            cont.style.display = "none";
        }, 700);
    }, []);
    const navigate = useNavigate();
    function changePage(lang) {
        const cont = document.getElementById("fadeCont");

        cont.classList.remove("fadeOutBg");
        cont.classList.add("fadeInBg");

        
        setTimeout(() => {
            navigate("/catalog?lang=" + lang, { replace: true });
        }, 1000);
    }
    const handleChange = (e) => {
        
        if (e.target.value == 10) {
            changePage("el");
        } else if (e.target.value == 20) {
            changePage("en");
        }
        const cont = document.getElementById("fadeCont");
        cont.style.display = "block";
    };
    return (
        <div className="mainCont">
            <div id="fadeCont" className="bgTrans">
            <img id="logoTrans" style={{ zIndex: "30" }} className="logo" src={logo}></img>
            </div>
            
            {
                photoVertion?(
                    <>
                <img className="bgImgae" src={bgImage}></img> 
                <img style={{ zIndex: "30" }} className="logo" src={logo}></img>
                </>
                )
                :
                <video  muted autoPlay playsInline className="video"  loop src={v}></video>
            }

             
           
            
           
            
            <div className="pickLangCont">
                

                <FormControl variant="filled" className="contSelect">
                    <InputLabel id="demo-simple-select-label">Γλώσσα / Language</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={langue} label="Age" onChange={handleChange}>
                        <MenuItem style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} value={10}>Ελληνικά <img style={{height:"20px",width:"auto"}} src={flagG} ></img></MenuItem>
                        <MenuItem style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} value={20}>English  <img style={{height:"20px",width:"auto"}} src={flagE} ></img></MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default Entry;
