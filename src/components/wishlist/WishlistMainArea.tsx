"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import InstragramArea from '../home/InstragramArea';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { cart_product } from '@/redux/slices/cartSlice';
import { remove_wishlist_product } from '@/redux/slices/wishlist-slice';

const WishlistMainArea = () => {
    const dispatch = useDispatch();
    const WishListProduct = useSelector(
        (state: RootState) => state.wist.cartProducts
    )
    return (
        <>
            <Breadcrumb title='Wishlist' subTitle='Wishlist' />
            <section className="cart-area pt-100 pb-100">
                <div className="container">
                    {WishListProduct?.length === 0 && (
                        <div className="text-center">
                            <h3>Your wishlist is empty</h3>
                        </div>
                    )}
                    {WishListProduct?.length >= 1 && (
                        <div className="row">
                            <div className="col-12">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                WishListProduct?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="product-thumbnail">
                                                            <Link href="#">
                                                                {item?.image && (
                                                                    <Image
                                                                        src={item?.image}
                                                                        style={{ width: "auto", height: "auto" }}
                                                                        alt="img not found"
                                                                    />
                                                                )}
                                                            </Link>
                                                        </td>
                                                        <td className="product-name"><Link href="#">{item?.title}</Link></td>
                                                        <td className="product-price"><span className="amount">{item?.price === 0 ? "FREE" : `$${item?.price}`}</span></td>
                                                        <td className="product-quantity">
                                                            <button onClick={() => dispatch(cart_product(item))} className="c-btn theme-btn-2" type="submit">Add TO Cart</button>
                                                        </td>
                                                        <td className="product-subtotal"><span className="amount"> ${item?.price * item?.quantity}</span></td>
                                                        <td className="product-remove">
                                                            <button className='remove-btn' onClick={() => dispatch(remove_wishlist_product(item))}>
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <InstragramArea />
        </>
    );
};

export default WishlistMainArea;