import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import carrito from './assets/carrito.jpg'
import { useNavigate } from 'react-router-dom'

const CartWidget =() => {
    const {totalQuantity} = useContext(CartContext)

    const navigate=useNavigate()

    return(
        <div onClick={()=>navigate('/cart')}>
            <img src={carrito} className='logo'/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget