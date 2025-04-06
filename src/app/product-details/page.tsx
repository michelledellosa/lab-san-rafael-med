import ProductDetailsMain from '@/components/product-details/ProductDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    const id = 1
    return (
        <Wrapper>
            <main>
                <ProductDetailsMain id={id} />
            </main>
        </Wrapper>
    );
};

export default page;