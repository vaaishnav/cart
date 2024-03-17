import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../../REDUX/Slices/productSlice'

function Header({insideHome}) {
  const dispatch = useDispatch()
  const cartCount = useSelector(state=>state.cartReducer).length
  const wishlistCount =useSelector(state=>state.wishlistReducer).length
  return (
    <>
      <Navbar style={{zIndex:'100'}}  className='bg-black position-fixed top-0 w-100'>
        <Container >

          <div class="d-flex justify-content-evenly">
            <Link to={'/'} style={{ textDecoration: "none" }}>
              <Navbar.Brand style={{ color: "white", fontSize: "30px" }}>
                <i class="fa-solid fa-truck-fast fa-beat-fade fa-bounce fs-2 me-2" style={{ color: 'white' }}></i>
                <strong>Cart</strong>
              </Navbar.Brand>
            </Link>
          </div>
        { 
        insideHome &&
         <div className="d-flex">
              <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLocaleLowerCase()))} type="text" className='form-control me-1' placeholder='Search Products!!!' />
          </div>}

          <div class="d-flex flex-row-reverse bd-info">

              <div class="p-2 ">
                <Link to={'/cart'} style={{ textDecoration: "none",color:'white' }}>
                  <i className="fa-solid fa-cart-shopping me-1" style={{color:'#FFD43B'}}></i>
                  <strong>CART</strong>
                  <span className='bg-white rounded-circle m-1 p-1  text-dark'>{cartCount}</span>
                </Link>
              </div>
              <div className="p-2 me-5">
                <Link to={'/wishlist'} style={{ textDecoration: "none" ,color:'white' }}>
                  <i class="fa-solid fa-heart bd-highlight me-1 text-danger"></i>
                   <strong>WISHLIST</strong>
                   <span className='bg-white rounded-circle m-1 p-1 text-dark'>{wishlistCount}</span>
                </Link>
              </div>
            </div>

        </Container>
      </Navbar>
    </>
  )
}

export default Header