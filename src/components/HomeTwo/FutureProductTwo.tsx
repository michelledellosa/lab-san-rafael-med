"use client"
import products_data from '@/data/products-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import productBImg from '../../../public/assets/img/products/bb.png';
import { useDispatch } from 'react-redux';
import { ProductsType } from '@/interFace/interFace';
import { cart_product } from '@/redux/slices/cartSlice';
import { wishlist_product } from '@/redux/slices/wishlist-slice';
import ShopModal from '../common/modal/ShopModal';
import useGlobalContext from '@/hooks/use-context';

const FutureProductTwo = () => {
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
            <div className="features-products-area fe-product pl-55 pr-55">
                <div className="container-fluid">
                    <div className="fe-pro-border">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                                <div className="section-title text-center mb-65">
                                    <h2>Features Products</h2>
                                    <p>Explore cutting-edge Features in our medical equipment</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 mb-30">
                                <div className="category-sidebar">
                                    <h3 className="cat-title">Category</h3>
                                    <div className="category-item">
                                        <ul>
                                            <li><Link href="/shop-grid">Hand Sanitizer</Link></li>
                                            <li><Link href="/shop-grid">Lab N95 Face Mask</Link></li>
                                            <li><Link href="/shop-grid">Hand Gloves</Link></li>
                                            <li><Link href="/shop-grid">Medical Equipment</Link></li>
                                            <li><Link href="/shop-grid">Home Accessories</Link></li>
                                            <li><Link href="/shop-grid">New Arrival Product</Link></li>
                                            <li><Link href="/shop-grid">Special Offers</Link></li>
                                            <li><Link href="/shop-grid">Wheelchair - Disabled</Link></li>
                                            <li><Link href="/shop-grid">Inhaler Pressure Drop</Link></li>
                                            <li><Link href="/shop-grid">Medicine & Helath</Link></li>
                                        </ul>
                                    </div>
                                    <div className="banner-side">
                                        <div className="banner-side-text">
                                            <span>Cosmetics</span>
                                            <h3>Body Lotion</h3>
                                            <div className="b-button red-b-button">
                                                <Link href="/shop-grid">shop now <i className="far fa-plus"></i></Link>
                                            </div>
                                            <div className="banner-side-img pos-rel text-md-right">
                                                <Link href="#">
                                                    <Image src={productBImg} sizes='100vw' priority
                                                        style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                </Link>
                                                <div className="b-02-tag b-03-tag">
                                                    <h3>10% <br /> <span>off</span> </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9">
                                <div className="row">
                                    {
                                        products_data.slice(29, 37).map((item) => (
                                            <div className="col-xl-3 cl-lg-3 col-md-6" key={item.id}>
                                                <div className="product-03-wrapper grey-2-bg pos-rel text-center mb-30">
                                                    {
                                                        item.bannerTag &&
                                                        <div className="badge-tag">
                                                            <span className={`product-tag pro-tag ${item.bgClass}`}>{item.bannerTag}</span>
                                                        </div>
                                                    }
                                                    <div className="product-02-img pos-rel">
                                                        <Link href={`/product-details/${item.id}`}>
                                                            <Image src={item.image}
                                                                style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        </Link>
                                                        <div className="product-action">
                                                            <button className="action-btn" onClick={() => addToWishlistData(item)}><i className="far fa-heart"></i></button>
                                                            <button className="action-btn" onClick={() => addTocartData(item)}><i className="far fa-cart-plus"></i></button>
                                                            <button className="action-btn" onClick={() => setModalData(item)} data-bs-toggle="modal" data-bs-target="#productModalId"><i className="far fa-eye"></i></button>
                                                        </div>
                                                    </div>
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
            </div>
            <ShopModal />
        </>
    );
};

export default FutureProductTwo;