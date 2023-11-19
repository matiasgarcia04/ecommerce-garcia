import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemlistContainer from './components/ItemlistContainer/ItemlistContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { CartProvider } from './context/CartContext'

function App() {


  return (
    <>
    <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemlistContainer greeting={'Listado de productos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemlistContainer greeting={'Listado de productos filtrados'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </CartProvider> 
    </BrowserRouter>
    </>
  )
}

export default App
