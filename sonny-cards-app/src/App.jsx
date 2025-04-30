import './App.css'
import ProductList from './ProductList'
import Cart from './Cart.jsx'
import {useState} from 'react'
function App() {

  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product])
  }

  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div className='flex-col items-center'>
          <h2 className="font-poppins text-3xl text-stone-800 font-bold pb-5 text-center sm:text-left">Sonny Angels</h2>
          < ProductList 
              onAddToCart={handleAddToCart}
          />
        </div>

        <div className="">
          < Cart 
            items={cartItems}
          />
        </div>
      </div>
    </>
  )
}

export default App
