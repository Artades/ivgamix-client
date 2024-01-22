import React, { FC } from 'react';

interface IndicatorProps {
    dateOfCreation?:string;
    className?: string;
}
const Indicator:FC<IndicatorProps> = ({className, dateOfCreation}) => {
    return (
        <div className={`w-3 h-3 rounded-full bg-white ${className}`} />
            
        
    );
};

export default Indicator;