import './App.css'
import ProductList from './ProductList'
function App() {

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full">
        <div className='flex-col items-center'>
          <h2 className="font-poppins text-3xl text-stone-800 font-bold pb-5 text-center sm:text-left">Sonny Angels</h2>
          < ProductList />
        </div>

        <div className=" border-1 border-green-500">
          <p>shopping cart</p>
        </div>
      </div>
    </>
  )
}

export default App
