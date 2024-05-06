
import React from "react";
import Slider from "react-slick";
import '../../Pages/Home/home.css';
import image1 from '../../assest/Herosectionimage/dress.webp';
import image2 from '../../assest/Herosectionimage/watch.webp';
import image3 from '../../assest/Herosectionimage/hero.webp';
import image4 from '../../assest/Herosectionimage/elec.jpg'
const HomeBanner=()=>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
    };    
return(
    <>
    <div className="herosection ">
    <Slider {...settings}>
        <div className="item">
            <img src={image1} className="w-100">
            </img>
        </div>
        <div className="item">
            <img src={image2} className="w-100">
            </img>
        </div>
        <div className="item">
            <img src= {image3} className="w-100">
            </img>
        </div>
        <div className="item">
            <img src= {image4} className="w-100">
            </img>
        </div>
    </Slider>
            </div>
    </>
)
}
export default HomeBanner;