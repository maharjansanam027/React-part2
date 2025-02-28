import React,{useState,useEffect} from 'react'

const Colorful = ({name}) => {
    const [color,setColor]=useState("black");

    console.log("render");

    // useEffect(callback, dependencies)
    useEffect(()=>{
        console.log("useEffect Executed");
        document.body.style.backgroundColor = color;
    },[color])



    return(
        <>
            {name}
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

export default React.memo(Colorful)
