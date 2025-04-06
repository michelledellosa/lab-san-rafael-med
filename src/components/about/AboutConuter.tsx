import counter_data from '@/data/counter-data';
import React from 'react';
import CountUpContent from '../common/counter/CountUpContent';

const AboutConuter = () => {
    return (
        <>
            <div className="counter-area pb-70">
                <div className="container">
                    <div className="counter-bg pt-100">
                        <div className="row">
                            {
                                counter_data.slice(4, 8).map((item) => (
                                    <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                        <div className="counter-wrapper text-center mb-30">
                                            <div className="counter-icon">
                                                <i className={item.icon}></i>
                                            </div>
                                            <div className="counter-text">
                                                <h2 className="counter">
                                                    <CountUpContent number={item.counterNum} />
                                                </h2>
                                                <span>{item.text}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutConuter;