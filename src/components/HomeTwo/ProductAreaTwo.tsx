"use client"
import Link from 'next/link';
import React from 'react';
import ProductBannerImg from '../../../public/assets/img/products/banner.jpg';
import Image from 'next/image';
import products_data from '@/data/products-data';
import useGlobalContext from '@/hooks/use-context';
import { useDispatch } from 'react-redux';
import { cart_product } from '@/redux/slices/cartSlice';
import { wishlist_product } from '@/redux/slices/wishlist-slice';
import { ProductsType } from '@/interFace/interFace';
import ShopModal from '../common/modal/ShopModal';

const ProductAreaTwo = () => {
    const { setModalData } = useGlobalContext()
    const dispatch = useDispatch()
    const addTocartData = (product: ProductsType) => {
        dispatch(cart_product(product))
    }
    const addToWishlistData = (product: ProductsType) => {
        dispatch(wishlist_product(product))
    }
    return (
        <>
            <div className="product-area pt-100 pb-70">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-xl-7 col-lg-7 col-md-8">
                            <div className="section-title mb-30">
                                <h2>Features Products</h2>
                                <p>Explore cutting-edge Features in our medical equipment</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-4">
                            <div className="b-button shop-btn s-btn text-md-right mb-30">
                                <Link href="/shop-grid">view all product <i className="fal fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 mb-30">
                            <div className="banner-pro-img">
                                <Link href="/product-details">
                                    <Image src={ProductBannerImg} sizes="100vw" priority
                                        style={{ width: "100%", height: "auto" }}
                                        alt="image not found"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9">
                            <div className="row">
                                {
                                    products_data.slice(37, 43).map((item) => (
                                        <div className="col-xl-4 cl-lg-4 col-md-6" key={item.id}>
                                            <div className="product-02-wrapper product-single pos-rel text-center mb-30">
                                                <div className="product-02-img pos-rel">
                                                    <Link href={`/product-details/${item.id}`}>
                                                        <Image src={item.image} priority
                                                            style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                    </Link>
                                                    <div className="product-action">
                                                        <button className="action-btn" onClick={() => addToWishlistData(item)}><i className="far fa-heart"></i></button>
                                                        <button className="action-btn" onClick={() => addTocartData(item)}><i className="far fa-cart-plus"></i></button>
                                                        <button className="action-btn" onClick={() => setModalData(item)}><i className="far fa-eye" data-bs-toggle="modal" data-bs-target="#productModalId"></i></button>
                                                    </div>
                                                </div>
                                                {
                                                    item.bannerTag &&
                                                    <span className={`product-tag ${item.bgClass}`}>{item.bannerTag}</span>
                                                }
                                                <div className="product-text">
                                                    <h5>{item.subTitle}</h5>
                                                    <h4><Link href={`/product-details/${item.id}`}>{item.title}</Link></h4>
                                                    <span>${item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShopModal />
        </>
    );
};

export default ProductAreaTwo;