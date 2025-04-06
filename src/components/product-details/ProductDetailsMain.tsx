"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import { idType } from '@/interFace/interFace';
import products_data from '@/data/products-data';
import Link from 'next/link';
import Image from 'next/image';
import ProductImg2 from '../../../public/assets/img/products/pr-22.png';
import ProductImg3 from '../../../public/assets/img/products/pr-33.png';
import ProductListCategory from './ProductListCategory';
import ProductDescriptionArea from './ProductDescriptionArea';
import RelatedProductArea from '../Elements/SliderProduct/RelatedProductArea';
import useCart from '../../hooks/useCart';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const ProductDetailsMain = ({ id }: idType) => {
    const product: any = products_data.find((item) => item.id == id)
    const { UseAddToCart, UseAddToWishlist, UseRemoveDecreaseCart } = useCart();
    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );
    const myData = cartProducts.find((item: { id: any; }) => item.id === product?.id);

    return (
        <>
            <Breadcrumb title='Product Details' subTitle='Product Details' />
            <section className="shop-banner-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="shop-thumb-tab">
                                <ul className="nav" id="myTab2" role="tablist">
                                    <li className="nav-item">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" role="tab"
                                            aria-selected="true">
                                            {product?.image && <Image style={{ width: "100%", height: "auto" }} src={product.image} alt="image not found" />}
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab"
                                            aria-selected="false">
                                            <Image src={ProductImg2} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" id="profile-tab2" data-bs-toggle="tab" data-bs-target="#profile1" role="tab"
                                            aria-selected="false">
                                            <Image src={ProductImg3} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-details-img mb-30">
                                <div className="tab-content" id="myTabContent2">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel">
                                        <div className="product-large-img">
                                            {product?.image && <Image src={product.image} style={{ width: "auto", height: "auto" }} alt="image not found" />}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel">
                                        <div className="product-large-img">
                                            <Image style={{ width: "auto", height: "auto" }} src={ProductImg2} alt="image not found" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile1" role="tabpanel">
                                        <div className="product-large-img">
                                            <Image style={{ width: "auto", height: "auto" }} src={ProductImg3} alt="image not found" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="product-details-wrapper mb-30">
                                <div className="product-text">
                                    <h5> {product?.subTitle}</h5>
                                    <h4>{product?.title}</h4>
                                    <div className="pro-rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fad fa-star-half-alt"></i>
                                        <span>(05 Reviews)</span>
                                    </div>
                                    <span>${product?.price}</span>
                                </div>
                                <div className="product-variant">
                                    <div className="product-desc">
                                        <p>On the other hand, we denounce with righteous indigna <br />
                                            tion and dislike men who are so beguiled and demor</p>
                                    </div>
                                    <div className="product-info-list">
                                        <span>Size</span>
                                        <Link href="#">l</Link>
                                        <Link href="#">m</Link>
                                        <Link href="#">s</Link>
                                        <Link href="#">x1</Link>
                                    </div>
                                    <div className="product2-info-list">
                                        <span>color</span>
                                        <Link className="p--1" href="#"></Link>
                                        <Link className="p--2" href="#"></Link>
                                        <Link className="p--3" href="#"></Link>
                                        <Link className="p--4" href="#"></Link>
                                    </div>
                                    <span className="stock">50 In Stock</span>
                                    <div className="product-action-details ">
                                        <div className="product-details-action">
                                            <div className="plus-minus">
                                                <div className="cart-plus-minus">
                                                    <input type="text" readOnly value={myData?.quantity || 0} />
                                                    <button onClick={() => UseRemoveDecreaseCart(product)} className="dec qtybutton">-</button>
                                                    <button onClick={() => UseAddToCart(product)} className="inc qtybutton">+</button>
                                                </div>
                                            </div>
                                            <div className="details-cart-btn">
                                                <Link href="/cart" className="c-btn red-btn">View Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pro-details-icon">
                                        <button onClick={() => UseAddToWishlist(product)}><i className="far fa-heart"></i></button>
                                        <Link href="#"><i className="far fa-search"></i></Link>
                                        <Link href="#"><i className="far fa-exchange"></i></Link>
                                    </div>
                                    <ProductListCategory />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductDescriptionArea />
            <RelatedProductArea />
        </>
    );
};

export default ProductDetailsMain;