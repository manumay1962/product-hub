import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));

    if (storedProducts && storedProducts.length > 0) {
      setproducts(storedProducts);
    } else {
      // First-time fetch
      axios.get("/products")
        .then((res) => {
          setproducts(res.data);
          localStorage.setItem("products", JSON.stringify(res.data));
        })
        .catch((err) => console.error("Error fetching products:", err));
    }
  }, []);

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
