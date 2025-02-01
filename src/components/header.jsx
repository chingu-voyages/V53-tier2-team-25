import PlatepalLogo from '../assets/images/Platepal-Logo.svg'; 
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <header className="bg-[#528540] text-white p-3  w-full flex justify-between items-center">
      <div className="flex items-center w-full sm:justify-start justify-between">
        <div className="h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold">
          <Link to= "/">
          <img className='h-13' src={PlatepalLogo} alt="Platepal Logo" />
          </Link>
        </div>
        <span className="ml-6 text-4xl font-poppins font-semibold text-neutral-l-ight ">PlatePal</span>
      </div>
   
    </header>
  );
};

export default Header;
