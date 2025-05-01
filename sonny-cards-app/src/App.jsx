import './App.css'
import ProductList from './ProductList'
import Cart from './Cart.jsx'
import ConfirmationModal from './ConfirmationModal.jsx'
import {useState, useRef} from 'react'
import { motion } from "motion/react"

function App() {

  const [cartItems, setCartItems] = useState([])
  const [openedModal, setOpenModal] = useState(false)

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product])
  }

  const handleRemoveFromCart = ((product) => {

    console.log(`${product.name} to remove!`)

    const productCount = cartItems.reduce((acc, item) => {
      if (item.id === product.id) {
        console.log(`${item.name} identified`)
        acc = acc + 1;

      }
      return acc;
    }, 0)

    console.log(`${product.name} count: ${productCount}`)

    if (productCount > 0) {
      // we only want to remove one instance
      const indexToRemove = cartItems.findIndex(item => item.id === product.id);
      const updatedCart = [...cartItems];

      // remove 1 element at indexToRemove
      updatedCart.splice(indexToRemove, 1);

      setCartItems(updatedCart);
    } else {
      const updatedCart = cartItems.filter(item => item.id === product.id);
      setCartItems(updatedCart);
    }
  })

  const handleConfirmationClick = (() => {
    console.log("confirmation button clicked!");
    setOpenModal(true);
  })

  {/* exit modal and reset cart*/}
  const handleModalExit = (() => {
    setOpenModal(false);
    setCartItems([]);
  })


  return (
    <>
    <div>

      <motion.div 
        className="flex flex-col lg:flex-row md:gap-14 w-full pt-10"
      >
        <div className='flex flex-col s'>
          <h2 className="font-poppins text-3xl text-stone-800 font-bold pb-5 text-center sm:text-left">Sonny Angels</h2>
          < ProductList 
              onAddToCart={handleAddToCart}
          />
        </div>

        <div className="flex flex-col h-1/2">
          < Cart 
            items={cartItems}
            onRemoveFromCart={handleRemoveFromCart}
          />

          <motion.button 
            disabled={cartItems.length === 0}
            className={`mt-10 text-white text-lg font-bold sm:w-1/2 lg:w-3/5 mx-auto py-2 px-5 rounded-full
              ${cartItems.length === 0 
                ? 'bg-gray-400  focus:border-gray-400 hover:border-gray-400 cursor-not-allowed' 
                : 'bg-rose-500 hover:bg-rose-600 hover:border-rose-600 focus:border-rose-600'}
            `}
            onClick={handleConfirmationClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
          >
            Confirm Order
          </motion.button>
        </div>

        {openedModal && (
        <div>
          < ConfirmationModal
            items={cartItems} 
            onExit={handleModalExit}
          />
        </div>
      )}

      </motion.div>

    </div>
    </>
  )
}

export default App
