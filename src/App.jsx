import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemlistContainer from './components/ItemlistContainer/ItemlistContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemlistContainer greeting={'Listado de productos'}/>}/>
        <Route path='/category/:categoryId' element={<ItemlistContainer greeting={'Listado de productos filtrados'}/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
