import axios from 'axios'
import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(1)

  const [products, setProducts] = useState([])

  const [cart, setCart] = useState([])

  const url = "https://66a077917053166bcabb8106.mockapi.io/student"

  const fetchProducts = () => {
    axios({
      method: 'get',
      url: url,
    })
      .then(function (response) {
        setProducts(response.data)
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  useEffect(() => {
    fetchProducts()
  },[])

  const addCart = (id) =>{
    const res = products.find(item => item.id === id)
    const index = cart.findIndex(item=>item.id === id)
    if(index>=0){
      let newCart = cart
      newCart[index].quantity++
      setCart(newCart)
    }else{
      setCart([...cart,{...res,quantity:1}])
    }
  }

  const deleteCard=(id)=>{
    setCart(cart.filter(item=>item.id !== id))
  }



  return (
    <AppContext.Provider value={{ count, setCount, cart, addCart, deleteCard }}>
      {children}
    </AppContext.Provider>
  )
}
