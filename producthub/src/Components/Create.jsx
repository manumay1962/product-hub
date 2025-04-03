import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import { nanoid } from "nanoid";

const Create = () => {
  const [products, setproducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Please fill all the fields with atleast 4  characters");
      return;
    }
    const product = {
      id: nanoid(),
      title,
      description,
      price,
      category,
      image,
    };
    setproducts([...products, product]);
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] flex items-center flex-col w-screen h-screen"
    >
      <h1 className="mb-5 text-2xl font-semibold w-1/2">Add New Product</h1>

      <input
        className="text-1xl bg-zinc-100 mb-3 rounded p-2 w-1/2"
        type="url"
        placeholder="image url"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        className="text-1xl mb-3 bg-zinc-100 rounded p-2 w-1/2"
        type="text"
        placeholder="title"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="flex w-1/2 gap-4 justify-between ">
        <input
          className="text-1xl mb-3 bg-zinc-100 rounded p-2 w-1/2"
          type="text"
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          className="text-1xl bg-zinc-100  mb-3 rounded p-2 w-1/2"
          type="number"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="text-1xl mb-3 bg-zinc-100 rounded p-2 w-1/2"
        rows="10"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <div className="w-1/2 mt-3">
        <button
          className="py-2 px-5  border-[1.5px] rounded text-blue-400 border-blue-200 "
          href="/create"
        >
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
