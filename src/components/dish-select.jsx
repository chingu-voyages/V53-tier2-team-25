
const DishSelect = () => {
  return (
    <div className='dish_select'>
        <div className='dish_select--header'>
            <h1>Change or remove dishes based on your preferences</h1>
        </div>
        <div className="dish_select--card-wrapper">
            <div className="cards_days-mtwt">
                <li className='card'>Monday</li>
                <li className='card'>Tuesday</li>
                <li className='card'>Wednesday</li>
                <li className='card'>Thursday</li>
            </div>
            <div className="cards_days-fss">
                <li className='card'>Friday</li>
                <li className='card'>Saturday</li>
                <li className='card'>Sunday</li>
            </div>
        </div>
    </div>
  );
};

export default DishSelect;