import { useEffect, useState } from "react";

function UseFetch(url){

    console.log("url",url.url);

    const url2=url.url;


    let[loading,setLoading]=useState(true);
    let[data,setData]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/"+url.url)
        .then((v)=>{return v.json()})
        .then((v)=>{
            setData(v);
            console.log(v);
            
        }).catch((e)=>{console.log(e);
        }).finally(()=>{
            setLoading(false);
        })
    },[url2])

    return([loading,data]);
}

export default UseFetch;