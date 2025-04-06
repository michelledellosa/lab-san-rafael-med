import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProductSidebarImg from '../../../public/assets/img/products/c-1.png';

const SidebarProductShopFullWidth = () => {
    return (
        <>
            <div className="category-sidebar cat-side mb-30">
                <h3 className="cat-title">Category</h3>
                <div className="product-11-wrapper text-center">
                    <div className="product-02-img pos-rel">
                        <Link href="/shop-grid">
                            <Image src={ProductSidebarImg} style={{ width: 'auto', height: "auto" }} alt="image not found" />
                        </Link>
                        <div className="b-02-tag b-03-tag">
                            <h3>-20% <br /> <span>off</span> </h3>
                        </div>
                    </div>
                    <div className="product-text">
                        <h4><Link href="/shop-grid">Lab N95 Facemask</Link></h4>
                        <span>$250.99</span>
                        <div className="c-side-button mt-20">
                            <Link className="c-btn" href="/shop-grid">buy now <i className="far fa-plus"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarProductShopFullWidth;