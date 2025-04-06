"use client"
import productSelectOptionData from '@/data/product-select-option-data';
import React from 'react';
import NiceSelect from '../common/NiceSelect';
import PaginationData from '../common/pagination/pagination-data';
import ShopModal from '../common/modal/ShopModal';
import BrandSectionOne from '../home/BrandSectionOne';
import InstragramArea from '../home/InstragramArea';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ShopFourTabProductOne from './ShopFourTabProductOne';
import ShopFourProductTwo from './ShopFourProductTwo';

const ShopFourColumnMain = () => {
    const selectHandler = () => { }
    return (
        <>
            <Breadcrumb title='Shop Ful' subTitle='Shop' />
            <div className="sh0p-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="pro-ful-tab">
                                <div className="row mb-20">
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="product-02-tab mb-20">
                                            <ul className="nav nav-pills justify-content-start product-nav" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" role="tab"
                                                        aria-controls="home" aria-selected="true">
                                                        <i className="fa-solid fa-grid-2"></i>
                                                    </button>
                                                </li>
                                                <li className="nav-item">
                                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab"
                                                        aria-controls="profile" aria-selected="false">
                                                        <i className="fas fa-bars"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="pro-tab1-content pt-15 mb-20 text-md-center">
                                            <h4>Showing 20 Results Of 50 Products</h4>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="pro-filter mb-20 f-right">
                                            <form action="#">
                                                <NiceSelect
                                                    options={productSelectOptionData}
                                                    defaultCurrent={0}
                                                    onChange={selectHandler}
                                                    name=""
                                                    className=""
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-tab-content">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                <ShopFourTabProductOne />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <ShopFourProductTwo />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="basic-pagination mt-20 basic-pagination-2 text-center">
                                            <PaginationData />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BrandSectionOne />
            <InstragramArea />
            <ShopModal />
        </>
    );
};

export default ShopFourColumnMain;