import React from 'react';
import BgImage from '../../../../public/assets/img/bg/04.jpg';
import Link from 'next/link';
type BreadcrumbGetProps = {
    title: string;
    subTitle: string
}

const Breadcrumb = ({ title, subTitle }: BreadcrumbGetProps) => {
    return (
        <div className="breadcrumb-area pt-125 pb-125" style={{ backgroundImage: `url(${BgImage.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb-wrapper">
                            <div className="breadcrumb-text">
                                <h2>{title}</h2>
                            </div>
                            <ul className="breadcrumb-menu">
                                <li><Link href="/">Inicio</Link></li>
                                <li><span>{subTitle}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;