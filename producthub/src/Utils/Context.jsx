import axios from "./axios";
import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const ProductContext = createContext();

const Context = (props) => {
  const [Products, setProducts] = useState(null);


  const getproducts=async() =>{
    try {
        const {data} = await axios.get("/products")
        setProducts(data);
    } catch (error) {
        console.log(error); 
    }
  }

  useEffect(() => { 
    getproducts();
  }, []);

  return (
    <ProductContext.Provider value={[Products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;



// Component renders for the first time.

//useEffect runs and calls getproducts().

//getproducts makes an API call using axios.

//Data is received and stored in Products state using setProducts(data).

//Component updates and displays the fetched data.