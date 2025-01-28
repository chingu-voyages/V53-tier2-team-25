import alerticon from "../../assets/images/alerticon.png";
import { useEffect, useState } from "react";

export default function CheckBoxContinue({
  readyToSave,
  allergyObjects,
  count,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(true);

  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  function checkboxStatus() {
    if (readyToSave) {
      setIsCheckboxDisabled(false);
    } else if (!readyToSave) {
      setIsChecked(false);
      setIsCheckboxDisabled(true);
    }
  }

  useEffect(() => {
    checkboxStatus();
  }, [readyToSave]);

  function checkIfCanContinue() {
    if (isCheckboxDisabled) {
      setIsContinueDisabled(true);
    } else if (!isCheckboxDisabled) {
      setIsContinueDisabled(false);
    }
  }

  useEffect(() => {
    checkIfCanContinue();
  }, [isCheckboxDisabled]);

  const [useLocalStorage, setUseLocalStorage] = useState(false);
  const [useSessionStorage, setUseSessionStorage] = useState(true);

  function checkStorageType() {
    if (!isChecked) {
      setUseLocalStorage(false);
      setUseSessionStorage(true);
    } else if (isChecked) {
      setUseLocalStorage(true);
      setUseSessionStorage(false);
    }
  }

  useEffect(() => {
    checkStorageType();
  }, [isChecked]);

  function setLocalStorage() {
    if (useLocalStorage) {
      localStorage.setItem("allergies", JSON.stringify(allergyObjects));
    } else if (!useLocalStorage) {
      localStorage.removeItem("allergies");
    }
  }

  useEffect(() => {
    setLocalStorage();
  }, [useLocalStorage]);

  useEffect(() => {
    setLocalStorage();
  }, [count]);

  function setSessionStorage() {
    if (useSessionStorage) {
      sessionStorage.setItem("allergies", JSON.stringify(allergyObjects));
    } else if (!useSessionStorage) {
      sessionStorage.removeItem("allergies");
    }
  }

  useEffect(() => {
    setSessionStorage();
  }, [useSessionStorage]);

  useEffect(() => {
    setSessionStorage();
  }, [count]);

  const [isAlertShown, setIsAlertShown] = useState(false);

  const continueColor = isContinueDisabled ? "bg-mediumGray" : "bg-textOrange";

  const continueBorder = isAlertShown
    ? "border-alertColor"
    : "border-mediumGray";

  const alertMessage = (
    <div className="text-alertColor justify-self-center mt-4 font-semibold flex items-center">
      <div>
        <img src={alerticon} />
      </div>
      <div className="ml-2">Must make a selection.</div>
    </div>
  );

  const continueStyle = `${continueColor} border ${continueBorder} py-4 px-2 text-xl font-bold rounded-custom10 w-[281px] h-[56px]`;

  function clickContinue() {
    if (!isContinueDisabled) {
      console.log(allergyObjects);
    } else if (isContinueDisabled) {
      setIsAlertShown(true);
    }
  }

  function checkAlert() {
    if (!isCheckboxDisabled) {
      setIsAlertShown(false);
    }
  }

  useEffect(() => {
    checkAlert();
  }, [isCheckboxDisabled]);

  const checkboxBorder = isCheckboxDisabled
    ? "border-mediumGray"
    : "border-customBlack";

  const checkBoxPointer = isCheckboxDisabled ? "" : "cursor-pointer";

  const checkboxStyle = `w-4 h-4 appearance-none border-2 ${checkboxBorder} rounded ${checkBoxPointer} checked:bg-[#636363]`;

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={isCheckboxDisabled}
          className={checkboxStyle}
        />

        <div className="ml-2 text-sm">Save selections</div>
      </div>

      <div className="mt-4">
        <button className={continueStyle} onClick={() => clickContinue()}>
          Continue
        </button>
        <div>{isAlertShown && alertMessage}</div>
      </div>
    </div>
  );
}
