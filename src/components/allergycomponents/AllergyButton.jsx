import noicon from "../../assets/images/noicon.png";
import noiconwhite from "../../assets/images/noiconwhite.png";

export default function AllergyButton({ item, handleClick }) {
  const backgroundColor = item.isSelected ? "bg-darkGreen" : "bg-transparent";
  const textColor = item.isSelected ? "text-neutralLight" : "text-customBlack";
  const icon = item.isSelected ? noiconwhite : noicon;

  return (
    <div className="m-2">
      <button

        //does it work on mobile
        className={`${backgroundColor} ${textColor} text-sm w-full h-12 border-custom5 rounded-custom22 border-darkGreen flex items-center justify-center px-4 py-2`}
        onClick={() => handleClick(item.id)}
      >
        <div className="flex items-center">
          <img src={icon} alt={`${item.name} icon`} className="w-5 h-5" />
          <span className="ml-2">{item.name}</span>
        </div>
      </button>
    </div>
  );
}