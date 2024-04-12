import React from 'react'
import Img1 from '../../assets/Clothe/suit.jpg'
import Img2 from '../../assets/Clothe/suit1.jpg'
import Slider from 'react-slick';

const Product_ad = () => {

    var settings ={
        dots:false,
        arrows:true,
        infinite:false,
        speed:600,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
    
    };
  return (
    <div>
        <Slider {...settings}>
        <div className='w-[100%] h-[200px] bg-transparent border 2px 'style={{marginBottom: "2rem"}}>
        <div className='flex justify-between'>
            <img src={Img1} alt='picture' className='h-[190px] w-[100px] px-2 p-2'/>
            <img src={Img2} alt='picture' className='h-[190px] w-[100px] px-2 p-2'/>
            <img src={Img1} alt='picture' className='h-[190px] w-[100px] px-2 p-2'/>
            <img src={Img2} alt='picture' className='h-[190px] w-[100px] px-2 p-2'/>
            <img src={Img1} alt='picture' className='h-[190px] w-[100px] px-2 p-2'/>
            <img src={Img2} alt='picture' className='h-[190px] w-[100px] px-2 p-2'/>
        
        </div>
        </div>
        </Slider>

    </div>
  )
}

export default Product_ad