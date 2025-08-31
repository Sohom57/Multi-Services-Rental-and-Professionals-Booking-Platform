import React from 'react';

const AvailableDay = ({availableDay}) => {
    return (
        <div>
            <div className='px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#FFA00016] text-[#FFA000] pjsm  text-[12px] sm:text-sm text-center border-1 border-[#FFA0002b]'>
                <p>{availableDay}</p>
            </div>
        </div>
    );
};

export default AvailableDay;