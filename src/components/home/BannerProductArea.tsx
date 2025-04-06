import products_data from '@/data/products-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BannerProductArea = () => {
    return (
        <>
            <div className="banner-02-area pb-70 pl-165 pr-165">
                <div className="container-fluid">
                    <div className="row">
                        {
                            products_data.slice(18, 21).map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="banner-02-wrapper text-center mb-30" style={{ backgroundColor: item.bgClass }}>
                                        <div className="banner-02-text">
                                            <span>{item.subTitle}</span>
                                            <Link href="/shop-grid">
                                                <h2>{item.title}</h2>
                                            </Link>
                                        </div>
                                        <div className="banner-02-img pos-rel">
                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                            <span className="banner-tag">{item.bannerTag}</span>
                                        </div>
                                        <div className="banner-price">
                                            <span className="old-price">${item.oldPrice}</span>
                                            <span className="new-price">${item.price}</span>
                                        </div>
                                        <div className="banner-button">
                                            <Link className="c-btn" href="/shop-grid">buy now <i className="far fa-plus"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerProductArea;