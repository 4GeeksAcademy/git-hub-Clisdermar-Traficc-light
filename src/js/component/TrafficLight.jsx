import React from "react";
import {useState} from "react"
import Container from 'react-bootstrap/Container';


const TrafficLight = () =>{
   const [lightOn,setLightOn] = useState("green");
    return(
        <div className="grandfather">
            <div className="baseOPalito"></div>
            <div className="fatherlight">
                <div onClick={()=>{setLightOn("red")}} className={"light red " + (lightOn == "red" ? "redOn" : "")}></div>
                <div onClick={()=>{setLightOn("yellow")}} className={"light yellow "  + (lightOn == "yellow" ? "yellowOn" : "")}></div>
                <div onClick={()=>{setLightOn("green")}} className={"light green "  + (lightOn == "green" ? "greenOn" : "")}></div> 
            </div>
        </div>

    );
}

export default TrafficLight