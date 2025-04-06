import banner_data from '@/data/banner-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BannerArea = () => {
    return (
        <div className="banner-area banner-pb pt-30 pb-70 pl-55 pr-55">
            <div className="container-fluid">
                <div className="row">
                    {
                        banner_data.slice(0, 5).map((item, index) => (
                            <div className={item.wrapperClass} key={index}>
                                <div className="banner-wrapper mb-30">
                                    <div className="banner-img pos-rel">
                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                        <div className="banner-text">
                                            <span>{item.subTitle}</span>
                                            <h2>{item.title}</h2>
                                            <div className="b-button red-b-button">
                                                <Link href="/shop-grid">{item.bannerBtn} <i className="far fa-plus"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BannerArea;