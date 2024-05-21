import React from "react";
import { FaRupeeSign } from "react-icons/fa";

import { Link } from "react-router-dom";

export const Products = ({ item }) => {


  return (
    <div>
      <div className="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/Product-items/${item?._id}`}>
        <img
          className="p-8 rounded-t-lg cursor-pointer h-[50vh]"
          // onClick={() => navigate('/Product-items/' + item?._id )}
          src={"http://localhost:8000/" + item.url}
          alt="product image"
        />
</Link>

        <div class="px-5 pb-5">
          
            <h5 class="text-xl cursor-pointer font-semibold tracking-tight text-gray-900 dark:text-white"
          
            >
              
             {item.productTitle}
            </h5>
        
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
             
            </div>
          
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl flex font-bold text-gray-900 dark:text-white">
              <p className=" flex mt-1 "><FaRupeeSign/></p>
              {item.price}
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};
