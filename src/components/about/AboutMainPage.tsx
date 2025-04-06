import React from 'react';

import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AboutArea from './AboutArea';
import AboutConuter from './AboutConuter';
import AboutFutureArea from './AboutFutureArea';
import AboutTeamArea from './AboutTeamArea';
import TestimonialSliderTwo from '../Elements/Testimonial/TestimonialSliderTwo';
import InstragramArea from '../home/InstragramArea';
import AboutCta from './AboutCta';
import BrandSectionTwo from './BrandSectionTwo';

const AboutMainPage = () => {
    return (
        <>
            <Breadcrumb title='Sobre Nosotros' subTitle='sobre Nosotros' />
            <AboutArea />
            {/*<AboutConuter />*/}
            {/*<AboutFutureArea />*/}
            {/*<AboutTeamArea />*/}
            {/*<AboutCta />*/}
            {/*<TestimonialSliderTwo wrapperSpacingClass="pt-100 pb-200" />*/}
            {/*<BrandSectionTwo />*/}
            {/*<InstragramArea />*/}
        </>
    );
};

export default AboutMainPage;