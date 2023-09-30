import Products from "./components/Products"
import { products as initialProducts } from './mocks/products.json'
import Header from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"


function App( ) {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <h1>Shopping Cart 🛒</h1>
      <Header/>
      <Products products={filteredProducts}/>
      <Footer/>
    </>
  )
}

export default App
