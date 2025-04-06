import TeamDetailsMain from '@/components/team-details/TeamDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    const id = 5;
    return (
        <Wrapper>
            <main>
                <TeamDetailsMain id={id} />
            </main>
        </Wrapper>
    );
};

export default page;