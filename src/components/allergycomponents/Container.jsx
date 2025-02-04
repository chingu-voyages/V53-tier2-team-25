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
  nextStep,
  backStep,
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

  function checkClickedAllSix() {
    if (count === 6) {
      setIsAllOptionSelected(true);
    }
  }

  useEffect(() => {
    setCount(0);
    countSelection();
  }, [allergyObjects]);

  useEffect(() => {
    checkIfZero();
    checkIfNotAll();
    checkClickedAllSix();
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

      <div className="flex flex-wrap justify-center w-full max-w-4xl px-4 md:px-16 lg:px-32 gap-4 md:gap-6">
        <ButtonContainer
          allergyObjects={allergyObjects}
          handleClick={handleClick}
        />
      </div>

      <div className="mt-8 flex justify-center">
        <CheckBoxContinue
          readyToSave={readyToSave}
          allergyObjects={allergyObjects}
          count={count}
          nextStep={nextStep}
        />
      </div>

      <div className="text-center mt-4">
        <button
          onClick={() => backStep()}
          className="underline raleway-font text-sm"
        >
          Back To Week Selection
        </button>
      </div>
    </div>
  );
}
