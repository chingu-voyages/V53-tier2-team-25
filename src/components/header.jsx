import PlatepalLogo from '../assets/images/Platepal-Logo.svg'; 


const Header = () => {
  return (
    <header className="bg-[#528540] text-white p-3 flex justify-between items-center">
      <div className="flex items-center w-full sm:justify-start justify-between">
        <div className="w-14 h-14  rounded-full flex items-center justify-center text-xl font-bold">
          <img src={PlatepalLogo} alt="Platepal Logo" />
        </div>
        <span className="ml-6 text-4xl font-semibold">PlatePal</span>
      </div>
    </header>
  );
};

export default Header;
