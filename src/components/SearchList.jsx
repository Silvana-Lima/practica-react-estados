import { useState } from "react"

export const SearchList = ({list})=>{

    const [data, setData] = useState(list)
    const [search, setSearch ] = useState("");

    const handleSearch = (e)=>{
        setSearch(e.target.value);
        
        const textFilter = list.filter((i)=> i.toLowerCase().includes(e.target.value.toLowerCase()));

        setData(textFilter)
        
    }

    const handleRemove = (item)=>{
        setData((prev)=> prev.filter((i)=> i !== item))
    }

    return(
        <div>
            
            <input type="text" onChange={handleSearch}/>
            <ul>
            { data.map((i)=> 
             <li key={i}>{i}  <button onClick={()=> handleRemove(i)}>Eliminar</button> </li>) }
            
            </ul>
        </div>
    )
}