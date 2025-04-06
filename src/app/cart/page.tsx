import CartMainArea from '@/components/cart/CartMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <CartMainArea />
            </main>
        </Wrapper>
    );
};

export default page;