"use client"
import React from 'react';
import shape1 from '../../../../public/assets/img/testimonial/shape-02.png';
import image1 from '../../../../public/assets/img/testimonial/test.png';
import Image from 'next/image';
import testimonal_data from '@/data/testimonial-data';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import "swiper/css/bundle"
const TestimoniaHomeThree = () => {
    return (
        <>
            <div className="testimonial-area pos-rel pt-100 pb-70">
                <div className="shape d-none d-xl-block">
                    <div className="shape-item test-11">
                        <Image src={shape1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="test-02-img mb-30">
                                <Image src={image1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="single-testtimonial mb-30">
                                <div className="section-title mb-50">
                                    <h2>What Our {`Client’s`} Say</h2>
                                    <p>Sed ut perspiciatis unde omnis iste natus error</p>
                                </div>
                                <div className="test-03-active">
                                    <Swiper
                                        modules={[Autoplay, Navigation]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000
                                        }}
                                        navigation={{
                                            prevEl: '.tetimonial-btn-prev',
                                            nextEl: '.tetimonial-btn-next',
                                        }}
                                    >
                                        {
                                            testimonal_data.slice(8, 11).map((item) => (
                                                <SwiperSlide key={item.id}>
                                                    <div className="tes-o2-inner">
                                                        <div className="test-02-text">
                                                            <p>{item.desc}</p>
                                                            <span>{item.text}</span>
                                                            <div className="clientsay-name">
                                                                <div className="client-say-img">
                                                                    <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                                </div>
                                                                <div className="client-say-content">
                                                                    <h4>{item.title}</h4>
                                                                    <span>{item.info}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                                <div className="medi-testimonal-three d-none d-xl-block">
                                    <button type="button" className="tetimonial-btn-prev"><i className="fal fa-long-arrow-left"></i></button>
                                    <button type="button" className="tetimonial-btn-next" ><i className="fal fa-long-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimoniaHomeThree;