import ShoptLeftSidebarMain from '@/components/shop-left-sidebar/ShoptLeftSidebarMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <ShoptLeftSidebarMain />
            </main>
        </Wrapper>
    );
};

export default page;