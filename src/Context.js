import { createContext, useState, useContext } from "react";

export const Cart = createContext()

function Context({children}) {
    const [cart, setCart] = useState([]) //This will contain product info. eg. product img, des, price, etc 
    const [count, setCount] = useState(0) // This will contain number of count of products in a cart
    const [subtotal, setSubtotal] = useState(0) // This will contain total price of cart
  return (
    <Cart.Provider value={{cart, setCart, count, setCount, subtotal, setSubtotal}}>
        {children}
    </Cart.Provider>
  )
}

export const CartState = () => {
  return useContext(Cart);
};

export default Context