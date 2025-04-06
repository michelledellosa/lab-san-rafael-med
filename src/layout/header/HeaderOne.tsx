"use client"
import Link from 'next/link';
import React, { useState } from 'react';
//import Logo from '../../../public/assets/img/logo/logo.png';
import Logo from '../../../public/assets/img/laboratory/logo-lab-san-rafael.png';
import Image from 'next/image';
import useGlobalContext from '@/hooks/use-context';
import InfoSidebar from '../sidebar/InfoSidebar';
import Menus from './components/Menus';
import MobileMenus from './components/MobileMenus';
import useCart from '@/hooks/useCart';
import CartSidebar from './CartSidebar';
import { usePathname } from 'next/navigation';
import HeaderTop from './components/HeaderTop';

const HeaderOne = () => {
    const { scrollDirection, toggleSideMenu, sideMenuOpen } = useGlobalContext()
    const [isOpenInfoSidebar, setIsOpenInfoSidebar] = useState<boolean>(false)
    const [cartOpen, setCartOpen] = useState(false);
    const { UseWishlstQuantity, UseCartProductQuantity } = useCart();
    const TotalCartQuantity = UseCartProductQuantity();
    const TotalWishListQuantity = UseWishlstQuantity();
    const pathName = usePathname()

    const handleInfoSidebar = () => {
        setIsOpenInfoSidebar(!isOpenInfoSidebar)
    }


    return (
        <>
            <header>
                <HeaderTop />
                <div className={`main-menu-area menu-01 pl-165 pr-165
                 ${scrollDirection === "down" ? "sticky" : ""} 
                 ${pathName === '/my-account' ? "border-style-main" : ""}`}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-8 col-md-6">
                                <div className="logo">
                                    <Link href="/">
                                   
                                        <Image src={Logo}
                                        //style={{ width: "auto", height: "auto" }} alt="image not found"
                                        style={{ width: "50%", height: "50%", maxWidth:"100px", maxHeight:"100px" }} alt="image not found" 
                                        />

                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-4 d-lg-none">
                                <div onClick={toggleSideMenu} className="menu-bar menu-bar-2 text-end">
                                    <button className="menu-cat-toggle"><i className="fal fa-bars"></i></button>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 d-none d-lg-block">
                                <div className="header-right f-right">
                                    {/*<div className="cart-icon f-right d-none d-lg-block">
                                        <button onClick={() => { setCartOpen(!cartOpen) }}><i className="far fa-cart-plus"></i>
                                            <span className="cart-1">{TotalCartQuantity}</span>
                                        </button>
                                        <Link href="/wishlist"><i className="far fa-heart">
                                            <span className="cart-1">{TotalWishListQuantity}</span>
                                        </i></Link>
                                    </div>*/}
                                    <div className="menu-bar info-bar f-right d-none d-md-none d-lg-block">
                                        <button onClick={handleInfoSidebar} ><i className="fal fa-bars"></i></button>
                                    </div>
                                   {/*} <div className="header-search f-right d-none d-xl-block">
                                        <form className="header-search-form">
                                            <input placeholder="Search" type="text" />
                                            <button type="submit"><i className="far fa-search"></i></button>
                                        </form>
                                    </div>*/}
                                </div>
                                <div className="main-menu">
                                    <nav>
                                        <ul>
                                            <Menus />
                                        </ul>
                                    </nav>
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
                {/*<CartSidebar cartOpen={cartOpen} setCartOpen={setCartOpen} />*/}
                {/*<div onClick={() => setCartOpen(false)} className={cartOpen ? "body-overlay show" : "body-overlay"}></div>*/}
                <div onClick={toggleSideMenu} className={sideMenuOpen ? "body-overlay show" : "body-overlay"}></div>
                <div onClick={() => setIsOpenInfoSidebar} className={isOpenInfoSidebar ? "body-overlay show" : "body-overlay"}></div>
            </header>
        </>
    );
};

export default HeaderOne;