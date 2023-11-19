import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart=()=>{
    const{ cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity===0){
            return(
                <div>
                    <h1>No hay items en el carrito</h1>
                    <Link to='/'>Productos</Link>
                </div>
            
            )
    }


    return (
    <div>
        <h1>Cart</h1>
        <div>
            {
                cart.map(prod=>{
                    return(
                        <div key={prod.id} >
                            <h3>Nombre: {prod.name}</h3>
                            <h4>Precio: {prod.price}</h4>
                            <h4>Cantidad elegida: {prod.quantity}</h4> 
                        </div>

                        
                    )
                    
                })
            }
            <h3>Cantidad total: {totalQuantity}</h3>
            <h2>total: ${total}</h2>
            <button onClick={()=>clearCart()}>limpiar carrito</button>
        </div>
            <Link to= '/checkout'>Checkout</Link>

    </div>
)}


export default Cart