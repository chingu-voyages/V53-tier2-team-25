import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PlaceHolderImage1 from "../assets/images/Placeholderimage1.png";
import PlaceHolderImage2 from "../assets/images/Placeholderimage2.png";
import PlaceHolderImage3 from "../assets/images/Placeholderimage3.png";
import PlaceHolderImage4 from "../assets/images/Placeholderimage4.png";

const placeholderImages = [
  PlaceHolderImage1,
  PlaceHolderImage2,
  PlaceHolderImage3,
  PlaceHolderImage4
];

const DayOnCard = ({ day, index, meals }) => {
  const placeholderImage = placeholderImages[index % placeholderImages.length];
  const { id, name, image, ingredients, caloriesPerServing } = meals;

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-[150px] sm:w-[265px]  w-[160px]  h-[250px] sm:h-[360px] border-2 border-[#528540]">
      <button className="absolute top-2 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-300 border hover:text-red-500 hover:border-red-500">
        <FontAwesomeIcon
          icon={faTimes}
          className="w-3 h-3 sm:w-4 sm:h-4 text-[#fffbf1]"
        />
      </button>

      <div className="bg-[#fffbf1] p-2 sm:p-3 text-center text-sm sm:text-xl font-semibold">
        {day}
      </div>

      <div className="px-4 sm:px-7 bg-[#fffbf1]">
        <div
          className="w-full bg-cover h-[100px] sm:h-[150px] rounded-lg"
          style={{
            backgroundImage: `url(${image})` || `url(${placeholderImage} )`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="bg-[#fffbf1] p-2 sm:p-4 flex flex-col">
        <div className="flex justify-between">
          <h4 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">{name}</h4>
          <h4 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">
            {caloriesPerServing}
          </h4>
        </div>

        <p className="text-xs sm:text-sm text-gray-700 h-[20px] sm:h-[30px] overflow-hidden">
          {ingredients}
        </p>
        <p className="text-xs sm:text-sm text-[#528540] mb-1">Read More</p>

        <button className="text-xs sm:text-sm px-2 sm:px-3 py-1 mt-1 sm:mt-2 bg-[#528540] text-white rounded-md hover:bg-orange-700 self-center">
          Change Dish
        </button>
      </div>
    </div>
  );
};

export default DayOnCard;
