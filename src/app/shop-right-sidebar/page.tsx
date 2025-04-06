import ShopRightSidebarMain from '@/components/shop-right-sidebar/ShopRightSidebarMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <ShopRightSidebarMain />
            </main>
        </Wrapper>
    );
};

export default page;