"use client";
import CountUpContent from "@/components/common/counter/CountUpContent";
import useCart from "@/hooks/useCart";
import React from "react";
const DashboardCounter = () => {
  const { UseCartProductQuantity, UseWishlstQuantity } = useCart()
  const TotalCartQuantity = UseCartProductQuantity();
  const TotalWishListQuantity = UseWishlstQuantity();

  return (
    <div className="row">
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap"></div>
            <div className="count-number">
              <span className="profile-counter">
                <CountUpContent number={8} />
              </span>
              <p>My purches</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap"></div>
            <div className="count-number">
              <span className="profile-counter">
                <CountUpContent number={TotalCartQuantity} />
              </span>
              <p>My Cart</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap"></div>
            <div className="count-number">
              <span className="profile-counter">
                <CountUpContent number={TotalWishListQuantity} />
              </span>
              <p>My Wishlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCounter;
