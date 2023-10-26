import ItemCount from "../ItemCount/Item Count"

const ItemDetail =({name, img, price, stock, description})=>{
    return(
    <div>
        <h4>{name}</h4>
       <div>
           <img src={img} style={{width:100}}/>
       </div>
       <div>${price}</div>
       <p>descripcion:{description}</p>
       <ItemCount stock={stock}/>
   </div>
    )
}

export default ItemDetail