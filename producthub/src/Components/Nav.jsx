import React from "react";
import { useContext } from "react";
import { ProductContext } from "../Utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products]=useContext(ProductContext);

let distinct_category=products && products.reduce((acc,cv) =>[...acc,cv.category],[])
  distinct_category =[...new Set(distinct_category)];

  const color=()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()})`
  };

  return (
    <nav className="h-full w-[15%] flex items-center flex-col pt-5 bg-zinc-50">
      <a
        className="py-2 px-5 border-[1.5px] rounded text-blue-400 border-blue-200 "
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-3"></hr>
      <h1 className="text-2xl w-[80%] mb-3 font-medium">Category Filter</h1>
      <div className="w-[80%] ">
       

      {distinct_category.map((c,i)=> (
         <Link  key={i} to={`/?category=${c}`} className="mb-3 flex items-center ">
         <span style={{backgroundColor:color()}} className=" h-[12px] mr-3 w-[12px]   rounded-full "></span>
         {c}
       </Link>
      
      )
    )}
      </div>
    </nav>
  );
};

export default Nav;
