import noicon from "../../assets/images/noicon.png";
import noiconwhite from "../../assets/images/noiconwhite.png";

export default function AllergyButton({ item, handleClick }) {
  // const styles = {
  //   backgroundColor: item.isSelected ? "yellow" : "transparent",
  // };

  const backgroundColor = item.isSelected ? "bg-darkGreen" : "";
  const textColor = item.isSelected ? "text-neutralLight" : "text-customBlack";
  const className = `${backgroundColor} ${textColor} text-sm w-[173px] h-[48px] border-custom5 rounded-custom22 border-darkGreen`;

  const icon = item.isSelected ? noiconwhite : noicon;

  return (
    <div className="m-2">
      <button className={className} onClick={() => handleClick(item.id)}>
        <div className="flex justify-center">
          <img src={icon} />

          <div className="ml-2"
          >{item.name}</div>
        </div>
      </button>
    </div>
  );
}
