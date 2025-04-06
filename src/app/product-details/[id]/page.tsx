import ProductDetailsMain from '@/components/product-details/ProductDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <Wrapper>
            <main>
                <ProductDetailsMain id={id} />
            </main>
        </Wrapper>
    );
};

export default page;