import Chemo from "./Demo"
import {Mojo,Memo} from "./Demo"


function App() {

     let nav="Shivam";

     let obj={
          "city":"pune",
          "pincode":"123456"
     }


     return(
          
         <>
         <Chemo></Chemo>
         <Mojo></Mojo>
         <Memo nav={nav}></Memo>
         </>
      
     )
}

export default App
