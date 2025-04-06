import BlogStandardMain from '@/components/blog-standerd/BlogStandardMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <BlogStandardMain />
            </main>
        </Wrapper>
    );
};

export default page;