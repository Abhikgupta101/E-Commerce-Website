import React from 'react'
import Product from '../Components/Product'
import Navbar from '../Components/Navbar'
const Homepage = () => {
  const products = 
  [
    {
    id: "0",
    name: "Feather",
    image:"https://unsplash.com/search/photos",
    price: 100,
    count: 0
  },
    {
      id: "1",
      name: "Feather",
      image:"https://images.unsplash.com/photo-1568246621541-5704b4f0bbf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      price: 100,
      count: 0
    },
    {
      id: "2",
      name: "Feather",
      image:"https://images.unsplash.com/photo-1568246621541-5704b4f0bbf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      price: 100,
      count: 0
    },
    {
      id: "3",
      name: "Feather",
      image:"https://images.unsplash.com/photo-1568246621541-5704b4f0bbf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      price: 100,
      count: 0
      
    },
]
  return (
    <div>
      <Navbar/>
      {products.map((prod) => (
      <Product prod={prod} key={prod.id}/>
    ))}
    </div>
  )
}

export default Homepage