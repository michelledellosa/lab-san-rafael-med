import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ShopProductArea from './ShopProductArea';
import BrandSectionOne from '../home/BrandSectionOne';
import InstragramArea from '../home/InstragramArea';

const ShopMainArea = () => {
    return (
        <>
            <Breadcrumb title='Shop Grid' subTitle='Shop' />
            <ShopProductArea />
            <BrandSectionOne />
            <InstragramArea />
        </>
    );
};

export default ShopMainArea;