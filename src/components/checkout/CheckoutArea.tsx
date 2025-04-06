"use client"
import React, { useState } from 'react';
import DifferentAddress from './DifferentAddress';
import OrderArea from './OrderArea';
import NiceSelect from '../common/NiceSelect';
import CountryData from '@/data/select-country-data';

const CheckoutArea = () => {
    const [isActiveD, setIsActiveD] = useState(true)
    const handleToggole = () => {
        setIsActiveD(!isActiveD)
    }
    const selectHandler = () => { }
    return (
        <>
            <section className="checkout-area pb-70">
                <div className="container">
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="checkbox-form">
                                    <h3>Billing Details</h3>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="country-select country-option">
                                                <label>Country <span className="required">*</span></label>
                                                <NiceSelect
                                                    options={CountryData}
                                                    defaultCurrent={0}
                                                    onChange={selectHandler}
                                                    name=""
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>First Name <span className="required">*</span></label>
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Last Name <span className="required">*</span></label>
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Company Name</label>
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Address <span className="required">*</span></label>
                                                <input type="text" placeholder="Street address" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Town / City <span className="required">*</span></label>
                                                <input type="text" placeholder="Town / City" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>State / County <span className="required">*</span></label>
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Postcode / Zip <span className="required">*</span></label>
                                                <input type="text" placeholder="Postcode / Zip" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Email Address <span className="required">*</span></label>
                                                <input type="email" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Phone <span className="required">*</span></label>
                                                <input type="text" placeholder="Postcode / Zip" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list create-acc">
                                                <input id="cbox" type="checkbox" onClick={handleToggole} />
                                                <label htmlFor='cbox'>Create an account?</label>
                                            </div>
                                            <div className={`checkout-form-list create-account ${isActiveD ? "" : "d-block"}`}>
                                                <p>Create an account by entering the information below. If you are a returning
                                                    customer please login at the top of the page.</p>
                                                <label>Account password <span className="required">*</span></label>
                                                <input type="password" placeholder="password" />
                                            </div>
                                        </div>
                                    </div>
                                    <DifferentAddress />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <OrderArea />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default CheckoutArea;