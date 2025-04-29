import { useState } from 'react'
import './App.css'
import ProductList from './ProductList'
function App() {

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className="font-poppins text-red-500 pb-10">Sonny Angels</h1>
        < ProductList />
      </div>
    </>
  )
}

export default App
