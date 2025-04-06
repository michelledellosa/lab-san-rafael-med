import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import CouponArea from './CouponArea';
import CheckoutArea from './CheckoutArea';
import InstragramArea from '../home/InstragramArea';

const CheckoutMainArea = () => {
    return (
        <>
            <Breadcrumb title='Checkout' subTitle='Checkout' />
            <CouponArea />
            <CheckoutArea />
            <InstragramArea />
        </>
    );
};

export default CheckoutMainArea;