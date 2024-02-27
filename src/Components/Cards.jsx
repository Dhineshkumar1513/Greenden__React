import React from 'react'
import img1 from './assets/images/g2.jpg'
import img2 from './assets/images/g3.jpg'
import img3 from './assets/images/g4.png'
import img4 from './assets/images/g5.png'

function Cards() {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mb-8 mt-2'>Best Seller</h1>
      <div className='grid grid-cols-2 gap-2 md:grid-cols-4'>
        <div className='text-center hover:-translate-y-2 '>
           <img src={img1} alt="" className='inline cursor-pointer'/>
           <h1>Rose Plant</h1>
           <p>₹50</p>
        </div>
        <div className='text-center hover:-translate-y-2'>
           <img src={img2} alt="" className='inline cursor-pointer'/>
           <h1>Rose Plant</h1>
           <p>₹50</p>
        </div>
        <div className='text-center  hover:-translate-y-2'>
           <img src={img3} alt="" className='inline cursor-pointer'/>
           <h1>Rose Plant</h1>
           <p>₹50</p>
        </div>
        <div className='text-center hover:-translate-y-2'>
           <img src={img4} alt="" className='inline cursor-pointer'/>
           <h1>Rose Plant</h1>
           <p>₹50</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
