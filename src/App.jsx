import { useState } from "react"
import Products from "./components/Products"
import { products as initialProducts } from './mocks/products.json'

function App() {

  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducst = (products) => {
    return products.filter( product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  
  return (
    <>
      <h1>Shopping Cart</h1>
      <Products products={products}/>
    </>
  )
}

export default App
