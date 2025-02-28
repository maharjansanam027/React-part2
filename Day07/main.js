import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'


function Main(){

    const [color,setColor]=useState("black");

    console.log("render");

    document.body.style.backgroundColor = color;
    return(
        <>
            <h1>Background Color Changer</h1>
            <div className="but">
                <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                <button style={{backgroundColor:"pink"}}>Pink</button>
                <button style={{backgroundColor:"orange"}}>orange</button>
            </div>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)
