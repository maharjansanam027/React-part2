import React,{useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/component/Header";
import Card from "./src/component/Card";
import arr from "./src/utils/dummy";
import Minsection from "./src/component/Minsection";
import Drag from "./src/component/Drag";

const Root = ReactDOM.createRoot(document.getElementById('root'));

function App(){

    const [A,setA] = useState(arr);
    function sortArray(){
        A.sort((a,b)=>a.price-b.price);
        console.log(A)
        setA([...A]); 
        // now also it is not manipulating DOM because of reference object is store in heap and that address will store in stack so changes will not show in DOM . react will not allow simply manipulation
      }
      function highToLow(){
        A.sort((a,b)=>b.price - a.price);
        setA([...A]);
      }
      function priceAbove(){
        const B = A.filter((val)=>val.price>10000)
        setA([...B])
      }
    return(
        <>
            <Header/>
            <Minsection/>
            <Drag/>
            <div style={{display:'flex',justifyContent:'center',gap:"10px",padding:"20px"}}>
                <button className='low-to-high-button' onClick={sortArray}>Price Low to High</button>
                 <button className='low-to-high-button' onClick={highToLow}>Price High to Low</button>
                 <button className='low-to-high-button' onClick={priceAbove}>Price 10k+</button>
            </div>
            <div className="content" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
                {/* it should return array or number or string jsx will expext result but not object 
                    if jsx elemet, react element jsx will understand.
                */}
                {
                    A.map((val,index)=><Card key={index} image={val.image} dresstype={val.dresstype} discount={val.discount} price={val.price}/>)
                }
            </div>
        </>
    )
}


Root.render(<App/>);