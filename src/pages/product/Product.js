import React from 'react'
import Products from '../../components/products/Products'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Product() {
  return (
    <div>
      <Header/>
        <Products/>
      <Footer/>
    </div>
  )
}
