import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/allergycomponents/Container";

export default function AllergyPage({ nextStep, backStep }) {
  const [allergyObjects, setAllergyObjects] = useState([
    {
      id: "Gluten-Free",
      name: "Gluten-Free",
      isSelected: false,
    },
    {
      id: "Egg-Free",
      name: "Egg-Free",
      isSelected: false,
    },
    {
      id: "Milk-Free",
      name: "Milk-Free",
      isSelected: false,
    },
    {
      id: "Shellfish-Free",
      name: "Shellfish-Free",
      isSelected: false,
    },
    {
      id: "Soy-Free",
      name: "Soy-Free",
      isSelected: false,
    },
    {
      id: "Tree Nut-Free",
      name: "Tree Nut-Free",
      isSelected: false,
    },
  ]);

  function handleClick(id) {
    setAllergyObjects((prev) =>
      prev.map((item) => {
        return item.id === id
          ? { ...item, isSelected: !item.isSelected }
          : item;
      })
    );
  }

  const [isNoneOptionSelected, setIsNoneOptionSelected] = useState(false);
  const [isAllOptionSelected, setIsAllOptionSelected] = useState(false);

  function selectAll() {
    setIsAllOptionSelected(true);
    setAllergyObjects((prev) =>
      prev.map((item) => {
        return {
          ...item,
          isSelected: true,
        };
      })
    );
  }

  function selectNone() {
    setIsNoneOptionSelected((prev) => !prev);
    setAllergyObjects((prev) =>
      prev.map((item) => {
        return {
          ...item,
          isSelected: false,
        };
      })
    );
  }

  return (
    <div>
      <div className="justify-self-center mt-16">
        <Container
          nextStep={nextStep}
          backStep={backStep}
          handleClick={handleClick}
          allergyObjects={allergyObjects}
          selectAll={selectAll}
          selectNone={selectNone}
          isNoneOptionSelected={isNoneOptionSelected}
          setIsNoneOptionSelected={setIsNoneOptionSelected}
          isAllOptionSelected={isAllOptionSelected}
          setIsAllOptionSelected={setIsAllOptionSelected}
        />
      </div>
    </div>
  );
}
