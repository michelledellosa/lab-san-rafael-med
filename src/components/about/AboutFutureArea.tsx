import React from 'react';
import icon1 from '../../../public/assets/img/icon/f-01.png';
import icon2 from '../../../public/assets/img/icon/f-02.png';
import icon3 from '../../../public/assets/img/icon/f-03.png';
import icon4 from '../../../public/assets/img/icon/f-04.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
type FutureType = {
    id: number,
    title: string,
    icon: StaticImageData,
    desc: string,
    url: string
}

const AboutFutureArea = () => {
    const future_data: FutureType[] = [
        {
            id: 1,
            title: "Medical Accessories",
            icon: icon1,
            desc: "Medical Elevate Your and Healthcare Accessories",
            url: "/shop-grid"
        },
        {
            id: 2,
            title: "Pandemic Perspectives",
            icon: icon2,
            desc: "Demonstrating keen insight and understanding",
            url: "/contact"
        },
        {
            id: 3,
            title: "24/7 Hours Emergency Care",
            icon: icon3,
            desc: "Fearless and determined in the face of challenges",
            url: "/contact"
        },
        {
            id: 4,
            title: "Online Free Consultations",
            icon: icon4,
            desc: "Skilled in providing clear and detailed explanations",
            url: "/contact"
        },
    ]
    return (
        <>
            <div className="features-02-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center mb-65">
                                <h2>Our Main Goals</h2>
                                <p>Transformative Healthcare through Advanced Medical Equipment</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            future_data.map((item) => (
                                <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                    <div className="feature-02-wrapper text-center mb-30">
                                        <div className="p-feature-text">
                                            <h3>{item.title}</h3>
                                            <div className="feature-02-icon">
                                                <Image src={item.icon} style={{ width: "auto", height: "auto" }} priority alt="image not found" />
                                            </div>
                                            <p>{item.desc}</p>
                                            <Link href={item.url}><i className="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutFutureArea;