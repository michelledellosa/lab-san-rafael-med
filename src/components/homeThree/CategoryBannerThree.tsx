import Link from 'next/link';
import React from 'react';
import productImgOne from '../../../public/assets/img/banner/3/1.png';
import productImgTwo from '../../../public/assets/img/banner/3/2.png';
import productImgThree from '../../../public/assets/img/banner/3/3.png';
import productImgFour from '../../../public/assets/img/banner/3/4.png';
import productImgFive from '../../../public/assets/img/banner/3/44.png';

const CategoryBannerThree = () => {
    return (
        <>
            <div className="category-product-area pt-100">
                <div className="container c-banner-container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="row gy-4">
                                <div className="col-xl-7 col-lg-7 col-md-6">
                                    <div className="c-banner-product">
                                        <div className="c-banner-product-content">
                                            <span className="subtitle">Get it now 45% OFF</span>
                                            <h4 className="title"><span>Pyridoxine</span> Vitamin B6</h4>
                                            <div className="b-button red-b-button"><Link href="/shop-grid">shop now <i className="far fa-plus"></i></Link></div>
                                        </div>
                                        <Link href="/shop-grid">
                                            <div className="c-banner-product-thumb one" style={{ backgroundImage: `url(${productImgOne.src})` }}></div></Link>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-6">
                                    <div className="c-banner-product">
                                        <div className="c-banner-product-content">
                                            <span className="subtitle">Get it now 45% OFF</span>
                                            <h4 className="title"><span>Pyridoxine</span> Vitamin B6</h4>
                                            <div className="b-button red-b-button"><Link href="/shop-grid">shop now <i className="far fa-plus"></i></Link></div>
                                        </div>
                                        <Link href="/shop-grid">
                                            <div className="c-banner-product-thumb two" style={{ backgroundImage: `url(${productImgTwo.src})` }}></div></Link>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-6">
                                    <div className="c-banner-product">
                                        <div className="c-banner-product-content">
                                            <span className="subtitle">Get it now 45% OFF</span>
                                            <h4 className="title"><span>Pyridoxine</span> Vitamin B6</h4>
                                            <div className="b-button red-b-button"><Link href="/shop-grid">shop now <i className="far fa-plus"></i></Link></div>
                                        </div>
                                        <Link href="/shop-grid">
                                            <div className="c-banner-product-thumb two" style={{ backgroundImage: `url(${productImgThree.src})` }}></div></Link>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-6">
                                    <div className="c-banner-product">
                                        <div className="c-banner-product-content">
                                            <span className="subtitle">Get it now 45% OFF</span>
                                            <h4 className="title"><span>Pyridoxine</span> Vitamin B6</h4>
                                            <div className="b-button red-b-button"><Link href="/shop-grid">shop now <i className="far fa-plus"></i></Link></div>
                                        </div>
                                        <Link href="/shop-grid">
                                            <div className="c-banner-product-thumb one" style={{ backgroundImage: `url(${productImgFive.src})` }}></div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="c-banner-product vertical">
                                <div className="c-banner-product-content">
                                    <span className="subtitle">Get it now 45% OFF</span>
                                    <h4 className="title"><span>Pyridoxine</span> Vitamin B6</h4>
                                    <div className="b-button red-b-button"><Link href="/shop-grid">shop now <i className="far fa-plus"></i></Link></div>
                                </div>
                                <div className="c-banner-product-thumb vertical" style={{ backgroundImage: `url(${productImgFour.src})` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryBannerThree;




