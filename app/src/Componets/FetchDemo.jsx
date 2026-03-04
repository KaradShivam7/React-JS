import UseFetch from "./useFetch";

function FetchDemo({url}){

    console.log(url);

    let[loading,data]=UseFetch({url});

    if(loading)
        return(
            <>
            <h1>data is loading</h1>
            </>
        )
    if(!loading)
    {
        console.log(data);
        return(<>
        <h1>Check log data has arrived</h1>
        {
            data.map((i)=>{
                return(<>
                <h2>{i.name}</h2>
                <h2>{i.mobile}</h2>
               
                </>)
            })
        }
        </>)
        
    }

    
}

export default FetchDemo;