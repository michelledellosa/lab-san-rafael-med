"use client"
import products_data from '@/data/products-data';
import useGlobalContext from '@/hooks/use-context';
import { ProductsType } from '@/interFace/interFace';
import { cart_product } from '@/redux/slices/cartSlice';
import { wishlist_product } from '@/redux/slices/wishlist-slice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

const ProductThreeSection = () => {
    const { setModalData } = useGlobalContext()
    const dispatch = useDispatch()
    const handleAddToCart = (product: ProductsType) => {
        dispatch(cart_product(product))
    }
    const handleAddToWishlist = (product: ProductsType) => {
        dispatch(wishlist_product(product))
    }
    return (
        <>
            <div className="product-area pt-95 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center mb-65">
                                <h2>Popular Categories</h2>
                                <p>Discover excellence across our Popular Categories in medical equipment</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-10 col-lg-10 offset-lg-1 offset-xl-1">
                            <div className="product-tab-two mb-35">
                                <ul className="nav nav-tabs justify-content-center gap-3" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Show All</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Medicine</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Sanitizer</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" id="contacts-tab" data-bs-toggle="tab" data-bs-target="#contacts" role="tab" aria-controls="contact"
                                            aria-selected="false">Thermometer</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" id="contact1-tab" data-bs-toggle="tab" data-bs-target="#contact1" role="tab" aria-controls="contact"
                                            aria-selected="false">Accessories</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product-tab-content">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    {
                                        products_data.slice(43, 51).map((item) => (
                                            <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                                <div className="product-02-wrapper style-two pos-rel text-center mb-30">
                                                    <div className="product-02-img pos-rel">
                                                        <Link href={`product-details/${item.id}`}>
                                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        </Link>
                                                        <div className="product-action">
                                                            <button className="action-btn" onClick={() => handleAddToWishlist(item)}><i className="far fa-heart"></i></button>
                                                            <button className="action-btn" onClick={() => handleAddToCart(item)}><i className="far fa-cart-plus"></i></button>
                                                            <button className="action-btn" onClick={() => setModalData(item)} data-bs-toggle="modal"
                                                                data-bs-target="#productModalId"><i className="far fa-eye"></i></button>
                                                        </div>
                                                    </div>
                                                    {
                                                        item.bannerTag &&
                                                        <span className={`product-tag ${item.bgClass}`}>{item.bannerTag}</span>
                                                    }
                                                    <div className="product-text">
                                                        <h5>{item.subTitle}</h5>
                                                        <h4><Link href={`product-details/${item.id}`}>{item.title}</Link></h4>
                                                        <span>${item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                    {
                                        products_data.slice(51, 59).map((item) => (
                                            <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                                <div className="product-02-wrapper style-two pos-rel text-center mb-30">
                                                    <div className="product-02-img pos-rel">
                                                        <Link href={`product-details/${item.id}`}>
                                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        </Link>
                                                        <div className="product-action">
                                                            <button className="action-btn" onClick={() => handleAddToWishlist(item)}><i className="far fa-heart"></i></button>
                                                            <button className="action-btn" onClick={() => handleAddToCart(item)}><i className="far fa-cart-plus"></i></button>
                                                            <button className="action-btn" onClick={() => setModalData(item)} data-bs-toggle="modal"
                                                                data-bs-target="#productModalId"><i className="far fa-eye"></i></button>
                                                        </div>
                                                    </div>
                                                    {
                                                        item.bannerTag &&
                                                        <span className={`product-tag ${item.bgClass}`}>{item.bannerTag}</span>
                                                    }
                                                    <div className="product-text">
                                                        <h5>{item.subTitle}</h5>
                                                        <h4><Link href={`product-details/${item.id}`}>{item.title}</Link></h4>
                                                        <span>${item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="row">
                                    {
                                        products_data.slice(59, 64).map((item) => (
                                            <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                                <div className="product-02-wrapper style-two pos-rel text-center mb-30">
                                                    <div className="product-02-img pos-rel">
                                                        <Link href={`product-details/${item.id}`}>
                                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        </Link>
                                                        <div className="product-action">
                                                            <button className="action-btn" onClick={() => handleAddToWishlist(item)}><i className="far fa-heart"></i></button>
                                                            <button className="action-btn" onClick={() => handleAddToCart(item)}><i className="far fa-cart-plus"></i></button>
                                                            <button className="action-btn" onClick={() => setModalData(item)} data-bs-toggle="modal"
                                                                data-bs-target="#productModalId"><i className="far fa-eye"></i></button>
                                                        </div>
                                                    </div>
                                                    {
                                                        item.bannerTag &&
                                                        <span className={`product-tag ${item.bgClass}`}>{item.bannerTag}</span>
                                                    }
                                                    <div className="product-text">
                                                        <h5>{item.subTitle}</h5>
                                                        <h4><Link href={`product-details/${item.id}`}>{item.title}</Link></h4>
                                                        <span>${item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                                <div className="row">
                                    {
                                        products_data.slice(64, 67).map((item) => (
                                            <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                                <div className="product-02-wrapper style-two pos-rel text-center mb-30">
                                                    <div className="product-02-img pos-rel">
                                                        <Link href={`product-details/${item.id}`}>
                                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        </Link>
                                                        <div className="product-action">
                                                            <button className="action-btn" onClick={() => handleAddToWishlist(item)}><i className="far fa-heart"></i></button>
                                                            <button className="action-btn" onClick={() => handleAddToCart(item)}><i className="far fa-cart-plus"></i></button>
                                                            <button className="action-btn" onClick={() => setModalData(item)} data-bs-toggle="modal"
                                                                data-bs-target="#productModalId"><i className="far fa-eye"></i></button>
                                                        </div>
                                                    </div>
                                                    {
                                                        item.bannerTag &&
                                                        <span className={`product-tag ${item.bgClass}`}>{item.bannerTag}</span>
                                                    }
                                                    <div className="product-text">
                                                        <h5>{item.subTitle}</h5>
                                                        <h4><Link href={`product-details/${item.id}`}>{item.title}</Link></h4>
                                                        <span>${item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact1" role="tabpanel" aria-labelledby="contact1-tab">
                                <div className="row">
                                    {
                                        products_data.slice(67, 69).map((item) => (
                                            <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                                <div className="product-02-wrapper style-two pos-rel text-center mb-30">
                                                    <div className="product-02-img pos-rel">
                                                        <Link href={`product-details/${item.id}`}>
                                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                        </Link>
                                                        <div className="product-action">
                                                            <button className="action-btn" onClick={() => handleAddToWishlist(item)}><i className="far fa-heart"></i></button>
                                                            <button className="action-btn" onClick={() => handleAddToCart(item)}><i className="far fa-cart-plus"></i></button>
                                                            <button className="action-btn" onClick={() => setModalData(item)} data-bs-toggle="modal"
                                                                data-bs-target="#productModalId"><i className="far fa-eye"></i></button>
                                                        </div>
                                                    </div>
                                                    {
                                                        item.bannerTag &&
                                                        <span className={`product-tag ${item.bgClass}`}>{item.bannerTag}</span>
                                                    }
                                                    <div className="product-text">
                                                        <h5>{item.subTitle}</h5>
                                                        <h4><Link href={`product-details/${item.id}`}>{item.title}</Link></h4>
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
        </>
    );
};

export default ProductThreeSection;