import React from "react";
import "./styles/game3.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Game3() {

    const arr= [1,11,21,31,41,51,40,42,43,44,45,46,47,48,49,39,59,69,29,19,27,26,24,25,56,66,76,86,96,92,93,94,95,97,98,85,84,87,88,89,17,37,57,67]
    const place= [0,19,2,3,5,13,31,37]

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
        var paths= [[0,1,4,10,14,23],[19,24,27,30,33,41],[2,8,11,20,25,28],[3,9,12,22,25,28],[5,6,7,8],[13,14,15,16,17,18,19,20,21,22],[31,32,33,34,35,36],[37,38,39,40,41,42,43]]
        var answers= ["SAKURA","MADARA","MINATO","NARUTO","NEJI","OROCHIMARU","KURAMA","TSUNADE"]

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
    <div className="section-main3">
    <div id="container">
        {Array(100).fill(<div className="cell"></div>)}
        <button className='check-button' onClick={check}> Check </button> 


    </div>
    <div className="hints">
        <h1 className="heading"> Hints</h1>
        <div className="hint-section">
        <p> 1. Most hated character</p>
        <p> 2. Ghost of uhicha</p>
        <p> 3. 4th hokage</p>
        <p> 4. Dattebayo!</p>
        <p> 5. Hyuga prodigy</p>
        <p> 6. The snake </p>
        <p> 7. The fox</p>
        <p> 8. 106 </p>
        </div>
    </div>
    </div>
    </>
);

}