import React from 'react';

const Card = ({ day }) => {
  return (
    <div className="card-wrapper flex flex-col justify-between h-full">
        <div className='card-header: card-data w-full flex p-2'>
            <div className='day: flex justify-center'><h2 className='font-bold'>{day}</h2></div>
            <div className='exit-btn'><button className='rounded-[20px] bg-gray-400 h-[20px] w-[25px] text-white font-bold'>X</button></div>
            
        </div>

        <div className="card-data bg-blue-300 flex justify-center items-center h-full">
            <h1>API Data</h1>
        </div>

        <div className="card-footer: flex justify-center h-10 w-full p-2">
            <button className='bg-[#528540] text-white rounded-lg w-32'>Change Dish</button>
        </div>
    </div>
  );
};

export default Card;