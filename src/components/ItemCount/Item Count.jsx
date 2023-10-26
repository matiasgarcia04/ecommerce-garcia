import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]=useState(1)

    const quitar = () =>{
        if(count >1){
           setCount(prev=>prev -1) 
        }
        
    }
    const agregar = () =>{
        if(count < stock){
          setCount(prev=>prev +1)  
        }
        
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={quitar}>quitar</button>
            <button onClick={()=>onAdd(count)}>agregar al carrito</button>
            <button onClick={agregar}>agregar</button>
        </div>
    )
}

export default ItemCount