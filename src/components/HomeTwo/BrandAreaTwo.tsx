import brand_data from '@/data/brand-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BrandAreaTwo = () => {
    return (
        <div className="brand-area pb-40 pt-100">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-xl-7 col-lg-7 col-md-8">
                        <div className="section-title mb-30">
                            <h2>Features Partner</h2>
                            <p>Empower healthcare professionals with Partner Equipment</p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-4">
                        <div className="b-button gray-b-button shop-btn s-btn text-md-right mb-30">
                            <Link href="/shop-grid">view all product <i className="fal fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        brand_data.map((item) => (
                            <div className="col-xl-2 col-lg-2 col-md-3 col-6" key={item.id}>
                                <div className="single-brand mb-60">
                                    <Image src={item.image} priority style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandAreaTwo;