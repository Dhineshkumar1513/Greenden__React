import React from 'react'
import g1 from './assets/images/g1.webp'
function Hero() {
  return (
    <div className='pl-10 bg-green-100 flex items-center gap-10 justify-evenly'>  
      <div className=''>
        <p className='pt-4'>We offer you a range of aritificial and natural flowers</p>
      <h1 className='text-3xl font-bold pt-4 pb-4'>Plants for your interior</h1>
      <div  className='flex gap-2'>
      <p className='border px-2 py-1 rounded-md bg-black text-green-100'>Shop Now</p>
      <p className='border border-black px-2 py-1 rounded-md bg-green-100'>Watch Video</p>
      </div>
      <p className='pb-4 pt-4'>160+ plant species | 100+ clients</p></div>
      <div className='hidden md:flex w-[500px] p-4 '>
            <img src={g1} alt="" />
      </div>
    </div>
  )
}

export default Hero
