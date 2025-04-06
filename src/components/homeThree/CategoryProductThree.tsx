; import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import products_data from '@/data/products-data';

const CategoryProductThree = () => {
    return (
        <>
            <div className="category-product-area grey-2-bg pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="section-title text-center mb-65">
                                <h2>Category Products</h2>
                                <p>Explore our diverse range of Category Products in medical equipment, carefully curated to meet</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            products_data.slice(116, 125).map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="category-product-item mb-30">
                                        <div className='category-product-thumb'>
                                            <Link href={`/product-details/${item.id}`}>
                                                <Image src={item.image} sizes="100vw" priority style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            </Link>
                                        </div>
                                        <div className="category-content">
                                            <span className='rating'>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <h6 className='title'><Link href={`/product-details/${item.id}`}>{item.title}</Link></h6>
                                            <span className='category-old-price'>${item.oldPrice}</span>
                                            <span className='category-new-price'>${item.price}</span>
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

export default CategoryProductThree;

