import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Colorful from './src/Component/Colorful'


function Main(){

    const [count,setCount] =  useState(0);
    return(
        <>
        <div className="counter">
            <h2>Counter : {count}</h2>
            <button onClick={()=>setCount(count+1)} style={{backgroundColor:"blue",width:"100px"}}>Increment {count}</button>
        </div>
        <Colorful/>
        </>
    )  
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)
