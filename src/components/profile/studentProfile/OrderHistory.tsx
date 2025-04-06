"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import demoImg from "../../../../public/assets/img/products/01.png"
const OrderHistory = () => {

  return (
    <>
      <div className="table-responsive">
        <div className="list-steps">
          <div className="item-step line-active">
            <div className="rounded-step">
              <div className="icon-step step-1 active"></div>
              <h6 className="mb-1">Order Placed</h6>
              <p className="font-md color-gray-500">05 Jan 1.50 PM</p>
            </div>
          </div>

          <div className="item-step line-active">
            <div className="rounded-step">
              <div className="icon-step step-2 active"></div>
              <h6 className="mb-1">In Production</h6>
              <p className="font-md color-gray-500">07 Jan 3.15 PM</p>
            </div>
          </div>

          <div className="item-step line-active">
            <div className="rounded-step">
              <div className="icon-step step-3 active"></div>
              <h6 className="mb-1">Shipping</h6>
              <p className="font-md color-gray-500">09 Jan 2.29 PM</p>
            </div>
          </div>

          <div className="item-step line-active">
            <div className="rounded-step">
              <div className="icon-step step-4 active"></div>
              <h6 className="mb-1">Delivered</h6>
              <p className="font-md color-gray-500">10 Jan 5.26 PM</p>
            </div>
          </div>
        </div>
      </div>

      <section className="cart-area pt-10 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">

              <div className="table-content table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Images</th>
                      <th className="cart-product-name">Product</th>
                      <th className="product-price">Unit Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-quantity">Status</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumbnail"><Link href="#">
                        <Image
                          src={demoImg}
                          style={{ width: "auto", height: "auto" }}
                          alt="image not found"
                        />
                      </Link></td>
                      <td className="product-name"><Link href="#"> Medical Microscope </Link></td>
                      <td className="product-price"><span className="amount"> 150 </span></td>
                      <td className="product-price"><span className="amount"> 4 </span></td>
                      <td className="product-price"><span className="amount"><button className="delivery_status_btn"> Delivered</button></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default OrderHistory;
