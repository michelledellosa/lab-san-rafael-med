import CheckoutMainArea from '@/components/checkout/CheckoutMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <CheckoutMainArea />
            </main>
        </Wrapper>
    );
};

export default page;