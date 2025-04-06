import React from 'react';
import FutureProductThree from './FutureProductThree';
import ShopArea from './ShopArea';
import FeaturesThree from './FeaturesThree';
import HeroSliderOne from '../Elements/HeroSlider/HeroSliderOne';
import ProductThreeSection from './ProductThreeSection';
import CategoryProductThree from './CategoryProductThree';
import CategoryBannerThree from './CategoryBannerThree';
import InstragramArea from '../home/InstragramArea';
import BestSellingProducts from '../homeThree/BestSellingProducts';
import BlogAreaThree from './BlogAreaThree';

const HomeThreeMain = () => {
    return (
        <>
            <HeroSliderOne />
            <FutureProductThree />
            {/*<CategoryProductThree />
            <CategoryBannerThree />*/}
            <ProductThreeSection />
            {/*<ShopArea />*/}
            {/*<BestSellingProducts />*/}
            {/*<BlogAreaThree />*/}
            {/*<InstragramArea />
            <FeaturesThree />*/}
        </>
    );
};

export default HomeThreeMain;