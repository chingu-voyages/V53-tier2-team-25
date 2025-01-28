import { useState } from "react";

export default function SelectAllNone({
  selectAll,
  selectNone,
  isNoneOptionSelected,
  isAllOptionSelected,
}) {
  const selectAllBackground = isAllOptionSelected ? "bg-selectAllGreen" : "";
  const selectNoneBackground = isNoneOptionSelected ? "bg-selectNoneRed" : "";

  const selectAllTextColor = isAllOptionSelected
    ? "text-neutralLight"
    : "text-customBlack";
  const selectNoneTextColor = isNoneOptionSelected
    ? "text-neutralLight"
    : "text-customBlack";

  const selectAllStyle = `${selectAllBackground} ${selectAllTextColor} flex items-center justify-center w-[95px] h-[93px] border-custom5 rounded-custom98 py-custom13 px-custom22 border-selectAllGreen m-2`;

  const selectNoneStyle = `${selectNoneBackground} ${selectNoneTextColor} flex items-center justify-center w-[95px] h-[93px] border-custom5 rounded-custom98 py-custom13 px-custom22 border-selectNoneRed m-2`;

  return (
    <div className="flex text-sm font-bold text-nowrap">
      <button className={selectNoneStyle} onClick={() => selectNone()}>
        None
      </button>

      <button
        className={selectAllStyle}
        onClick={() => {
          selectAll();
        }}
      >
        Select All
      </button>
    </div>
  );
}
