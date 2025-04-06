import brand_data from '@/data/brand-data';
import Image from 'next/image';
import React from 'react';

const BrandSectionOne = () => {
    return (
        <>
            <div className="brand-area pb-40">
                <div className="container">
                    <div className="row">
                        {
                            brand_data.map((item) => (
                                <div className="col-xl-2 col-lg-2 col-md-3 col-6" key={item.id}>
                                    <div className="single-brand mb-60">
                                        <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
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

export default BrandSectionOne;