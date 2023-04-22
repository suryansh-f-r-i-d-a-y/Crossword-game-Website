import React from "react";
import "./styles/game2.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Game2() {

    const arr= [16,19,21,26,27,28,29,31,36,39,41,42,43,44,45,46,47,48,49,51,54,55,56,57,59,60,61,62,63,66,69,71,76,79,83,84,85,86,87]
    const place= [3,10,1,0,2,20,25,34]

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
        var paths= [[3,4,5,6],[10,11,12,13,14,15,16,17,18],[1,6,9,18,24,30,33],[0,3,8,15,22,29,32,37],[2,7,10,19,26,31],[20,21,22,23],[25,26,27,28],[34,35,36,37,38]]
        var answers= ["THOR","SPIDERMAN","IRONMAN","STARLORD","VISION","HULK","LOKI","WANDA"]

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
    <div className="section-main2">
    <div id="container">
        {Array(100).fill(<div className="cell"></div>)}
        <button className='check-button' onClick={check}> Check </button> 


    </div>
    <div className="hints">
        <h1 className="heading"> Hints</h1>
        <div className="hint-section">
        <p> 1. God of thunder </p>
        <p> 2. Friendly neighbourhood superhero </p>
        <p> 3. I love you 3000</p>
        <p> 4. Celestial-Human hybrid </p>
        <p> 5. J.A.R.V.I.S became superhero</p>
        <p> 6. Dr banner </p>
        <p> 7. God of  mischief</p>
        <p> 8. The witch</p>
        </div>
    </div>
    </div>
    </>
);

}