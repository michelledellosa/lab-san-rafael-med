import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../../public/assets/img/logo/logo.png';
import FlagIcon from '../../../public/assets/img/icon/flag.png';
import Image from 'next/image';
import useGlobalContext from '@/hooks/use-context';
import InfoSidebar from '../sidebar/InfoSidebar';
import Menus from './components/Menus';
import MobileMenus from './components/MobileMenus';
import CartSidebar from './CartSidebar';
import useCart from '@/hooks/useCart';

const HeaderTwo = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const { UseWishlstQuantity, UseCartProductQuantity } = useCart();
    const [isOpenInfoSidebar, setIsOpenInfoSidebar] = useState<boolean>(false)
    const { scrollDirection, toggleSideMenu, sideMenuOpen } = useGlobalContext()
    const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false)
    const handleInfoSidebar = () => {
        setIsOpenInfoSidebar(!isOpenInfoSidebar)
    }
    const handleCategories = () => {
        setIsCategoryOpen(!isCategoryOpen)
    }

    const TotalCartQuantity = UseCartProductQuantity();
    const TotalWishListQuantity = UseWishlstQuantity();

    return (
        <>
            <header>
                <div className="header-area grey-3-bg pl-55 pr-55">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-8 col-lg-9 col-md-8">
                                <div className="header-top-wrapper">
                                    <div className="header-info">
                                        <span><i className="far fa-phone"></i>
                                            Call Us <Link href="tel:+1234567879" target='_blank'>+123 (456) 7879</Link>
                                        </span>
                                        <span className="envelopes-header-icon"><i className="far fa-envelope-open"></i>
                                            <Link href="mailto:support@gmail.com" target='_blank'>
                                                support@gmail.com
                                            </Link>
                                        </span>
                                        <span className="mails-header-icon"><i className="far fa-map-marked"></i>
                                            <Link href="#"> 205 Main Street, USA</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3 col-md-4">
                                <div className="header-icon f-right">
                                    <Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link>
                                    <Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link>
                                    <Link href="https://www.google.com/" target="_blank"><i className="fab fa-google-plus-g"></i></Link>
                                    <Link href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></Link>
                                    <Link href="https://olympics.com/" target="_blank"><i className="far fa-basketball-ball"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className={`main-menu-area menu-02 pl-55 pr-55 ${scrollDirection === "down" ? "sticky" : ""}`}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-8">
                                <div className="logo">
                                    <Link href="/">
                                        <Image src={Logo} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-4 d-lg-none">
                                <div className="menu-bar menu-bar-2 text-end" onClick={toggleSideMenu}>
                                    <button className="menu-cat-toggle"><i className="fal fa-bars"></i></button>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-6 d-none d-lg-inline-block">
                                <div className="main-menu">
                                    <nav>
                                        <ul>
                                            <Menus />
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3 d-none d-lg-block text-end">
                                <div className="header-top-right text-md-right">
                                    <div className="shop-menu">
                                        <ul>
                                            <li><Link className="se-icon" href="#"><i className="far fa-search"></i> Search</Link></li>
                                            <li><Link className="my-icon" href="/my-account"><i className="fal fa-user-circle"></i> My Account</Link></li>
                                            <li className='cart-icon-1'>
                                                <button onClick={() => { setCartOpen(!cartOpen) }}><i className="far fa-cart-plus"></i>
                                                    <span className="cart-1">{TotalCartQuantity}</span>
                                                </button>
                                            </li>
                                            <li className='cart-icon-1'>
                                                <Link href="/wishlist"><i className="far fa-heart"></i>
                                                    <span className="cart-1">{TotalWishListQuantity}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mobile-menu">
                                    <MobileMenus />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-search-area pt-15 pb-15 pl-55 pr-55">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-4">
                                <div className="position-relative">
                                    <div className="menu-bar menu-bar-2 ">
                                        <button onClick={handleCategories} className="cat-toggle"><i className="fal fa-bars"></i></button>
                                        <span>Categories</span>
                                    </div>
                                    <div className={isCategoryOpen ? "category-menu d-block" : "category-menu"}>
                                        <ul>
                                            <li><Link href="/shop-grid"><i className="fa-light fa-pump-soap"></i>Hand Sanitizer</Link></li>
                                            <li><Link href="/shop-grid"><i className="fal fa-thermometer"></i> medical meter</Link></li>
                                            <li><Link href="/shop-grid"><i className="fa-regular fa-house-medical"></i> home accessories</Link></li>
                                            <li><Link href="/shop-grid"><i className="fal fa-mask"></i> surgery mask</Link></li>
                                            <li><Link href="/shop-grid"><i className="fal fa-wheelchair"></i> disable chair</Link></li>
                                            <li><Link href="/shop-grid"><i className="fal fa-mitten"></i> hand gloves</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7 col-md-6 d-none d-lg-block">
                                <div className="header-search header-02-search ">
                                    <form className="header-search-form">
                                        <input placeholder="Search" type="text" />
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-6 col-8">
                                <div className="header-02-right">
                                    <div className="menu-bar menu-bar-2 menu-bar-3 f-right">
                                        <button onClick={handleInfoSidebar} className="info-bar"><i className="fa-solid fa-grid-2"></i></button>
                                    </div>
                                    <div className="header-lang f-right pos-rel">
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
                                    </div>
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
            </header >

        </>
    );
};

export default HeaderTwo;