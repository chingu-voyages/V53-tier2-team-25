import Card from "../components/card-data.jsx";
// import DayOff from "./day-off.jsx";

const DishSelect = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className='dish_select'>
      <div className='dish_select--header mt-7 mb-10 flex justify-center w-full font-bold'>
        <h1 className="font-[600] text-[24px] snap-center leading-[30px] mt-10">
          Change or remove dishes based on your preferences
        </h1>
      </div>

      <div className="dish_select--card-wrapper">
        <div className="cards_mon-thurs w-full flex justify-center pb-5 gap-5">
          {days.slice(0, 4).map((day, index) => (
            <li key={index} className='card-style_tw-config shadow-md hover:shadow-[0_0_5px_#f17528] transition-shadow duration-300 rounded-lg'>
              <Card day={day} />
            </li>
          ))}
        </div>

        <div className="cards_fri-sun w-full flex justify-center gap-5">
          {days.slice(4, 7).map((day, index) => (
             <li key={index} className='card-style_tw-config shadow-md hover:shadow-[0_0_5px_#f17528] transition-shadow duration-300 rounded-lg'>
              <Card day={day} />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DishSelect;
