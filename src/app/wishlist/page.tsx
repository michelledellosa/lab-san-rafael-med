import WishlistMainArea from '@/components/wishlist/WishlistMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <WishlistMainArea />
            </main>
        </Wrapper>
    );
};

export default page;