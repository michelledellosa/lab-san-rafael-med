import React from 'react';
import DealBgImg from '../../../public/assets/img/bg/02.jpg';
import DealBgImg2 from '../../../public/assets/img/bg/01.png';
import Image from 'next/image';
import Link from 'next/link';
import TimerWrapper from '@/utils/TimerWrapper';

const DealAreaTwo = () => {

    return (
        <>
            <div className="deal-02-area mb-100">
                <div className="container">
                    <div className="deal-bg" style={{ backgroundImage: `url(${DealBgImg.src})` }}>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="deal-02-wrapper mb-30">
                                    <div className="section-title mb-35">
                                        <h2>Deal Of This Week</h2>
                                        <p>Unlock incredible savings with our Deal of the Week</p>
                                    </div>
                                    <div className="deal-content mb-45">
                                        <h2>Cholera<span>Vaxchora</span></h2>
                                        <span>$ 205.99</span>
                                        <div className="deal-button">
                                            <Link className="c-btn" href="/shop-grid">buy now <i className="far fa-plus"></i></Link>
                                        </div>
                                    </div>
                                    <div className="deal-count">
                                        <div className="deal-time" data-countdown="2020/10/01">
                                            <TimerWrapper />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lg-6">
                                <div className="deal-img mb-30">
                                    <Image src={DealBgImg2} sizes="100vw" priority style={{ width: "100%", height: "auto" }} alt="image not found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DealAreaTwo;