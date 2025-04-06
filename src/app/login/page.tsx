import LoginMainArea from '@/components/login/LoginMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <LoginMainArea />
            </main>
        </Wrapper>
    );
};

export default page;