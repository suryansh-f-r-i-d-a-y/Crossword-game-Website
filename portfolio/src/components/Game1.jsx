import React from "react";
import "./styles/game1.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";



export default function Game1() {

    const arr= [4,9,10,14,19,20,24,28,29,30,31,32,33,34,38,39,40,44,48,49,50,58,59,60,64,66,68,69,70,71,72,73,74,75,76,77,78,80,84,86,88,94,96,98]
    const place= [2,0,7,25,9,1,24,28]

    const toInputUppercase = (e) => {
        e.target.value = ("" + e.target.value).toUpperCase();
    
    };

    const addInputBox= ()=>{
        const a= document.getElementsByClassName("cell")
        for(let i=0;i<arr.length;i++){
            a[arr[i]].innerHTML= `<input class="valid-boxes" type="text" size="1" maxlength="1"></input>`
        }

    }

    const addListeners= ()=>{
        const a= document.getElementsByTagName("input");
        for(let i=0;i<a.length;i++){
            a[i].addEventListener('input',toInputUppercase)
        }
    }

    const addPlaceholder= ()=>{
        const a= document.getElementsByTagName("input");
        
        for(let i=0;i<place.length;i++){
            a[place[i]].setAttribute('placeholder',i+1);
        }
    }

    const check= ()=>{
        var paths= [[2,5,9,16,20,23,28,37],[0,3,6,13,17],[7,14,18,21,26,36,40,43],[25,34,39,42],[9,10,11,12,13],[1,4,8,15,19,22,27],[24,32,38,41],[28,29,30,31,32,33,34,35,36]]
        var answers= ["MILKYWAY","STARS","POLESTAR","NASA","LUNAR","JUPITER","MOON","ASTRONAUT"]

        const a= document.getElementsByTagName("input");
        const b= document.querySelectorAll(".hint-section p")
        
        for(let i=0;i<paths.length;i++){
            let word="";
            for(let j=0;j<paths[i].length;j++){
                word+= a[paths[i][j]].value;
            }
            if(word===answers[i]){
                b[i].style.color= "lime"
            }
            else{
                b[i].style.color= "red"
            }
        }
    }

    useEffect(() => {
        addInputBox();
        addListeners();
        addPlaceholder();
    });

return (
    <>
    <Link to='/LandingPage'><div className="return"><ion-icon name="arrow-back"></ion-icon> </div></Link>
    <div className="section-main">
    <div id="container">
        {Array(100).fill(<div className="cell"></div>)}
        <button className='check-button' onClick={check}> Check </button> 


    </div>
    <div className="hints">
        <h1 className="heading"> Hints</h1>
        <div className="hint-section">
        <p> 1. Our galaxy </p>
        <p> 2. luminous ball of gas </p>
        <p> 3. brightest star</p>
        <p> 4. Space research organisation </p>
        <p> 5. Related to moon</p>
        <p> 6. Biggest planet </p>
        <p> 7. Earth's only natural satellite</p>
        <p> 8. sapceman :) </p>
        </div>
    </div>
    </div>
    </>
);
}