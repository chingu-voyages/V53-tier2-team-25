import React from 'react';

const Card = ({ day }) => {
  return (
    <div className="card-wrapper flex flex-col justify-between h-full">
        <div className='card-header: card-data flex justify-end p-2'>
            <h2 className='font-bold '>{day}</h2>
            <button className='ml-8 rounded-[20px] bg-gray-400 h-[20px] w-[20px] text-white font-bold'>X</button>
        </div>

        <div className="card-data bg-blue-300 flex justify-center items-center h-full">
            <h1>API Data</h1>
        </div>

        <div className="card-footer: flex justify-center h-10 w-full p-2">
            <button className='bg-[#528540] text-white rounded-lg w-40'>Complete Menu</button>
        </div>
    </div>
  );
};

export default Card;