import { useEffect, useState } from "react";

export default function DisplayCount({ count, isNoneOptionSelected }) {
  const [displayMessage, setDisplayMessage] = useState(
    `${count} Allergies Selected`
  );

  function updateDisplayMessage() {
    if (isNoneOptionSelected) {
      setDisplayMessage(`No Allergies Selected`);
    } else if (count === 6) {
      setDisplayMessage(`All 6 Allergies Selected`);
    } else {
      setDisplayMessage(`${count} Allergies Selected`);
    }
  }

  useEffect(() => {
    updateDisplayMessage();
  }, [count]);

  useEffect(() => {
    updateDisplayMessage();
  }, [isNoneOptionSelected]);

  return (
    <div className="font-semibold">
      <div>{displayMessage}</div>
    </div>
  );
}
