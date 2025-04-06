import React from 'react';

const FutureArea = () => {
    return (
        <>
            <div className="features-area pt-60 pb-30 grey-2-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">

                            <div className="features-wrapper mb-30">
                                <div className="features-icon fe-1 f-left">
                                    <i className="fal fa-ship"></i>
                                </div>
                                <div className="features-text">
                                    <h3>Free Shipping</h3>
                                    <p>Enjoy the added benefit of free shipping on all medical</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="features-wrapper mb-30">
                                <div className="features-icon fe-2 f-left">
                                    <i className="fal fa-usd-circle"></i>
                                </div>
                                <div className="features-text">
                                    <h3>Money Back</h3>
                                    <p>Shop confidently with our Money Back Guarantee on equipment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="features-wrapper mb-30">
                                <div className="features-icon fe-3 f-left">
                                    <i className="fal fa-unlock-alt"></i>
                                </div>
                                <div className="features-text">
                                    <h3>100% Secure</h3>
                                    <p>Experience peace of mind with our 100% Secure equipment purchases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FutureArea;