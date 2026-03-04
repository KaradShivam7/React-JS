import { useContext } from "react"
import Cont from "./Context"

function Second(){

    let usercon=useContext(Cont);
    console.log("Context::"+usercon);
    return(<>
    <h2>hiii feom second</h2>
    <h3>Second:::{usercon}</h3>
    </>)
}

export default Second;