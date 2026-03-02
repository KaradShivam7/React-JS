import { useState } from "react";

function Counter(){

    let[counter,setCounter]=useState(0);

    let[colors,setColors]=useState("blue")

    function Red(){
        setColors("orange")
    }


    
    function Increse(){
        setCounter(counter+1)
    }

    function Decrease(){
        setCounter(counter-1)
    }

    function Reset(){
        setCounter(0)

    }

    function Changecolor(){

    }

    return(
        <>
        <h1 style={{color:"Pink"}}> Counter Function</h1>
        <h2>{counter}</h2>
        <button style={{backgroundColor:"green",margin:"5px"}} onClick={Increse}>Increase</button>
        <button style={{backgroundColor:"blue",margin:"5PX"}} onClick={Decrease}>Decrease</button>
        <button style={{backgroundColor:"yellow", margin:"5PX"}} onClick={Reset}>Reset</button>
        </>
    )
}

export default Counter;
