import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Navbari from './Components/Navbar'
import Product from './Components/Product'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Banners from './Components/Banners'
import ProductDetail from './Components/ProductDetail'
import Cart from './Components/Cart'
import SearchItems from './Components/SearchItems'
import Footer from './Footer'
import { items } from './Components/Data'
import Noban from './Noban'








function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
     
    <Router>
    <Navbari cart={cart} setData={setData}/>

      <Noban>
     <Banners/>
     </Noban>
    
    <Routes>
    
      <Route path='/'element={<Product cart={cart} setCart={setCart}items={data}/>}/>
      <Route path='/product/:id'element={<ProductDetail/>}/>
      <Route path='/search/:term'element={<SearchItems/>}/>
      <Route path='/cart'element={<Cart cart={cart} setCart={setCart}/>}/>
      
    </Routes>
    
   <Footer/>
    
    
    </Router>
    
    
   
   

    
    </>
  )
}

export default App
