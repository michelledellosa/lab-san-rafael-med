import { RootState } from '@/redux/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const OrderArea = () => {
    const [shipingCast, setShipingCast] = useState(0)
    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );
    const totalPrice = cartProducts.reduce((total, product) => {
        if (typeof product.price === 'number' && product.price !== 0) {
            return total + (product.price ?? 0) * (product.quantity ?? 0);
        }
        return total;
    }, 0);
    return (
        <>
            <div className="your-order mb-30 ">
                <h3>Your order</h3>
                <div className="your-order-table table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th className="product-name">Product</th>
                                <th className="product-total">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartProducts.length ?
                                    <>
                                        {
                                            cartProducts.map((item) => (
                                                <tr key={item.id} className="cart_item">
                                                    <td className="product-name">
                                                        {item.title} <strong className="product-quantity"> × {item.quantity}</strong>
                                                    </td>
                                                    <td className="product-total">
                                                        <span className="amount">{item.price ? `$${item.price}` : '$0'}</span>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </>
                                    :
                                    <></>
                            }
                        </tbody>
                        <tfoot>
                            <tr className="cart-subtotal">
                                <th>Cart Subtotal</th>
                                <td><span className="amount">${totalPrice.toFixed(2)}</span></td>
                            </tr>
                            <tr className="shipping">
                                <th>Shipping</th>
                                <td>
                                    <ul>
                                        <li>
                                            <input onClick={() => setShipingCast(7)} type="radio" id="Amount" name="Shipping" />
                                            <label htmlFor="Amount">
                                                Flat Rate: <span className="amount">$7.00</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input onClick={() => setShipingCast(0)} type="radio" id="FreeShipping" name="Shipping" />
                                            <label htmlFor="FreeShipping">Free Shipping:</label>
                                        </li>
                                        <li></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="order-total">
                                <th>Order Total</th>
                                <td><strong><span className="amount">${(totalPrice + shipingCast).toFixed(2)}</span></strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="bd-faq-content bd-faq-content-4 mb-25">
                    <div className="bd-faq">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Payment Method
                                    </button>
                                </h4>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>You need to pay it with your prefable methods</p>
                                        <div className="payment-option mb-10">
                                            <label htmlFor="pay_later_payment">
                                                <input type="radio" id="pay_later_payment" name="payment_method" /> Pay later
                                            </label>
                                        </div>
                                        <div className="payment-option mb-10">
                                            <label htmlFor="mollie_payment">
                                                <input type="radio" id="mollie_payment" name="payment_method" /> Mobile Payment
                                            </label>
                                        </div>
                                        <div className="payment-option mb-10">
                                            <label htmlFor="paypal_payment">
                                                <input type="radio" id="paypal_payment" name="payment_method" /> Pay with Paypal
                                            </label>
                                        </div>
                                        <div className="payment-option mb-10">
                                            <label htmlFor="stripe_payment">
                                                <input type="radio" id="stripe_payment" name="payment_method" /> Pay with Visa/Mastercard
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-button-payment mt-20">
                            <button type="submit" className="c-btn theme-btn">Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderArea;