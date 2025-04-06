import BlogDetailsMain from '@/components/blog-details/BlogDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    const id = 13
    return (
        <Wrapper>
            <main>
                <BlogDetailsMain id={id} />
            </main>
        </Wrapper>
    );
};

export default page;