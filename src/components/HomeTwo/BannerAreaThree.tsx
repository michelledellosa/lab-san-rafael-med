import banner_data from '@/data/banner-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BannerAreaThree = () => {
    return (
        <>
            <div className="banner-area banner-pb pb-70 pl-55 pr-55">
                <div className="container-fluid">
                    <div className="row">
                        {
                            banner_data.slice(9, 12).map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="banner-wrapper text-center mb-30">
                                        <div className="banner-img pos-rel">
                                            <Link href="/shop-grid">
                                                <Image src={item.image} sizes="100vw" priority width={500} height={500}
                                                    style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            </Link>
                                            <div className="b-02-tag">
                                                <h3>{item.bannerTag} <br /><span>off</span> </h3>
                                            </div>
                                            <div className="banner-text banner-1-text">
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
        </>
    );
};

export default BannerAreaThree;