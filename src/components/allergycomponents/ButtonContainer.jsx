import AllergyButton from "./AllergyButton";

export default function ButtonContainer({ allergyObjects, handleClick }) {
  const buttonElements = allergyObjects.map((item) => {
    return (
      <AllergyButton key={item.id} item={item} handleClick={handleClick} />
    );
  });

  return (
      <div className="flex flex-wrap justify-center mt-4 mb-6">
        {buttonElements}
        </div>
    
  );
}
