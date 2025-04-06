"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import banner_data from '@/data/banner-data';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/bundle';

const BannerAreaTwo = () => {
    return (
        <>
            <div className="banner-area banner-pb pt-10 pb-30 pl-55 pr-55">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            <div className="position-relative">
                                <div className="banners-active">
                                    <Swiper
                                        modules={[Autoplay, Pagination]}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false
                                        }}
                                        pagination={{
                                            el: '.banner-pagination',
                                            clickable: true,
                                        }}
                                    >
                                        {
                                            banner_data.slice(5, 7).map((item) => (
                                                <SwiperSlide key={item.id}>
                                                    <div className="banners-wrapper mb-30">
                                                        <div className="banner-img pos-rel">
                                                            <Link href="/shop-grid">
                                                                <Image src={item.image} sizes="100vw" priority
                                                                    style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                            </Link>
                                                            <div className="b-tag">
                                                                <h2>{item.bannerTag}<span className="b-ta">%</span> <br /><span>off</span></h2>
                                                            </div>
                                                            <div className="banner-content">
                                                                <span>{item.subTitle}</span>
                                                                <h2>{item.title}</h2>
                                                                <p>{item.desc} <br /> Oil – a premium blend of natural </p>
                                                                <div className="bannerss-button">
                                                                    <Link className="c-btn" href="/shop-grid">{item.bannerBtn} <i className="far fa-plus"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                                <div className="banner-pagination d-none d-sm-block"></div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            {
                                banner_data.slice(7, 9).map((item) => (
                                    <div className="banner-wrapper mb-30" key={item.id}>
                                        <div className="banner-img pos-rel">
                                            <Link href="/shop-grid">
                                                <Image src={item.image} sizes="100vw" priority width={500} height={500}
                                                    style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            </Link>
                                            <div className="banner-text banner-03-text">
                                                <span>Cosmetics</span>
                                                <h2>Body Lotion</h2>
                                                <div className="b-button red-b-button">
                                                    <Link href="/shop-grid">shop now <i className="far fa-plus"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerAreaTwo;