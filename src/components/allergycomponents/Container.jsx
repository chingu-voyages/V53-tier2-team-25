import { useEffect, useState } from "react";
import SelectAllNone from "./SelectAllNone";
import DisplayCount from "./DisplayCount";
import CheckBoxContinue from "./CheckboxContinue";
import ButtonContainer from "./ButtonContainer";
import Title from "./Title";

export default function Container({
  allergyObjects,
  selectAll,
  selectNone,
  isNoneOptionSelected,
  setIsNoneOptionSelected,
  isAllOptionSelected,
  setIsAllOptionSelected,
  handleClick,
}) {
  const [readyToSave, setReadyToSave] = useState(false);
  const [count, setCount] = useState(0);

  function countSelection() {
    for (let i = 0; i < allergyObjects.length; i++) {
      if (allergyObjects[i].isSelected === true) {
        setCount((prev) => prev + 1);
      }
    }
  }

  function checkIfZero() {
    if (count > 0) {
      setIsNoneOptionSelected(false);
    }
  }

  function checkIfNotAll() {
    let n = allergyObjects.length;
    if (count < n) {
      setIsAllOptionSelected(false);
    }
  }

  useEffect(() => {
    setCount(0);
    countSelection();
  }, [allergyObjects]);

  useEffect(() => {
    checkIfZero();
    checkIfNotAll();
  }, [count]);

  function checkCount() {
    if (count > 0) {
      setReadyToSave(true);
    } else if (count === 0 && isNoneOptionSelected) {
      setReadyToSave(true);
    } else if (count === 0 && !isNoneOptionSelected) {
      setReadyToSave(false);
    }
  }

  useEffect(() => {
    checkCount();
  }, [count]);

  useEffect(() => {
    checkCount();
  }, [isNoneOptionSelected]);

  return (
    <div className="">
      <div className="flex justify-center p-6">
        <Title />
      </div>

      <div className="mt-4 flex justify-center">
        <SelectAllNone
          selectAll={selectAll}
          selectNone={selectNone}
          isNoneOptionSelected={isNoneOptionSelected}
          isAllOptionSelected={isAllOptionSelected}
        />
      </div>

      <div className="p-4 flex justify-center">
        <DisplayCount
          count={count}
          isNoneOptionSelected={isNoneOptionSelected}
        />
      </div>

      <div className="w-3/4 justify-self-center flex">
        <ButtonContainer
          allergyObjects={allergyObjects}
          handleClick={handleClick}
        />
      </div>

      <div className="mt-8 flex justify-center">
        <CheckBoxContinue
          readyToSave={readyToSave}
          allergyObjects={allergyObjects}
        />
      </div>

      <div className="text-center mt-6">
        <div className="underline raleway-font text-sm">
          Back To Week Selection
        </div>
      </div>
    </div>
  );
}
