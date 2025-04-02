import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className=' flex items-center justify-between w-[70%] p-[8%] h-full  m-auto'>
        
        <img className='h-[70%] w-[40%] object-contain' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        <div className='content w-[55%]'>
        <h1 className='text-4xl '>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3 className='my-3 text-zinc-500'>men's clothing</h3>
        <h2 className='my-2  font-semibold'>$ 109.95</h2>
        <p className='mb-5'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"</p>
        <Link  className="py-1.5 mr-3 px-4 border-[1.5px] rounded text-blue-400 border-blue-400 ">Edit</Link>
        <Link  className="py-1.5 px-4 border-[1.5px] rounded text-red-400 border-red-400 ">Delete</Link>

        </div>
    </div>
  )
}

export default Details