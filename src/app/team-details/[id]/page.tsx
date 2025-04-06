import TeamDetailsMain from '@/components/team-details/TeamDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <Wrapper>
            <main>
                <TeamDetailsMain id={id} />
            </main>
        </Wrapper>
    );
};

export default page;