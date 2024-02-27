import React from 'react'
// import Contact from './Contact'
import { Link } from "react-router-dom";

function Nav() {
  var menu=()=>{
    var menu=document.getElementById('slidebar')
    menu.style.display="flex"
    menu.style.marginLeft='60%'
  }
  var closebtn=()=>{
    var slide =document.getElementById("slidebar")
    slide.style.marginLeft="100%"
  }
  

    return (
    <div className='flex justify-between bg-green-100 p-3 shadow-2xl sticky top-0 z-10'>
      <h1 className='text-3xl'>Greenden</h1>
      <svg xmlns="http://www.w3.org/2000/svg" onClick={menu} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 md:hidden">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
<div className='hidden md:flex gap-4 text-gray-500 '>
  <Link to={'/'} className='hover:text-black'>Home</Link>
  <Link to={'/product'} className='hover:text-black ' >Products</Link>
  <Link to={'/contact'} className='hover:text-black'>Contact</Link>
</div>
<div class="w-full	h-full z-10 bg-green-100 ml-96 hidden flex-col gap-3 fixed pl-4 font-bold duration-700 md:hidden" 
id="slidebar" >
      <p><button onClick={closebtn}>X</button></p>
      <Link to={'/'}>Home</Link>
      <Link to="/product">Products</Link>
    
      <Link to="/contact">Contact</Link>
    </div>
    </div>
  )
}

export default Nav
