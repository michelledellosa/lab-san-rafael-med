import AboutMainPage from '@/components/about/AboutMainPage';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <AboutMainPage />
            </main>
        </Wrapper>
    );
};

export default page;