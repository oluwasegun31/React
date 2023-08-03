import Details from "./Details";
import DataContext from "./DataContext";
import { useContext } from "react";

export default function Data(){
    const data = useContext(DataContext)
    console.log(data)
    const {name, id, updateName} = data
    return(
        <>
            <h5>Data</h5>
            <p>{name}{id}</p>
            <button onClick={()=> updateName('john')}>Change</button>
            <Details />
        </>
    )
}
