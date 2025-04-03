import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";

const App = () => {
  const { search, pathname } = useLocation();

  return (
    <div className="w-screen h-screen flex ">
      {(pathname != "/" || search.length > 0) && (
        <Link
          to="/"
          className=" left-[17.6%] py-1 px-3 top-[2%] absolute  text-white bg-blue-500 border rounded"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        {<Route path="/create" element={<Create />} />}
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
