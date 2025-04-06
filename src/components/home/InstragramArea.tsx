"use client"
import instragram_data from '@/data/instragram-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';

const InstragramArea = () => {
    return (
        <div className="instagram-area pl-130 pr-130">
            <div className="container-fluid">
                <div className="row instagram-active">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000
                        }}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            480: {
                                slidesPerView: 1,
                            },
                            550: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            767: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 5,
                            },
                            1400: {
                                slidesPerView: 6,
                            },

                        }}
                    >
                        <div className="col-xl-2 p-0">
                            {
                                instragram_data.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="instagram-wrapper">
                                            <div className="instagram-img">
                                                <Link href="https://www.instagram.com/" target='_blank'><Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                    <div className="instagram-icon">
                                                        <i className="fab fa-instagram"></i>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default InstragramArea;