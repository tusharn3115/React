import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './index.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';

const App = () => {
  return (
    <>

    {/* navbar */}
      <div className='text-white flex items-center justify-center p-5 gap-16 font-semibold text-xl'>
        <Link to={"/home"}>
          <h2 className='hover:text-gray-400 active:scale-90 cursor-pointer'>Home</h2>
        </Link>
        <Link to="/about">
          <h2 className='hover:text-gray-400 active:scale-90 cursor-pointer'>About</h2>
        </Link>
        <Link to="/contact">
          <h2 className='hover:text-gray-400 active:scale-90 cursor-pointer'>Contact</h2>
        </Link>
        <Link to="/products">
          <h2 className='hover:text-gray-400 active:scale-90 cursor-pointer'>Products</h2>
        </Link>
      </div>


      {/* routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App