"use client"
import products_data from '@/data/products-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';
import useGlobalContext from '@/hooks/use-context';
import ShopModal from '../../common/modal/ShopModal';
import InstragramArea from '../../home/InstragramArea';
import useCart from '@/hooks/useCart';

const RelatedProductArea = () => {
    const { setModalData } = useGlobalContext()
    const { UseAddToCart, UseAddToWishlist } = useCart()
    return (
        <>
            <div className="product-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center mb-65">
                                <h2>Features Products</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pro-active">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000
                            }}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                550: {
                                    slidesPerView: 1,
                                },
                                767: {
                                    slidesPerView: 1,
                                },
                                992: {
                                    spaceBetween: 30,
                                    slidesPerView: 2,
                                },
                                1200: {
                                    spaceBetween: 30,
                                    slidesPerView: 3,
                                },
                                1400: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },

                            }}
                        >
                            <div className="col-xl-4">
                                {
                                    products_data.slice(0, 5).map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="product-wrapper text-center">
                                                <div className="product-img pos-rel">
                                                    <Link href="#">
                                                        <Image className='primary-img' src={item.image}
                                                            style={{ width: "auto", height: "auto" }}
                                                            alt="image not found" />
                                                        {
                                                            item.imageTwo &&
                                                            <Image className="secondary-img" src={item.imageTwo} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        }
                                                    </Link>
                                                    <div className="product-action">
                                                        <button className="action-btn" onClick={() => UseAddToWishlist(item)}><i className="far fa-heart"></i></button>
                                                        <button className="action-btn" onClick={() => UseAddToCart(item)}><i className="far fa-cart-plus"></i></button>
                                                        <button className="action-btn" onClick={() => setModalData(item)} data-bs-toggle="modal"
                                                            data-bs-target="#productModalId"><i className="far fa-eye"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-text">
                                                <h5>{item.subTitle}</h5>
                                                <h4><Link href="#">{item.title}</Link></h4>
                                                <span>${item.price}</span>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </div>
                        </Swiper>
                    </div>
                </div >
            </div >
            <InstragramArea />
            <ShopModal />
        </>
    );
};

export default RelatedProductArea;