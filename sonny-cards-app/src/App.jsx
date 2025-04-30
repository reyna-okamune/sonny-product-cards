import './App.css'
import ProductList from './ProductList'
function App() {

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full">
        <div className='flex-col items-center border-1 border-orange-500'>
          <h2 className="font-poppins text-3xl text-stone-800 font-bold pb-5">Sonny Angels</h2>
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
