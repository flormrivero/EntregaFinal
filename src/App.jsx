import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from '../src/components/CartContainer/CartContainer'
import Formulario from "../src/components/Formulario/Formulario"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import CartProvider from './components/Context/CartContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>    
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={< CartContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            <Route path="/Formulario" element={<Formulario />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    
    </div>
  )
}

export default App