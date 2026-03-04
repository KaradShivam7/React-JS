// import Chemo from "./Demo"
// import {Mojo,Memo} from "./Demo"
//import Counter from "./Componets/Counter";
import Holi from "./Componets/Useeffectdemo";
import FetchDemo from "./Componets/FetchDemo";
import First from "./Componets/first";
import Cont from "./Componets/Context";
import { useState } from "react";


function App() {

     // let nav="Shivam";

     // let obj={
     //      "city":"pune",
     //      "pincode":"123456"
     // }

     let[url,seturl]=useState("/get-all/{name}");

     function Changeurl(){
        seturl("/get-all-user");
     }


     return(
          
         <>
         {/* <Chemo></Chemo>
         <Mojo></Mojo>
         <Memo nav={nav}></Memo>
         <Counter></Counter>
         <Holi></Holi> */}
         {/* <h1>inside app.jsx</h1>
         <FetchDemo url={url}></FetchDemo>
         <button onClick={Changeurl}>change_url</button> */}
         <Cont.Provider value="hii from second function">
         <First></First>
         </Cont.Provider>
         </>
      
     )
}

export default App
