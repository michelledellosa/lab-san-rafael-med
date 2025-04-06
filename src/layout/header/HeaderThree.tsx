import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../../public/assets/img/logo/logo.png';
import flagIcon from '../../../public/assets/img/icon/flag.png';
import Image from 'next/image';
import useGlobalContext from '@/hooks/use-context';
import InfoSidebar from '../sidebar/InfoSidebar';
import Menus from './components/Menus';
import MobileMenus from './components/MobileMenus';
import CartSidebar from './CartSidebar';
import useCart from '../../hooks/useCart';

const HeaderThree = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const { scrollDirection, toggleSideMenu, sideMenuOpen } = useGlobalContext()
    const { UseWishlstQuantity, UseCartProductQuantity } = useCart();
    const [isOpenInfoSidebar, setIsOpenInfoSidebar] = useState<boolean>(false)

    const handleInfoSidebar = () => {
        setIsOpenInfoSidebar(!isOpenInfoSidebar)
    }


    return (
        <>
            <header>
                <div className="header-top theme-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-5">
                                <div className="header-top-wrapper">
                                    <div className="header-02-link f-left">
                                        <Link href="#">-40% OFF</Link>
                                        <span>All new products</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7">
                                <div className="header-top-wrapper text-md-right">
                                    <div className="header-info">
                                        <span><i className="far fa-phone"></i>
                                            Call Us <Link href="tel:+1234567879" target='_blank'>+123 (456) 7879</Link>
                                        </span>
                                        <span className="mail2-header-icon"><i className="far fa-envelope-open"></i>
                                            <Link href="mailto:support@gmail.com" target='_blank'>
                                                support@gmail.com
                                            </Link>
                                        </span>
                                        <span className="mail1-header-icon"><i className="far fa-map-marked"></i>
                                            <Link href="#"> 205 Main Street, USA</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className={`main-menu-area menu-03 pl-55 pr-55 ${scrollDirection === "down" ? "sticky" : ""}`}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-8 col-md-6">
                                <div className="logo">
                                    <Link href="/"><Image src={Logo} style={{ width: "auto", height: "auto" }} alt="image not found" /></Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-4 d-lg-none">
                                <div className="menu-bar menu-bar-2 text-end" onClick={toggleSideMenu}>
                                    <Link className="menu-cat-toggle" href="#"><i className="fal fa-bars"></i></Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-md-none d-lg-block">
                                <div className="header-search f-right">
                                    <form className="header-search-form">
                                        <input placeholder="Search" type="text" />
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="main-menu">
                                    <nav>
                                        <ul>
                                            <Menus />
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3">
                                <div className="header-right f-right">
                                    <div className="header-lang-3 f-right pos-rel">
                                        <div className="lang-icon">
                                            <Image src={flagIcon} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                            <Link href="#"><i className="far fa-angle-down"></i></Link>
                                        </div>
                                        <ul className="header-lang-list">
                                            <li><Link href="#">USA</Link></li>
                                            <li><Link href="#">UK</Link></li>
                                            <li><Link href="#">CA</Link></li>
                                            <li><Link href="#">AU</Link></li>
                                        </ul>
                                    </div>
                                    <div className="menu-bar info-bar f-right d-none d-md-none d-lg-block">
                                        <button onClick={handleInfoSidebar}><i className="fal fa-bars"></i></button>
                                    </div>
                                    <div className="cart-icon f-right d-none d-lg-block">
                                        <Link href="/my-account"><i className="far fa-user-circle"></i></Link>
                                        <button onClick={() => { setCartOpen(!cartOpen) }}><i className="far fa-cart-plus"></i>
                                            <span className="cart-1">{UseCartProductQuantity()}</span>
                                        </button>
                                        <Link href="/wishlist"><i className="far fa-heart">
                                            <span className="cart-1">{UseWishlstQuantity()}</span>
                                        </i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile-menu">
                                    <MobileMenus />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <InfoSidebar isOpenInfoSidebar={isOpenInfoSidebar} setIsOpenInfoSidebar={setIsOpenInfoSidebar} />
                <CartSidebar cartOpen={cartOpen} setCartOpen={setCartOpen} />
                <div onClick={() => setCartOpen(false)} className={cartOpen ? "body-overlay show" : "body-overlay"}></div>
                <div onClick={toggleSideMenu} className={sideMenuOpen ? "body-overlay show" : "body-overlay"}></div>
                <div onClick={() => setIsOpenInfoSidebar} className={isOpenInfoSidebar ? "body-overlay show" : "body-overlay"}></div>
            </header>
        </>
    );
};

export default HeaderThree;