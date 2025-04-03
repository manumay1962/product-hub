import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../Utils/Context'
import Loading from './Loading'
import axios from '../Utils/axios'

const Home = () => {

const [products]=useContext(ProductContext); 

const {search} = useLocation();
const category=decodeURIComponent(search.split("=")[1]);

const [filteredproducts, setfilteredproducts] = useState(null)


const getproductscategory=async()=>{
  try {
    const {data}=await axios.get(`/products/category/${category}`)
    setfilteredproducts(data);
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
  if(!filteredproducts || category=="undefined") setfilteredproducts(products);
  
 if(category !="undefined" ) getproductscategory();
},[category,products])


  return (products?
    <>
    <Nav />
    <div className='w-[85%]  flex gap-7 overflow-x-hidden overflow-y-auto flex-wrap p-10 pt-[3%] '>

      {filteredproducts && filteredproducts.map((p,i)=>
       <Link  key={p.id} to={`/details/${p.id}`} className='rounded mr-3 mb-3 mt-5 card  p-3 border-[2px] shadow justify-center items-center flex  flex-col  h-[32vh] w-[15%] '>
       <div  className=" hover:scale-110 w-[100%] h-[80%] bg-contain bg-center bg-no-repeat  mb-3" style={{backgroundImage:`URL(${p.image})`}}>
       
       
       </div>
       <h1 className='hover:text-blue-700 '>{p.title}</h1>
     </Link>
      
      )}

     
      

    </div>
    </>:<Loading/>
  )
}

export default Home