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
import ShopModal from '../common/modal/ShopModal';

const ProductArea = () => {
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
            <div className="product-area pb-50">
                <div className="container">
                    <div className="tab-border mb-60">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="section-title mb-25">
                                    <h2>Features Products</h2>
                                    <p>Explore cutting-edge Features in our medical equipment</p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="product-tab mb-25">
                                    <ul className="nav justify-content-start justify-content-lg-end product-nav" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                <i className="far fa-shield-check"></i> Best Seller
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                <i className="far fa-star"></i>  Top Rated
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                                <i className="far fa-star"></i> Popular
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-tab-content">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="row">
                                    {
                                        products_data.slice(0, 6).map((item) => (
                                            <div className="col-xl-4 cl-lg-4 col-md-6" key={item.id}>
                                                <div className="product-wrapper text-center mb-45">
                                                    <div className="product-img pos-rel">
                                                        <Link href={`/product-details/${item.id}`}>
                                                            <Image className='primary-img' src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                            {
                                                                item.imageTwo &&
                                                                <Image className="secondary-img" src={item.imageTwo} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                            }
                                                        </Link>
                                                        <div className="product-action">
                                                            <button className="action-btn" onClick={() => handleAddToWishlist(item)}><i className="far fa-heart"></i></button>
                                                            <button className="action-btn" onClick={() => handleAddToCart(item)}><i className="far fa-cart-plus"></i></button>
                                                            <button className="action-btn" onClick={() => setModalData(item)} data-bs-toggle="modal"
                                                                data-bs-target="#productModalId"><i className="far fa-eye"></i></button>
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
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="row">
                                    {
                                        products_data.slice(6, 12).map((item) => (
                                            <div className="col-xl-4 cl-lg-4 col-md-6" key={item.id}>
                                                <div className="product-wrapper text-center mb-45">
                                                    <div className="product-img pos-rel">
                                                        <Link href={`/product-details/${item.id}`}>
                                                            <Image className='primary-img' src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                            {
                                                                item.imageTwo &&
                                                                <Image className="secondary-img" src={item.imageTwo} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                            }
                                                        </Link>
                                                        <div className="product-action">
                                                            <button className="action-btn" onClick={() => handleAddToWishlist(item)}><i className="far fa-heart"></i></button>
                                                            <button className="action-btn" onClick={() => handleAddToCart(item)}><i className="far fa-cart-plus"></i></button>
                                                            <button className="action-btn" onClick={() => setModalData(item)} data-bs-toggle="modal"
                                                                data-bs-target="#productModalId"><i className="far fa-eye"></i></button>
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
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div className="row">
                                    {
                                        products_data.slice(12, 18).map((item) => (
                                            <div className="col-xl-4 cl-lg-4 col-md-6" key={item.id}>
                                                <div className="product-wrapper text-center mb-45">
                                                    <div className="product-img pos-rel">
                                                        <Link href={`/product-details/${item.id}`}>
                                                            <Image className='primary-img' src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                            {
                                                                item.imageTwo &&
                                                                <Image className="secondary-img" src={item.imageTwo} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                            }
                                                        </Link>
                                                        <div className="product-action">
                                                            <button className="action-btn" onClick={() => handleAddToWishlist(item)}><i className="far fa-heart"></i></button>
                                                            <button className="action-btn" onClick={() => handleAddToCart(item)}><i className="far fa-cart-plus"></i></button>
                                                            <button className="action-btn" onClick={() => setModalData(item)} data-bs-toggle="modal"
                                                                data-bs-target="#productModalId"><i className="far fa-eye"></i></button>
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

export default ProductArea;