import React from 'react'
import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';
import img5 from '../../assets/img5.webp';
import { FaStar } from 'react-icons/fa6';


const ProductsData=[
    {
        id:1,
        img:img1,
        title:"Digital Watch",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
    {
        id:2,
        img:img2,
        title:"Women Fashion",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
    {
        id:3,
        img:img3,
        title:"Health & Care",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
    {
        id:4,
        img:img4,
        title:"Goggles",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
        
 {
    id:5,
    img:img5,
    title:"Grocery",
    rating:5.0,
    color:"Green",
    aosDelay:"0",
    
    },
    {
        id:1,
        img:img1,
        title:"Digital Watch",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
    {
        id:2,
        img:img2,
        title:"Women Fashion",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
    {
        id:3,
        img:img3,
        title:"Health & Care",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
    {
        id:4,
        img:img4,
        title:"Goggles",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
        
 {
    id:5,
    img:img5,
    title:"Grocery",
    rating:5.0,
    color:"Green",
    aosDelay:"0",
    
    },
    {
        id:1,
        img:img1,
        title:"Digital Watch",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
    {
        id:2,
        img:img2,
        title:"Women Fashion",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
    {
        id:3,
        img:img3,
        title:"Health & Care",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
    {
        id:4,
        img:img4,
        title:"Goggles",
        rating:5.0,
        color:"Green",
        aosDelay:"0",

    },
        
 {
    id:5,
    img:img5,
    title:"Grocery",
    rating:5.0,
    color:"Green",
    aosDelay:"0",
    
    },
];
const Products = () => {
  return (
    <div className="relative overflow-hidden min-h[650px]
    sm:min-h-[650px] bg-gray-100 flex justify-center 
    items-center-gray-950 dark:text-white duration-200
    mt-14 mb-12"
    >
        {/*Background pattern */}
        <div className="h-[700px] w-[700px] bg-primary/5
        absolute -top-1/2 right-0 rounded-3xl rotate-45 " >
        </div>
        <div className="h-[700px] w-[700px] bg-primary/10
        absolute top-1/2 left-0 rounded-3xl rotate-45 " >
        </div>
        <div className="container">
            {/* Header Section........ */}
            <div className='text-center text-black mb-10 max-w-[600px] mx-auto'>
                <p  data-aos="fade-up" className="text-sm text-primary">Top Selling Product for you</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                <p  data-aos="fade-up" className="text-xs text-gray-400">hope you are enjoing well hi my name is pooja mehta 
                    and i am working on this project hope u like it..
                </p>
            </div>
             {/* Body Section........ */}
             <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5
                lf:grid-cols-5 place-items-center gap-5">
                    {/*Cart Section i mean that image section.. */}
                    {
                        ProductsData.map((data) =>(
                            <div data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id}
                            className='space-y-3' >
                                <img src={data.img} alt=""
                                className="h-[220px] w-[150px] object-cover rounded-sm "/>
                                <div className='text-black'>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-sm text-gray-600'>{data.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className='text-yellow-400'/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
             </div>
        </div>

    </div>
  )
}

export default Products