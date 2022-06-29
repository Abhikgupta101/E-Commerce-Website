import React from 'react'
import Product from '../Components/Product'
import Navbar from '../Components/Navbar'
import { CartState } from "../Context";

const CartPage = () => {
  const {cart, subtotal} = CartState();
  return (
    <div>
      <Navbar/>
      <p>Your Shopping Cart</p>
        {cart.map((prod) => (
          <Product prod={prod} key={prod.id}/>
        ))}
      <p>Subtotal: ${subtotal}</p>
    </div>
  )
}

export default CartPage