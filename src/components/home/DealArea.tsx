import React from 'react';
import TimerWrapper from '@/utils/TimerWrapper';

const DealArea = () => {
    return (
        <>
            <div className="deal-area pb-50 pt-95">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center mb-65">
                                <h2>Deal Of This Week</h2>
                                <p>Unlock incredible savings with our Deal of the Week on equipment</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div className="deal-wrapper text-center">
                                <div className="deal-count">
                                    <div className="deal-time" data-countdown="2020/9/01">
                                        <TimerWrapper />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DealArea;