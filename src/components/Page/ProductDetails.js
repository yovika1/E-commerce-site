import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { FaRupeeSign, FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import Navbar from '../Navbar/Navbar'


export const ProductDetails = () => {
  const [productSpecifics,setProductSpecifics] = useState("")
  const [counter,setCounter] = useState(1)
  const [selectSize,setSelectSize] = useState("")
const   {productsId} = useParams()

const getDetails = async()=>{
    
  console.log(getDetails)
 try {
  const productDetails  =  await axios({
    method:"get",
    url:'http://localhost:8000/gettingProduct/'+productsId,
  });
  
  setProductSpecifics(productDetails.data.data)
  console.log(productDetails.data.data);
} 
 catch (error) {
  console.log("Error fetching product details", error)
 }
}
useEffect(()=>{
  getDetails();
},[])

const handleSizeSelection = async() =>{
    setSelectSize(selectSize)

    const sizeResponse = await axios({
        method:"post",
        url:"http://localhost:8000/gettingProduct"+productsId,

        productsId:productsId,
    size: selectSize,
    }) 
    console.log(sizeResponse.data.data)    
}


const increment = () =>{
    setCounter(counter+1)
}
const decrement = () =>{
    if (counter > 1) {
        
        setCounter(counter-1)
    }
}

const stripHtmlTags = (htmlString) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  return (
    
    <div>
<Navbar /> 
    <div class="bg-gray-100 dark:bg-slate-100 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4 py-20 dark:bg-white ">
            <div class="md:flex-1 px-4 " >
                <div class="h-[400px] w-80 rounded-lg ml-40 flex bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={`http://localhost:8000/${productSpecifics.url}`}/>
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button class=" flex w-full bg-amber-600 gap-2 dark:bg-yellow-400 text-white py-2 px-4 rounded-full font-bold hover:bg-yellow-500 dark:hover:bg-yellow-500">
                            <span className=' ml-12 mt-1  '><FaShoppingCart/></span>
                            ADD TO CART</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class=" flex gap-2 w-full bg-amber-600 items-center   dark:bg-orange-600 text-white py-2 px-4 rounded-full font-bold hover:bg-orange-500 dark:hover:bg-orange-500">
                            <span className='ml-20 mt-1 '><AiFillThunderbolt /></span>
                            BUY NOW</button>
                    
                    </div>
                  
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-black-800 dark:text-gray-400 mb-2">{productSpecifics.productTitle}</h2>
               
                <div class="flex mb-4">
                    <div class="mr-4 flex">
                        
                        <p className='flex text-2xl mt-2 ml-2'> <FaRupeeSign/></p>
                     
                        <span class="text-black-600 dark:text-black-300 font-extrabold text-3xl">{productSpecifics.price}</span>
                    </div>
                    <div>
                        <span class="font-bold text-black-700 dark:text-black-300">Availability:</span>
                        <span class="text-black-600 dark:text-black-300">In Stock</span>
                    </div>
                </div>
                
                <div class="mb-4">
                    <span class="font-bold text-black-700 dark:text-black-300">Select Size:</span>
                    <div class="flex items-center mt-2">
                        <button class="bg-gray-300 dark:bg-white text-black-700 border-2 border-gray-300 dark:text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-200 dark:hover:bg-gray-100"
                        onClick={handleSizeSelection('S')}
                        >S</button>
                        <button class="bg-gray-300 dark:bg-white text-black-700 border-2 border-gray-300 dark:text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-200 dark:hover:bg-gray-100"
                        onClick={handleSizeSelection('M')}
                        >M</button>
                        <button class="bg-gray-300 dark:bg-white text-black-700 border-2 border-gray-300 dark:text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-200 dark:hover:bg-gray-100"
                        onClick={handleSizeSelection('L')}
                        >L</button>
                        <button class="bg-gray-300 dark:bg-white text-black-700 border-2 border-gray-300 dark:text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-200 dark:hover:bg-gray-100"
                        onClick={handleSizeSelection('XL')}
                        >XL</button>
                   
                    </div>
                </div>


                <div className=' mt-5 font-bold '>
                    Quantity              
                <div class="flex items-center ml-1 mt-4">
               
  
                <button class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-white bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-orange-400 focus:ring-4 focus:ring-gray-200 dark:bg-orange-600 dark:text-black-400 dark:border-orange-600 dark:dark:bg-orange-500 dark:hover:border-orange-600 " 
                type="button"
                onClick={decrement}
                >
                            <span class="sr-only">{productSpecifics.quantity}</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <div>
                            <input  
                            value={counter}
                            class="bg-gray-50 w-14 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                        </div>
                        <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-white bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-orange-400 focus:ring-4 focus:ring-gray-200 dark:bg-orange-600 dark:text-black-400 dark:border-orange-600 dark:dark:bg-orange-500 dark:hover:border-orange-600 "
                         type="button"
                         onClick={increment}
                         >
                            <span class="sr-only">{productSpecifics.quantity}</span>
                            <svg class="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                        </div>
                        </div>


                <div className='mt-11'>
                    <span class="font-bold text-black-700 dark:text-black-300 ">Product Description:</span>
                    <p class="text-black-600 dark:text-black-300 text-sm mt-2">
                    {stripHtmlTags(productSpecifics.productBrief)}
                    </p>
                </div>

                
            </div>
        </div>
    </div>
</div>
 
    </div>
    
  )
}
