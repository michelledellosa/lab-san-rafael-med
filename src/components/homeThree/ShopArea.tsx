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

const ShopArea = () => {
    const { setModalData } = useGlobalContext()
    const dispatch = useDispatch()
    const handleAddToCart = (product: ProductsType) => {
        if (product) {
            dispatch(cart_product(product))
        }
    }
    const handleAddToWishlist = (product: ProductsType) => {
        if (product) {
            dispatch(wishlist_product(product))
        }
    }
    return (
        <>
            <div className="shop-area grey-2-bg pt-100 pb-65">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center mb-65">
                                <h2>Hot Products</h2>
                                <p>Unveil cutting-edge solutions with our Hot Products in medical equipment</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            products_data.slice(69, 72).map((item) => (
                                <div className="col-xl-4 cl-lg-4 col-md-6" key={item.id}>
                                    <div className="product-wrapper text-center mb-30">
                                        <div className="product-img-3 pos-rel">
                                            <Link href={`product-details/${item.id}`}>
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
            <ShopModal />
        </>
    );
};

export default ShopArea;