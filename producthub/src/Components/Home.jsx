import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Nav />
    <div className='w-[85%]  flex gap-7 overflow-x-hidden overflow-y-auto  p-10 pt-[3%] '>

      <Link to="/details/1" className='rounded mr-3 mb-3 card p-3 border-[2px] shadow justify-center items-center flex flex-col  h-[32vh] w-[15%] '>
        <div  className=" hover:scale-110 w-[100%] h-[80%] bg-contain bg-center bg-no-repeat  mb-3" style={{backgroundImage:"URL(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}>
        
        
        </div>
        <h1 className='hover:text-blue-300'>Lorem  adipisicing elit. Natus, eaque.</h1>
      </Link>
      

    </div>
    </>
  )
}

export default Home