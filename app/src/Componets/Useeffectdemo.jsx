import { useEffect, useState } from "react";


function Holi(){

    let[url,seturl]=useState("/order/get-order");

    let[order,setOrder]=useState([]);

    useEffect(()=>{
        console.log("use effect render!!!");
        
        fetch("http://localhost:8080"+url)
        .then((v)=>{
            return v.json();
        }).then((v)=>{console.log(v);
            setOrder(v);
            console.log("urlllllllllll:"+url);
            
        }).catch((e)=>{console.log(e);
        })


    },[url]);



function Changeurl(){
    seturl("/get-all-order");
}

return(<>
<h1>this is holi component</h1>
<button onClick={Changeurl}>Fetch another</button>
{
    order.map((i)=>{
        return(
            <>
            <h3>{i.orderid}</h3>
            <h3>{i.itemname}</h3>
            <h3>{i.price}</h3>
            <h3>*************</h3>
            </>
        )
    })
}

</>)

}

export default Holi;