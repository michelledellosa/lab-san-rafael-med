import BlogGridSidebarMain from '@/components/blog-grid-sidebar/BlogGridSidebarMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <BlogGridSidebarMain />
            </main>
        </Wrapper>
    );
};

export default page;