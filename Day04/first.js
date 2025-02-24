import React from "react"
import ReactDOM from "react-dom/client"

const Root = ReactDOM.createRoot(document.getElementById('root')); // it will use to take control of root.

const element1 = <h1>hello bro react</h1> //it will createElement by React module

// JSX : JS expression output leke de means some output it will expect. result produce hona chahiya
// JSX: Statement in  this {} every every js can write that is misconception 

// is we want to give me argument then it will receive argument as object (props)
function Greet(props){
    return <h2>Good Afternoon {props.name}</h2>
}


// there is two types of function call
// const element2 = greet(); //like this 
// const element3 = <Greet/> // another one is like this
{/* <Greet/>   this is function call in jsx*/}
// but the function first letter should be capital letter because this is the jsx part not react.
// every jsx element tag start with small letter eg ul h1 ol p . and if it see the capital letter then 
// it is the user define function it is the rule of jsx function name first letter will be capital


// we can give argument how html attribute we will give like that
// JSX behaviour is like this how html will write like that because it will easy for developer.
Root.render(<Greet id="25" name="sanam Maharjan"/>);