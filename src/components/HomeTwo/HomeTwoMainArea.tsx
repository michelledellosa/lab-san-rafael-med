import React from 'react';
import BannerAreaThree from './BannerAreaThree';
import FutureProductTwo from './FutureProductTwo';
import ProductAreaTwo from './ProductAreaTwo';
import BrandAreaTwo from './BrandAreaTwo';
import FutureArea from '../home/FutureArea';
import BannerAreaTwo from './BannerAreaTwo';
import DealAreaTwo from './DealAreaTwo';
import TestimonialSliderTwo from '../Elements/Testimonial/TestimonialSliderTwo';

const HomeTwoMainArea = () => {
    return (
        <>
            <BannerAreaTwo />
            <BannerAreaThree />
            <FutureProductTwo />
            <ProductAreaTwo />
            <DealAreaTwo />
            <TestimonialSliderTwo wrapperSpacingClass="pt-100 pb-175" />
            <BrandAreaTwo />
            <FutureArea />
        </>
    );
};

export default HomeTwoMainArea;