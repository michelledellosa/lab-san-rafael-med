import BlogGridMainArea from '@/components/blog-grid/BlogGridMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <BlogGridMainArea />
            </main>
        </Wrapper>
    );
};

export default page;