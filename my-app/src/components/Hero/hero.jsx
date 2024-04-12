import React from 'react'
import Image1 from '../../assets/E-hero1.png';
import Image2 from '../../assets/E-hero2.jpg';
import Image3 from '../../assets/E-hero3.jpg';
import Slider from 'react-slick';

const ImageList = [
{
    id:1,
    img:Image1,
    title:"upto 50% off on all Men's Wear",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
},
{
    id:2,
    img:Image2,
    title:"upto 50% off on all Men's Wear",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
},
{
    id:3,
    img:Image3,
    title:"upto 50% off on all Men's Wear",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
},
];

const Hero = () => {


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

        </div>
    </div>
  );
};

export default Hero