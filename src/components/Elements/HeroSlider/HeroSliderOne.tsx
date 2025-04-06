"use client"
import hero_data from '@/data/hero-slider-data';
import React from 'react';

//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import 'swiper/css/bundle';
import Image from 'next/image';
import Link from 'next/link';


const HeroSliderOne = () => {

    return (
        <>
            <section className="hero-area">
                <div className="hero-slider">
                    <div className="slider-active">
                        <Swiper
                            modules={[Autoplay, Navigation, EffectFade]}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000
                            }}
                            effect={'fade'}
                            navigation={{
                                nextEl: '.hero-btn-next',
                                prevEl: '.hero-btn-prev',
                            }}
                        >
                            {
                                hero_data.slice(4, 7).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="single-slider slider-2-height d-flex align-items-center"
                                            style={{ backgroundImage: `url(${item.image.src})` }}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-7 col-md-9">
                                                        <div className="hero-content">
                                                            <div className="slider-caption ">
                                                                <span data-animation="fadeInUp" data-delay=".2s">{item.info}</span>
                                                                <h2 data-animation="fadeInUp" data-delay=".4s">{item.title}</h2>
                                                                <p data-animation="fadeInUp" data-delay=".6s">{item.desc}</p>
                                                            </div>
                                                            <div className="hero-02-slider-btn">
                                                                <Link data-animation="fadeInUp" data-delay=".8s" href="/shop-grid" className="c-btn">buy now <i className="far fa-plus"></i></Link>
                                                                <Link data-animation="fadeInUp" data-delay=".8s" href="/shop-grid" className="c-btn red-btn">shop
                                                                    now <i className="far fa-plus"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-5">
                                                        <div className="slider-02-img" data-animation="fadeInRight" data-delay=".8s">
                                                            {item.imageTwo &&
                                                                <Image style={{ width: "100%", height: "auto" }} src={item.imageTwo} alt="image not found" />
                                                            }
                                                            {/*<div className="slide-price">
                                                                <h3>${item.price}<span>.99</span></h3>
                                                            </div>*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className="medi-hero-arrow-1 d-none d-xl-block">
                        <button type="button" className="hero-btn-next">
                            <i className="fal fa-long-arrow-left"></i>
                        </button>
                        <button type="button" className="hero-btn-prev">
                            <i className="fal fa-long-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSliderOne;