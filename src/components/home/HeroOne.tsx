"use client"
import Link from 'next/link';
import React from 'react';
import SliderImg from '../../../public/assets/img/slider/01.jpg';
import Image from 'next/image';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';
import hero_data from '@/data/hero-slider-data';

const HeroOne = () => {
    return (
        <>
            <section className="hero-area">
                <div className="hero-slider">
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center"
                            style={{ backgroundImage: `url(${SliderImg.src})` }}>
                            <div className="container">
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3000
                                    }}
                                >
                                    {
                                        hero_data.slice(0, 4).map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="row">
                                                    <div className="col-xl-5 col-lg-6">
                                                        <div className="hero-text mt-90">
                                                            <div className="hero-slider-caption ">
                                                                <span data-animation="fadeInUp" data-delay=".2s">{item.info}</span>
                                                                <h2 className='hello' data-animation="fadeInUp" data-delay=".4s">{item.title}</h2>
                                                                <p data-animation="fadeInUp" data-delay=".6s">{item.desc}</p>
                                                            </div>
                                                            <div className="hero-slider-btn">
                                                                <Link data-animation="fadeInUp" data-delay=".8s" href="/shop-grid"
                                                                    className="c-btn">shop now <i className="far fa-plus"></i></Link>
                                                                <div className="b-button" data-animation="fadeInUp" data-delay="1s" style={{ animationDelay: "1s" }}>
                                                                    <Link href="/shop-grid">hot collection <i className="far fa-plus"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-7 col-lg-6">
                                                        <div className="slider-img d-none d-lg-block" data-animation="fadeInRight" data-delay=".8s">
                                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroOne;