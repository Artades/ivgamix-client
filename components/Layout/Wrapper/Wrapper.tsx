import React, { FC, ReactNode } from 'react';

interface WrapperProps {
    children: ReactNode
}

const Wrapper:FC<WrapperProps> = ({children}) => {
    return (
        <div className='max-w-[1000px] mx-auto px-2 md:px-0'>
            {children}
        </div>
    );
};

export default Wrapper;