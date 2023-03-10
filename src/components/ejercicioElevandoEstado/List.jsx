import { useState } from "react";
import { list } from "../../data/ejercicioElevandoEstado/list"
import { Item } from "./Item";

export const List = ()=>{
    
    const [lista, setLista] = useState(list);

    const removeItem = (item)=>{
        setLista((prev)=> prev.filter((i)=> i !== item ) )
    }

    return (
        <ul>
            {lista.map((i)=>(
              <Item key={i.id} item={i} removeItem={removeItem} />
            ) )  }
        </ul>
    )
}