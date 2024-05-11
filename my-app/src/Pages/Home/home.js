import HomeBanner from '../../Components/HomeBanner/indexhome';
import '../Home/home.css';
import banner from "../../assest/images/bannerside.webp";
import banner1 from "../../assest/images/banner2.jpg";
import  Button  from '@mui/material/Button';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
import { GoArrowRight } from "react-icons/go";
import pro1 from '../../assest/product/electronic/camera.jpg';
import pro2 from '../../assest/product/Beuty/pro2.jpg';
import pro3 from '../../assest/product/mobiles/moh1.jpg';
import pro4 from '../../assest/product/womenC/pro1.jpg';
import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import "../Home/home.css";
import { MdCurrencyRupee } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import HomeCat from '../../Components/HomeCat';
import banner2 from '../../assest/images/bannerc1.jpg';
import banner3 from '../../assest/images/bannerc2.jpg';


const Home =()=> {

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        
      };
    return (
        <> 
        
        <HomeBanner/>
        <HomeCat/>



        <section className='homeproducts'>
            <div className='container'>
                <div className='row'>
                            {/*..........Left column............. */}
                        <div className="col-md-3"> 
                            <div className='sticky'>
                                <div className='banner'>
                                        <img src={banner} className='cursor w-100'/>
                                </div>
                                <div className='banner mt-4'>
                                        <img src={banner1} className='cursor w-100'/>
                                </div>
                            </div>
                        </div>

                     {/*..........right column............. */}
                        <div className="col-md-9 .productRow">
                            <div className='d-flex align-items-center'>
                                    <div className='info w-75'>
                                        <h3 className='mb-0 hd'>BEST SELLER</h3>
                                        <p className='text-light txt-sml mb-0'>Do not miss the cutrrent offers until the end of May</p>
                                    </div>
                                    <Button className='view ml-auto'>View All <GoArrowRight /></Button>
                            </div>
                              {/*..........................product.........................*/}
                            <div className='product_row w-100 mt-4'>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    navigation={true}
                                    slidesPerGroup={1}
                                    modules={[Navigation ]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                            {/*  <ProductItem/>....indexproductItem.......... */}
                                            <div className='item productItem'>
                                    <div className='imageWrapper'>
                                        <img src={pro1} className='w-100'/>
                                        <span className='badge badge-primary '>50%</span>
                                        <div className='action'>
                                            <Button> <SlSizeFullscreen /></Button>
                                            <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                        </div>
                                    </div>
                                    <div className='info'>
                                    <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                    <span className='text-success d-block'>In Stock</span>
                                    <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                    <div className='d-flex'>
                                        <span className='oldprice'><MdCurrencyRupee />1000</span>
                                        <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                    </div>
                                    </div>
                                </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <div className='item productItem'>
                                    <div className='imageWrapper'>
                                        <img src={pro2} className='w-100'/>
                                        <span className='badge badge-primary '>50%</span>
                                        <div className='action'>
                                            <Button> <SlSizeFullscreen /></Button>
                                            <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                        </div>
                                    </div>
                                    <div className='info'>
                                    <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                    <span className='text-success d-block'>In Stock</span>
                                    <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                    <div className='d-flex'>
                                        <span className='oldprice'><MdCurrencyRupee />1000</span>
                                        <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                    </div>
                                    </div>
                                </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <div className='item productItem'>
                                    <div className='imageWrapper'>
                                        <img src={pro3} className='w-100 pro3'/>
                                        <span className='badge badge-primary '>50%</span>
                                        <div className='action'>
                                            <Button> <SlSizeFullscreen /></Button>
                                            <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                        </div>
                                    </div>
                                    <div className='info'>
                                    <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                    <span className='text-success d-block'>In Stock</span>
                                    <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                    <div className='d-flex'>
                                        <span className='oldprice'><MdCurrencyRupee />1000</span>
                                        <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                    </div>
                                    </div>
                                </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <div className='item productItem'>
                                    <div className='imageWrapper'>
                                        <img src={pro4} className='w-100'/>
                                        <span className='badge badge-primary '>50%</span>
                                        <div className='action'>
                                            <Button> <SlSizeFullscreen /></Button>
                                            <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                        </div>
                                    </div>
                                    <div className='info'>
                                    <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                    <span className='text-success d-block'>In Stock</span>
                                    <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                    <div className='d-flex'>
                                        <span className='oldprice'><MdCurrencyRupee />1000</span>
                                        <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                    </div>
                                    </div>
                                </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <div className='item productItem'>
                                    <div className='imageWrapper'>
                                        <img src={pro1} className='w-100'/>
                                        <span className='badge badge-primary '>50%</span>
                                        <div className='action'>
                                            <Button> <SlSizeFullscreen /></Button>
                                            <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                        </div>
                                    </div>
                                    <div className='info'>
                                    <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                    <span className='text-success d-block'>In Stock</span>
                                    <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                    <div className='d-flex'>
                                        <span className='oldprice'><MdCurrencyRupee />1000</span>
                                        <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                    </div>
                                    </div>
                                </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <div className='item productItem'>
                                    <div className='imageWrapper'>
                                        <img src={pro1} className='w-100'/>
                                        <span className='badge badge-primary '>50%</span>
                                        <div className='action'>
                                            <Button> <SlSizeFullscreen /></Button>
                                            <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                        </div>
                                    </div>
                                    <div className='info'>
                                    <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                    <span className='text-success d-block'>In Stock</span>
                                    <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                    <div className='d-flex'>
                                        <span className='oldprice'><MdCurrencyRupee />1000</span>
                                        <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                    </div>
                                    </div>
                                </div>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide>
                                    <div className='item productItem'>
                                    <div className='imageWrapper'>
                                        <img src={pro1} className='w-100'/>
                                        <span className='badge badge-primary '>50%</span>
                                        <div className='action'>
                                            <Button> <SlSizeFullscreen /></Button>
                                            <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                        </div>
                                    </div>
                                    <div className='info'>
                                    <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                    <span className='text-success d-block'>In Stock</span>
                                    <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                    <div className='d-flex'>
                                        <span className='oldprice'><MdCurrencyRupee />1000</span>
                                        <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                    </div>
                                    </div>
                                </div>
                                    </SwiperSlide>
                                

                                </Swiper>

                            </div>
                            {/*..........right column.... new product......... */}
                            <div className='d-flex align-items-center mt-4'>
                                    <div className='info w-75'>
                                        <h3 className='mb-0 hd'>NEW PRODUCT</h3>
                                        <p className='text-light txt-sml mb-0'>New product with updated store</p>
                                    </div>
                                    <Button className='view ml-auto'>View All <GoArrowRight /></Button>
                            </div>
                             {/*..........................product.........................*/}
                            <div className='product_row productRow2 w-100 mt-4 d-flex'>
                                    <div className='item productItem'>
                                        <div className='imageWrapper'>
                                            <img src={pro1} className='w-100'/>
                                            <span className='badge badge-primary '>50%</span>
                                            <div className='action'>
                                                <Button> <SlSizeFullscreen /></Button>
                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                            </div>
                                        </div>
                                        <div className='info'>
                                        <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'><MdCurrencyRupee />1000</span>
                                            <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className='item productItem'>
                                        <div className='imageWrapper'>
                                            <img src={pro2} className='w-100'/>
                                            <span className='badge badge-primary '>50%</span>
                                            <div className='action'>
                                                <Button> <SlSizeFullscreen /></Button>
                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                            </div>
                                        </div>
                                        <div className='info'>
                                        <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'><MdCurrencyRupee />1000</span>
                                            <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className='item productItem'>
                                        <div className='imageWrapper'>
                                            <img src={pro3} className='w-100 pro3'/>
                                            <span className='badge badge-primary '>50%</span>
                                            <div className='action'>
                                                <Button> <SlSizeFullscreen /></Button>
                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                            </div>
                                        </div>
                                        <div className='info'>
                                        <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'><MdCurrencyRupee />1000</span>
                                            <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className='item productItem'>
                                        <div className='imageWrapper'>
                                            <img src={pro4} className='w-100'/>
                                            <span className='badge badge-primary '>50%</span>
                                            <div className='action'>
                                                <Button> <SlSizeFullscreen /></Button>
                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                            </div>
                                        </div>
                                        <div className='info'>
                                        <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'><MdCurrencyRupee />1000</span>
                                            <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className='item productItem'>
                                        <div className='imageWrapper'>
                                            <img src={pro1} className='w-100'/>
                                            <span className='badge badge-primary '>50%</span>
                                            <div className='action'>
                                                <Button> <SlSizeFullscreen /></Button>
                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                            </div>
                                        </div>
                                        <div className='info'>
                                        <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'><MdCurrencyRupee />1000</span>
                                            <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className='item productItem'>
                                        <div className='imageWrapper'>
                                            <img src={pro1} className='w-100'/>
                                            <span className='badge badge-primary '>50%</span>
                                            <div className='action'>
                                                <Button> <SlSizeFullscreen /></Button>
                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                            </div>
                                        </div>
                                        <div className='info'>
                                        <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'><MdCurrencyRupee />1000</span>
                                            <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className='item productItem'>
                                        <div className='imageWrapper'>
                                            <img src={pro1} className='w-100'/>
                                            <span className='badge badge-primary '>50%</span>
                                            <div className='action'>
                                                <Button> <SlSizeFullscreen /></Button>
                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                            </div>
                                        </div>
                                        <div className='info'>
                                        <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'><MdCurrencyRupee />1000</span>
                                            <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className='item productItem'>
                                        <div className='imageWrapper'>
                                            <img src={pro1} className='w-100'/>
                                            <span className='badge badge-primary '>50%</span>
                                            <div className='action'>
                                                <Button> <SlSizeFullscreen /></Button>
                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                            </div>
                                        </div>
                                        <div className='info'>
                                        <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'><MdCurrencyRupee />1000</span>
                                            <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className='item productItem'>
                                        <div className='imageWrapper'>
                                            <img src={pro1} className='w-100'/>
                                            <span className='badge badge-primary '>50%</span>
                                            <div className='action'>
                                                <Button> <SlSizeFullscreen /></Button>
                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                            </div>
                                        </div>
                                        <div className='info'>
                                        <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'><MdCurrencyRupee />1000</span>
                                            <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='item productItem'>
                                        <div className='imageWrapper'>
                                            <img src={pro1} className='w-100'/>
                                            <span className='badge badge-primary '>50%</span>
                                            <div className='action'>
                                                <Button> <SlSizeFullscreen /></Button>
                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                            </div>
                                        </div>
                                        <div className='info'>
                                        <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'><MdCurrencyRupee />1000</span>
                                            <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className='item productItem'>
                                        <div className='imageWrapper'>
                                            <img src={pro2} className='w-100'/>
                                            <span className='badge badge-primary '>50%</span>
                                            <div className='action'>
                                                <Button> <SlSizeFullscreen /></Button>
                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                            </div>
                                        </div>
                                        <div className='info'>
                                        <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                        <span className='text-success d-block'>In Stock</span>
                                        <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                        <div className='d-flex'>
                                            <span className='oldprice'><MdCurrencyRupee />1000</span>
                                            <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className='item productItem'>
                                                    <div className='imageWrapper'>
                                                            <img src={pro3} className='w-100 pro3'/>
                                                            <span className='badge badge-primary '>50%</span>
                                                            <div className='action'>
                                                                <Button> <SlSizeFullscreen /></Button>
                                                                <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>

                                                            </div>
                                                    </div>
                                                    <div className='info'>
                                                    <h6 >pTron Newly Launched Fusion Beats 40W Karaoke Bluetooth Party Speaker, Loud & Clear Stereo Sound.{/* , RGB Lights, 3 mtr Wired Mic, BT/USB/SD Card/Aux Playback, TWS Pairing & Type C Charging*/} (Black) </h6>
                                                    <span className='text-success d-block'>In Stock</span>
                                                    <Rating  className=" mt-2 mb-2" name="read-only" value={5} readOnly  size='small' precision={0.5}/>
                                                    <div className='d-flex'>
                                                        <span className='oldprice'><MdCurrencyRupee />1000</span>
                                                        <span className='netprice text-danger ml-2'><MdCurrencyRupee />500</span>
                                                    </div>
                                                    </div>
                                    </div>
                            </div>

                            <div className="d-flex bannerSec mt-4 mb-5"> 
                                                    <div className='banner'>
                                                        <img src={banner2} className='cursor w-100' />
                                                    </div>
                                                    <div className='banner'>
                                                    <img src={banner3} className='cursor w-100' />
                                                    </div>

                            </div>

                        </div> 
                        <div className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                                    <div className="md-6">
                                        <p className='text-white mb-1'>$20 discount for yor fiest order</p>
                                        <h3 className='text-white'>Join our newsletter and get...</h3> 
                                        <p className='text-light'>join our email subscription now to get
                                        updates on <br/> promotion and coupons.</p>
                                        </div>
                                        <div className="md-6">
                                         </div>
        </div> 
                </div>
            </div>
        </section>
     </>
    )
}
export default Home;