import './App.css'
import ProductList from './ProductList'
import Cart from './Cart.jsx'
import {useState} from 'react'
function App() {

  const [cartItems, setCartItems] = useState([])

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

  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-10 w-full">
        <div className='flex flex-col md:flex-2 items-center'>
          <h2 className="font-poppins text-3xl text-stone-800 font-bold pb-5 text-center sm:text-left">Sonny Angels</h2>
          < ProductList 
              onAddToCart={handleAddToCart}
          />
        </div>

        <div className="flex md:flex-2">
          < Cart 
            items={cartItems}
            onRemoveFromCart={handleRemoveFromCart}
          />
        </div>

      </div>
    </>
  )
}

export default App
