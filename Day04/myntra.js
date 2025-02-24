import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/component/Header";
import Card from "./src/component/Card";
import arr from "./src/utils/dummy";
import Minsection from "./src/component/Minsection";
import Drag from "./src/component/Drag";

const Root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
    return(
        <>
            <Header/>
            <Minsection/>
            <Drag/>
            <div className="content" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
                {/* it should return array or number or string jsx will expext result but not object 
                    if jsx elemet, react element jsx will understand.
                */}
                {
                    arr.map((val,index)=><Card key={index} image={val.image} dresstype={val.dresstype} discount={val.discount} price={val.price}/>)
                }
            </div>
        </>
    )
}


Root.render(<App/>);