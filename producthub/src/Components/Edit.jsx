import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../Utils/Context";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const ChangeHandler = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
   
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 4 ||
      product.image.trim().length < 4 ||
      product.category.trim().length < 4 ||
      String(product.price).trim().length < 1 ||
      product.description.trim().length < 4
    ) {
      alert("Please fill all the fields with atleast 4  characters");
      return;
    }
  const pi=  products.findIndex((p) => p.id == id);
  const copydata=[...products]
  copydata[pi] ={...products[pi],...product};
    
    setproducts(copydata);
    localStorage.setItem("products", JSON.stringify(copydata));
    navigate(-1);
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] flex items-center flex-col w-screen h-screen"
    >
      <h1 className="mb-5 text-2xl font-semibold w-1/2">Edit Product</h1>

      <input
        className="text-1xl bg-zinc-100 mb-3 rounded p-2 w-1/2"
        type="url"
        placeholder="image url"
        name="image"
        onChange={ChangeHandler}
        value={product && product.image}
      />
      <input
        className="text-1xl mb-3 bg-zinc-100 rounded p-2 w-1/2"
        type="text"
        placeholder="title"
        name="title"
        onChange={ChangeHandler}
        value={product && product.title}
      />
      <div className="flex w-1/2 gap-4 justify-between ">
        <input
          className="text-1xl mb-3 bg-zinc-100 rounded p-2 w-1/2"
          type="text"
          placeholder="category"
          name="category"
          onChange={ChangeHandler}
          value={product && product.category}
        />
        <input
          className="text-1xl bg-zinc-100  mb-3 rounded p-2 w-1/2"
          type="number"
          placeholder="price"
          name="price"
          onChange={ChangeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        className="text-1xl mb-3 bg-zinc-100 rounded p-2 w-1/2"
        rows="10"
        placeholder="description"
        name="description"
        onChange={ChangeHandler}

        value={product && product.description}
      />
      <div className="w-1/2 mt-3">
        <button
          className="py-2 px-5  border-[1.5px] rounded text-blue-400 border-blue-200 "
          href="/create"
        >
          Edit Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
