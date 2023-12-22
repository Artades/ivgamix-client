import React, { FC } from 'react';

interface TypographyProps {
    label: string;
    icon?: number;
}
const Typography:FC<TypographyProps> = ({label}) => {
    return (
      <h2 className='md:text-5xl text-3xl font-bold text-stone-200 my-10'>{label}</h2>
    );
};

export default Typography;