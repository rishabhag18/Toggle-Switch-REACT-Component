import "./toggleSwitch.css"
import { useState } from "react";
const ToggleSwitch=()=>{
    const [isOn,setIsOn]=useState(false);
    const isOnEventHandler=()=>{
        setIsOn(!isOn)
    }
    const checkOn=isOn==true?"on":"off";
    const setClass=`switch ${checkOn}`;
    return (
        <>
        <div className="toggle-switch" onClick={isOnEventHandler} style={{backgroundColor: isOn?"#4caf50":"#ccc"}}>
            <div className={setClass}>
                <span className="switch-state" >{checkOn}</span>
            </div>
        </div>
        </>
    )
}
export default ToggleSwitch;