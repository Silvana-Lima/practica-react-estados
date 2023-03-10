export const Item = ({item, removeItem} )=>{

    return(
       
          <li>{item.text} <button onClick={()=>removeItem(item) }>Eliminar</button></li>
     
        
    )
}