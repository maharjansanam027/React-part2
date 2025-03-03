import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'

function Main(){

    const [password,setPassword] = useState("");
    const [length,setLength] = useState(10);
    const [number,setNumber] = useState(false);
    const [charPass,setCharPass] = useState(false);

    const generatePassword = useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMANOPQRSTUVWXYZ";
       if(number)
        str+="123456789";
       if(charPass)
        str+="/*-+=!@#$%^^&*()`?<>;"

        let pass = "";

        for(let i=0;i<length;i++){
            
            pass += str[Math.floor(Math.random()*str.length)];
        }
        setPassword(pass);
    },[length,number,charPass])

    useEffect(()=>{
        //we cannot simly leave this function call without useEffect. it will go on infinate loop.so for 
        // solution we use useEffect which will run at last one time if we didnt give dependencies.
        generatePassword();
    },[generatePassword])
    return(
        <>
       
            <h2>{password}</h2>
            <div className="container">
                <input type="range" min={5} max={20} value={length} onChange={(e)=>setLength(e.target.value)}/>
                <label>Length {`(${length})`}</label>
                <input type="checkbox" defaultChecked={number} onChange={()=>setNumber(!number)}/>
                <label>Number</label>

                <input type="checkbox" defaultChecked={charPass} onChange={()=>setCharPass(!charPass)}/>
                <label>Character</label>
            </div>
        </>
    )
}





ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);