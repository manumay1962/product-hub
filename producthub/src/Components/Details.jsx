
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';
import { ProductContext } from '../Utils/Context';

const Details = () => {
  const [products,setproducts]=useContext(ProductContext)
  const {id}=useParams();
  const [product, setproduct] = useState(null)
 

    useEffect(()=>{
      if(!product){
          setproduct(products.filter((p)=>p.id==id)[0])
      }
    },[]);


  return (product ?
    <div className=' flex items-center justify-between w-[70%] p-[8%] h-full  m-auto'>
        
        <img className='h-[70%] w-[40%] object-contain' src={`${product.image}`} alt="" />
        <div className='content w-[55%]'>
        <h1 className='text-4xl '>{product.title}</h1>
        <h3 className='my-3 text-zinc-500'>{product.category}</h3>
        <h2 className='my-2  font-semibold'> $ {product.price}</h2>
        <p className='mb-5'>{product.description}</p>
        <Link  className="py-1.5 mr-3 px-4 border-[1.5px] rounded text-blue-400 border-blue-400 ">Edit</Link>
        <Link  className="py-1.5 px-4 border-[1.5px] rounded text-red-400 border-red-400 ">Delete</Link>

        </div>
    </div>:<Loading />
  )
}

export default Details