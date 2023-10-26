import { Link } from "react-router-dom"

const Item =({name, img, price, id})=>{
    return(
    <div>
        <h4>{name}</h4>
       <div>
           <img src={img} style={{width:100}}/>
       </div>
       <div>${price}</div>
        <Link to={`/item/${id}`}>ver detalle</Link>
   </div>
    )
}

export default Item