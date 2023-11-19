import { useContext, useState } from "react"
import ItemCount from "../ItemCount/Item Count"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail =({ id, name, img, price, stock, description})=>{
   const [quantityAdded, setQuantityadded]= useState(0)

    const {addItem} = useContext(CartContext)

   const handleOnAdd =(quantity) =>{
    setQuantityadded(quantity)

    const item = {
        id, name, price,
    }

    addItem(item, quantity)

   }
   
   
    return(
    <div>
        <h4>{name}</h4>
       <div>
           <img src={img} style={{width:100}}/>
       </div>
       <div>${price}</div>
       <p>descripcion:{description}</p>
       
       {
         quantityAdded > 0 ? (
            <Link to='/cart'>Terminar compra </Link>
         ) : (
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
         )
       }
   </div>
    )
}

export default ItemDetail