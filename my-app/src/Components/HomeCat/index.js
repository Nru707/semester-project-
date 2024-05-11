import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';

const HomeCat = () => { 
    return(
        <>
        <section className='homeCat'>
            <div className='container'>
                <h3 className="hd mb-4">Featured Categories</h3>
            <Swiper
                                slidesPerView={10}
                                spaceBetween={10}
                                Navigation={true}
                                slidesPerGroup={1}
                                modules={[Navigation ]}
                                className="mySwiper"
            >
                {/* Category......jo herosection ke niche h */}
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item text-center cursor">
                        <img src="" alt="photo1"/>
                        <h6>Electronics</h6>
                    </div>
                </SwiperSlide>

            </Swiper>

            </div>

        </section>
</>
    )
}
export default HomeCat;