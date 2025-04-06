import products_data from '@/data/products-data';
import useGlobalContext from '@/hooks/use-context';
import useCart from '@/hooks/useCart';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShopFourTabProductOne = () => {
    const { setModalData } = useGlobalContext()
    const { UseAddToCart, UseAddToWishlist } = useCart();

    return (
        <>
            {
                products_data.slice(103, 111).map((item) => (
                    <div className="col-xl-3 cl-lg-3 col-md-6" key={item.id}>
                        <div className="product-02-wrapper product-single pos-rel text-center mb-30">
                            <div className="product-02-img pos-rel">
                                <Link href={`/product-details/${item.id}`}>
                                    <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </Link>
                                <div className="product-action">
                                    <button className="action-btn" onClick={() => UseAddToWishlist(item)}><i className="far fa-heart"></i></button>
                                    <button className="action-btn" onClick={() => UseAddToCart(item)}><i className="far fa-cart-plus"></i></button>
                                    <button className="action-btn" onClick={() => setModalData(item)} data-bs-toggle="modal"
                                        data-bs-target="#productModalId"><i className="far fa-eye"></i></button>
                                </div>
                            </div>
                            {item.bannerTag &&
                                <span className={`product-tag ${item.bgClass}`}>{item.bannerTag}</span>
                            }
                            <div className="product-text">
                                <h5>{item.subTitle}</h5>
                                <h4><Link href={`/product-details/${item.id}`}>{item.title}</Link></h4>
                                <span>${item.price}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default ShopFourTabProductOne;