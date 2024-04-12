import React from 'react'
import Image1 from '../assets/Electronics/hero1.jpg'
import Image2 from '../assets/Electronics/hero2.jpg'
import Image3 from '../assets/Electronics/hero3.jpg'
import Image4 from '../assets/Electronics/hero4.jpg'
import Image5 from '../assets/Electronics/hero5.jpg'
import Slider from 'react-slick';
import img1 from "../assets/Electronics/cameradp.png"
import img2 from "../assets/Electronics/computerassdp.png"
import img3 from "../assets/Electronics/gaminglaptopdp.png"
import img4 from "../assets/Electronics/headphonesdp.png"
import img5 from "../assets/Electronics/smartwatchsdp.png"
import img6 from "../assets/Electronics/tabletsdp.png"
import img7 from "../assets/Electronics/homeaudp.png"

const ImageList = [
    {
        id:1,
        img:Image1,
      
    },
    {
        id:2,
        img:Image2,
    },
    {
        id:3,
        img:Image3,
    },
    {
        id:2,
        img:Image4,
    },
    {
        id:3,
        img:Image5,
    },
    ];
    

const Pages = () => {

    var settings ={
        dots:true,
        arrows:false,
        infinite:true,
        speed:600,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
    
    };
  return (
    <div className="relative overflow-hidden min-h[280px]
    sm:min-h-[280px] bg-gray-100 flex justify-center items-center-gray-950 dark:text-white duration-200">
        {/*Background pattern */}
        <div className="h-[300px] w-[300px] bg-primary/5
        absolute -top-1/2 right-0 rounded-3xl rotate-45 " >
        </div>
        <div className="h-[300px] w-[300px] bg-primary/10
        absolute top-1/2 left-0 rounded-3xl rotate-45 " >
        </div>
        {/*Hero section */}
        <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
                {
                    ImageList.map((data)=>(
                <div>
                {/* text content section */} 
                {/* image content section */}
                <div className="">
                    <img src={data.img} alt='image1' className=" w-[100%] h-500px  object-contain mx-auto"/>
                </div>
            </div>

                    )) }
            
            </Slider>
         
            <div className='flex w-[100%] h-600px bg-primary/40 justify-between p-7'>
                    <img src={img1} />
                    <img src={img2}/>
                    <img src={img3}/>
                    <img src={img4}/>
                    <img src={img5}/>
                    <img src={img6}/>
                    <img src={img7}/>
            </div>

        </div>
        
    </div>

  );
};


export default Pages