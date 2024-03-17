import './App.css'
import Footer from './assets/Components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Wishlist from './assets/Pages/Wishlist'
import Cart from './assets/Pages/Cart'
import View from './assets/Pages/View'
import Home from './assets/Pages/Home'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>




      </Routes>
      <Footer/>
     
    </>
  )
}

export default App
