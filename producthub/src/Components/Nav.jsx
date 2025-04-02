import React from "react";

const Nav = () => {
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
      <ul className="w-[80%] ">
        <li className="mb-3 flex items-center ">
          <span className="bg-green-300 h-[12px] mr-3 w-[12px]   rounded-full "></span>
          cat 1
        </li>
        <li className="mb-3 flex items-center ">
          <span className="bg-blue-300 h-[12px] mr-3 w-[12px]   rounded-full "></span>
          cat 1
        </li>
        <li className="mb-3 flex items-center ">
          <span className="bg-red-300 h-[12px] mr-3 w-[12px]   rounded-full "></span>
          cat 1
        </li>
        <li className="mb-3 flex items-center ">
          <span className="bg-purple-500 h-[12px] mr-3 w-[12px]   rounded-full "></span>
          cat 1
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
