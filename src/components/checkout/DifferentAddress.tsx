"use client"
import React, { useState } from 'react';
import NiceSelect from '../common/NiceSelect';
import CountryData from '@/data/select-country-data';

const DifferentAddress = () => {
    const [isActiveC, setActiveC] = useState(true);
    const handleToggleC = () => {
        setActiveC(!isActiveC);
    };
    const selectHandler = () => { }
    return (
        <div>
            <div className="different-address">
                <div className="ship-different-title">
                    <h3>
                        <label htmlFor='ship-box'>Ship to a different address?</label>
                        <input id="ship-box" type="checkbox" onClick={handleToggleC} />
                    </h3>
                </div>
                <div id="ship-box-info" className={`${isActiveC ? "danger" : "d-block"}`}>
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
                    </div>
                </div>
                <div className="order-notes">
                    <div className="checkout-form-list">
                        <label>Order Notes</label>
                        <textarea id="checkout-mess" cols={30} rows={10}
                            placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DifferentAddress;