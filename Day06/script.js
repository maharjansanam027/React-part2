import React, { useState } from "react";
import ReactDOM from "react-dom/client"




const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));

function Counter(){

    // let count = 0; instead by this we can use  hooks
    let [count,setCount] = useState(0);  // it will take array first is initial second is update value

    function increasement(){
        count=count+1;
        setCount(count); // by this DOM is manipulating by react-dom.  it will call Counter function in backend
    }

    function decrement(){
        count = count-1;
        setCount(count);
    }

    
    return(
        <div className="container">
            <p className="para">{`Count :${count}`}</p>
            <button className="btn" onClick={increasement}>{`Increment ${count}`}</button>
            <button className="btn" onClick={decrement}>{`Decrement ${count}`}</button>
        </div>
    )
}

ReactRoot.render(<Counter/>)