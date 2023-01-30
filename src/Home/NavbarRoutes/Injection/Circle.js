import React from 'react';

const Circle = ({ className, children, circle }) => {
    return (
        <div>

            <div className={className}>{children}</div>
        </div>
    );
};

export default Circle;