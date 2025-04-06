import Image from 'next/image';
import React from 'react';
import bgImg from '../../../public/assets/img/bg/02.png';
import iconOne from '../../../public/assets/img/icon/u-01.png';
import iconTwo from '../../../public/assets/img/icon/u-02.png';
import iconThree from '../../../public/assets/img/icon/u-03.png';

const UseListSection = () => {
    return (
        <>
            <div className="used-list-area pb-65">
                <div className="container">
                    <div className="used-list-bg pt-100">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                                <div className="section-title text-center mb-65">
                                    <h2>How Can Use Sanitizer</h2>
                                    <p>Sed ut perspiciatis unde omnis iste natus error</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 mb-30">
                                <div className="used-list-img">
                                    <Image src={bgImg} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="used-list-wrapper mb-30">
                                    <div className="used-list-item">
                                        <ul>
                                            <li>
                                                <div className="used-list-icon f-left">
                                                    <Image src={iconOne} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                </div>
                                                <div className="used-list-text">
                                                    <h4>Apply Alcohol Spray</h4>
                                                    <p>Sed perspiciatis unde omnis iste natuerror
                                                        sit voluptatem accusantiu oloremque laudan
                                                        tium totam rem aperiam wayse</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="used-list-icon f-left">
                                                    <Image src={iconTwo} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                </div>
                                                <div className="used-list-text">
                                                    <h4>Rub Hands Together</h4>
                                                    <p>Sed perspiciatis unde omnis iste natuerror
                                                        sit voluptatem accusantiu oloremque laudan
                                                        tium totam rem aperiam wayse</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="used-list-icon f-left">
                                                    <Image src={iconThree} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                </div>
                                                <div className="used-list-text">
                                                    <h4>Surface Unity Dry</h4>
                                                    <p>Sed perspiciatis unde omnis iste natuerror
                                                        sit voluptatem accusantiu oloremque laudan
                                                        tium totam rem aperiam wayse</p>
                                                </div>
                                            </li>
                                        </ul>
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

export default UseListSection;