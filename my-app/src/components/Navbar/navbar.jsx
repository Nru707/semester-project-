import React from 'react'
import './navbar.css'
import { MdOutlineSearch } from "react-icons/md";
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
const Menu =[
    {
        id: 1,
        name:"Electronics",
        link:"/#src\pages\pages.jsx",
    },
    {
        id: 2,
        name:"Fashion",
        link:"/#",
    },
    {
        id: 3,
        name:"Books",
        link:"/#",
    },
    {
        id: 4,
        name:"Grocery",
        link:"/#",
    },
    {
        id: 5,
        name:"cosmetic",
        link:"/#",
    },
    {
        id: 6,
        name:"Health",
        link:"/#",
    },
    {
        id: 7,
        name:"Sell",
        link:"/#",
    },
];
const DropdownLinks =[
{   
    id:1,
    name:"Tranding Products",
    link:"/#",
},
{
    id:2,
    name:"Best Selling",
    link:"/#",
},
{
    id:3,
    name:"Top Rated",
    link:"/#",
},
{
    id:4,
    name:"Discount",
    link:"/#",
},


];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-200 dark:text-black duration-200
    relative z-40">
       {/* upper navbar */}
        <div className="bg-primary/40 py-2 sm:py-0">
            <div className="container flex justify-between items-center">
                <div>
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        {/*<img src={Logo} alt="Logo" 
                        className="w-10"/>*/}
                        Blink <span className='text-primary'>Basket</span>
                    </a>
                </div>
                {/* ..........search bar..........*/}
                <div className="flex justify-between items-center gap-4 ">
                    <div className=" relative group hidden sm:block">
                        <input type="text"placeholder=" Search Items"
                        
                        className=" focus:outline-none focus:border-1 focus:border-primary text-black"  />
                        {/* for search bar icon*/ }
                        <MdOutlineSearch 
                        className="text-gray-500 group-hover:text-primary absolute top-1/2 
                        -translate-y-1/2 right-3"/>
                    </div>
                </div>
                
                {/*....order button..... */}
                <button onClick={()=> alert("This feature is currently not available")}
                className=" bg-gray-400  text-black py-1 px-4 rounded-full flex items-center gap-3
                group hover:bg-slate-600 hover:text-white">
                    <span>Order</span>
                    <FaCartShopping
                    className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                </button>
                {/*Darkmode switch and light mode switch  ..i will do later...*/}
                {/*Sign-up.. button. */}
                <div className='signup'>
                    <button 
                className=" bg-gray-400  text-black py-1 px-4 rounded-full flex items-center gap-3
                group hover:bg-slate-600 hover:text-white">
                    <span>SignUp</span>
                    <FaRegCircleUser
                    className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                </button>
                </div>
                {/*Sign-up.. button. */}
                <div className='login'>
                    <button 
                className= "bg-gray-400  text-black py-1 px-4 rounded-full flex items-center gap-3 group hover:bg-slate-600 hover:text-white" >
                    <span>Login</span>
                    <FaUserCheck
                    className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                </button>
                </div>

            </div>
        </div>
       {/* lower navbar */}
        <div className="flex justify-center">
            <ul className="sm:flex hidden items-center gap-4">
                {
                    Menu.map((data)=>(
                        <li key={data.id}
                        className="inline-block px-5 hover:text-secondary">
                            <a href='#data.link'>{data.name}</a>
                        </li>
                    )) }
                    {/* Simple drop down and links*/}
                    <li className="group relative cursor-pointer">
                        <a href='#' 
                        className="flex items-center gap-[2px] py-2">
                            Trending Products
                            <span>
                                <FaCaretDown className="transition-all duration-200 
                                group-hover:rotate-180"/>
                            </span>     
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md
                        bg-white p-2 text-black shadow-md">
                            <ul>
                                {DropdownLinks.map((data)=>(
                                    <li key={data.id}>
                                        <a href={data.link}
                                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                                            {data.name}
                                        </a>
                                    </li>
                                )
                            )}
                            </ul>
                        </div>
                    </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar