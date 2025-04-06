import Link from 'next/link';
import React from 'react';
import CtaBg from '../../../public/assets/img/bg/05.jpg';

const AboutCta = () => {
    return (
        <>
            <div className="cta-area mb-100">
                <div className="container">
                    <div className="cta-bg pt-80 pb-80" style={{ backgroundImage: `url(${CtaBg.src})` }}>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="cta-wrapper">
                                    <div className="cta-text">
                                        <span>PANDEMIC PERSPECTIVES</span>
                                        <h2>Needs For Consultations</h2>
                                        <Link href="/contact" className="c-btn">shop now <i className="far fa-plus"></i></Link>
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

export default AboutCta;