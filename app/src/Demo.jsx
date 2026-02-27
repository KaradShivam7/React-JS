import {Fun,Kemo} from "./file"

function Chemo(){
    

    let name="Shivam";
    return(
        <h1>My name is : {name}</h1>
    )
}

function Memo(nav){
    console.log(nav.nav);
    return(
        <>
        <h1>memo name is: {nav.nav}</h1>
        <Kemo nav={nav}></Kemo>
        </>
    )
    
}

function Mojo(){

     let obj={
          "city":"pune",
          "pincode":"123456"
     }
    return(
        <>
        <h1>I am in : {obj.city}</h1>
        <Fun></Fun>
        </>
    )
}


export {Mojo,Memo};
export default Chemo;