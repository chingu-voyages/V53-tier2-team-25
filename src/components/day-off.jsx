import React from 'react';

const DayOff = ({day}) => {
  return (
    <div className="day-off-wrapper flex flex-col justify-between h-full">
        <div className='card-header: card-data flex justify-center p-2 border-b-2 border-[#528540] bg-[#ACD084]'>
            <h2 className='font-bold'>{day}</h2>
        </div>
      
        <div className="card-data bg-[#ACD084] flex justify-center items-center h-full font-bold text-[20px]">
            <h1>Day Off</h1>
        </div>
      
        <div className="card-footer: flex justify-center h-10 w-full p-2 bg-[#ACD084]">
            <button className='bg-[#528540] text-white rounded-lg w-40'>Select Dish +</button>
        </div>
    </div>
  );
};

export default DayOff;