"use client"
import testimonal_data from '@/data/testimonial-data';
import Image from 'next/image';
import React from 'react';
import testimonialBg from '../../../../public/assets/img/bg/test.jpg';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';


const TestimonialSlider = () => {

    return (
        <div>
            <div className="testimonial-area pt-100 pb-175" style={{ backgroundImage: `url(${testimonialBg.src})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center mb-65">
                                <h2>What Our {`Client’s`} Say</h2>
                                <p>Discover the impact of our medical equipment through firsthand</p>
                            </div>
                        </div>
                    </div>
                    <div className='testimonial-posi'>
                        <div className="row test-active">
                            <Swiper
                                modules={[Autoplay, Navigation, Pagination]}
                                navigation={{
                                    nextEl: '.tetimonial-btn-prev',
                                    prevEl: '.tetimonial-btn-next',
                                }}
                                pagination={{
                                    el: '.testimonial-pagination',
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 5000
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    550: {
                                        slidesPerView: 1,
                                    },
                                    767: {
                                        slidesPerView: 2,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 2,
                                    },
                                    1400: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },

                                }}
                            >
                                <div className="col-xl-6">
                                    {
                                        testimonal_data && testimonal_data.slice(0, 4).map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="testimonial-wrapper">
                                                    <div className="inner-test d-flex justify-content-between align-items-center">
                                                        <div className="test-img">
                                                            <Image src={item.image} width={500} height={500} priority={true} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                        </div>
                                                        <div className="test-rating">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star-half-alt"></i>
                                                        </div>
                                                    </div>
                                                    <div className="test-text">
                                                        <p>{item.desc}</p>
                                                        <h4>{item.title}</h4>
                                                        <span>{item.info}</span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </div>
                            </Swiper>
                        </div>
                        <div className="medi-testimonial-arrow-2">
                            <button type="button" className="tetimonial-btn-next">
                                <i className="fal fa-long-arrow-left"></i>
                            </button>
                            <button type="button" className="tetimonial-btn-prev">
                                <i className="fal fa-long-arrow-right"></i>
                            </button>
                        </div>
                        <div className="testimonial-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;