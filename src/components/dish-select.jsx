const DishSelect = () => {
  return (
    <div className='dish_select'>
        <div className='dish_select--header mt-7 mb-10 flex justify-center w-full font-bold'>
            <h1 className="font-[600] text-[24px] snap-center leading-[30px]" >Change or remove dishes based on your preferences</h1>
        </div>
        <div className="dish_select--card-wrapper">
            <div className="cards_mon-thurs w-full flex justify-center">
                <li className='card-style_tw-config'>
                    <div className="card-header flex font-bold mt-1">
                        <h1>Monday</h1>
                        <button className="flex align-center justify-center mb-2 w-[20px] h-[20px] text-white bg-[#9f9f9f] rounded-full">X</button>
                    </div>
                </li>
                <li className='card-style_tw-config'>
                    <div className="card-header"><h1>Tuesday</h1><button>x</button></div>
                </li>
                <li className='card-style_tw-config'>
                    <div className="card-header"><h1>Wednesday</h1><button>x</button></div>
                </li>
                <li className='card-style_tw-config'>
                    <div className="card-header"><h1>Thursday</h1><button>x</button></div>
                </li>
            </div>
            <div className="cards_fri-sun w-full flex justify-center gap-4 pt-5">
                <li className='card-style_tw-config'>
                    <div className="card-header"><h1>Friday</h1><button>x</button></div>
                </li>
                <li className='card-style_tw-config'>
                    <div className="card-header"><h1>Saturday</h1><button>x</button></div>
                </li>
                <li className='card-style_tw-config'>
                    <div className="card-header "><h1>Sunday</h1><button>x</button></div>
                </li>
            </div>
        </div>
    </div>
  );
};

export default DishSelect;