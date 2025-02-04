import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/allergycomponents/Container";
import allergyObjectsData from "../allergies";

export default function AllergyPage({ nextStep, backStep }) {
  const [allergyObjects, setAllergyObjects] = useState(allergyObjectsData);

  const [priorSaved, setPriorSaved] = useState(false);

  function checkForLocalStorage() {
    let savedItems = JSON.parse(localStorage.getItem("allergies"));
    if (savedItems === null) {
      return;
    } else if (savedItems !== null) {
      setAllergyObjects(savedItems);
      setPriorSaved(true);
    }
  }

  useEffect(() => {
    checkForLocalStorage();
  }, []);

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
          priorSaved={priorSaved}
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
