import React from 'react';
import HeroOne from './HeroOne';
import BannerArea from './BannerArea';
import ProductArea from './ProductArea';
import DealArea from './DealArea';
import BannerProductArea from './BannerProductArea';
import FutureProductArea from './FutureProductArea';
import BlogAreaOne from './BlogAreaOne';
import BrandSectionOne from './BrandSectionOne';
import FutureArea from './FutureArea';
import TestimonialSlider from '../Elements/Testimonial/TestimonialSlider';
import InstragramArea from './InstragramArea';

const HomeMain = () => {
    return (
        <>
            <HeroOne />
            <BannerArea />
            <ProductArea />
            <DealArea />
            <BannerProductArea />
            <FutureProductArea />
            <TestimonialSlider />
            <BlogAreaOne />
            <BrandSectionOne />
            <FutureArea />
            <InstragramArea />
        </>
    );
};

export default HomeMain;