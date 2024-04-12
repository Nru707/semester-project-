import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const  Footer = ()=> {
  return (
    <footer>
         {/*Background pattern */}
        <div className="relative overflow-hidden min-h[200px]
    sm:min-h-[200px] bg-gray-500 flex justify-center items-center-gray-950 gap-40">
        <div className="h-[300px] w-[300px] bg-primary/20
        absolute -top-1/2 right-0 rounded-3xl rotate-45 " >
        </div>
        <div className="h-[300px] w-[300px] bg-primary/20
        absolute top-1/2 left-0 rounded-3xl rotate-45 " >
        </div>
        <div className="h-[300px] w-[300px] bg-primary/20
        absolute bottom-1/2 left-0 rounded-3xl rotate-45 " >
        </div>
        <div className="h-[300px] w-[300px] bg-primary/20
        absolute -bottom-1/2 right-0 rounded-3xl rotate-45 " >
        </div>
        {/*Footer.................................text */}
        <div className=''>
            <h1 className="text-secondary px-0 font-bold text-2xl sm:text-3xl">Blink  <span className='text-primary'>Basket</span></h1>
            <FaSquareInstagram/>
            <FaFacebookSquare/>
        </div>
        <div>
                <ul className='font-semibold '>
                    <li className='hover:text-gray-600 '><a>About</a></li>
                    <li className='hover:text-gray-600 '><a>Home</a></li>
                    <li className='hover:text-gray-600 '><a>Contact</a></li>
                    <li className='hover:text-gray-600 '><a>Help</a></li>
                    <li className='hover:text-gray-600 '><a>Services</a></li>
                </ul>
        </div>
        <div className=''>
                <ul className='font-semibold'>
                    <li className='hover:text-gray-600 '><a>Company</a></li>
                    <li className='hover:text-gray-600 '><a>Plateform</a></li>
                    <li className='hover:text-gray-600' ><a>Plateform</a></li>
                    <li className='hover:text-gray-600 '><a>Support</a></li>
                    <li  className='hover:text-gray-600 '><a>Products</a></li>
                    <li  className='hover:text-gray-600 '><a>Resources</a></li>
                </ul>
        </div>
        <div className=''>
                <ul className='font-semibold'>
                    <li  className='hover:text-gray-600 '><a>Company</a></li>
                    <li  className='hover:text-gray-600 '><a>Plateform</a></li>
                    <li  className='hover:text-gray-600 '><a>Support</a></li>
                    <li  className='hover:text-gray-600 '><a>Products</a></li>
                    <li  className='hover:text-gray-600 '><a>Resources</a></li>
                </ul>
        </div>
        
    </div>
        </footer>
  );
};
export default Footer