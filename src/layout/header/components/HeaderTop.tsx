import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FlagIcon from '../../../../public/assets/img/icon/flag.png';

const HeaderTop = () => {
    return (
        <>
            <div className="header-top-area pl-165 pr-165">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-6 col-md-6">
                            <div className="header-top-wrapper">
                                {/*<div className="header-top-info d-none d-xl-block f-left">
                                    <span>
                                        <i className="fas fa-heart"></i>
                                         Bienvenido al Laboratorio Clínico San Rafael
                                    </span>
    </div>*/}
                                <div className="hheader-top-info f-left">
                                    <span>
                                    <span>
                                    Centro Medico Ambulatorio San Rafael
                                    </span>
                                         {/*
                                        <Link href="tel:+1234567879" target='_blank'>
                                            <i className="far fa-phone"></i> +123 (456) 7879
                                        </Link>*/}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="header-top-right header-one">
                                <Link href="/my-account">
                                    <span className='user_icon'><i className="fal fa-user-circle"></i></span>
                                    Mi cuenta
                                </Link>
                                {/*<div className="header-lang pos-rel d-none d-md-none d-lg-block">
                                    <div className="lang-icon">
                                        <Image src={FlagIcon}
                                            style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        <Link href="#"><i className="far fa-angle-down"></i></Link>
                                    </div>
                                    <ul className="header-lang-list">
                                        <li><Link href="#">USA</Link></li>
                                        <li><Link href="#">UK</Link></li>
                                        <li><Link href="#">CA</Link></li>
                                        <li><Link href="#">AU</Link></li>
                                    </ul>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;