import React from 'react';

const ErrorMsgTwo = ({ error }: any) => {
    return (
        <>
            <p style={{ color: 'red' }}>{error}</p>
        </>
    );
};

export default ErrorMsgTwo;