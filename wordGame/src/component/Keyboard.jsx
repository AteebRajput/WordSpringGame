import React, { useEffect, useCallback, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const key1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const key2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const key3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"];

  const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);

  // Handle physical keyboard input
  const handleKeyPress = useCallback(
    (event) => {
      const { key } = event;
      if (key === "Enter") {
        onEnter();
      } else if (key === "Backspace" || key === "Delete") {
        onDelete();
      } else if (/^[a-zA-Z]$/.test(key)) {
        onSelectLetter(key.toUpperCase());
      }
    },
    [onEnter, onDelete, onSelectLetter]
  );

  // Add event listener for key press
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="flex flex-col items-center space-y-2 mt-5">
      {/* Line 1 */}
      <div className="flex space-x-2">
        {key1.map((key) => (
          <Key keyVal={key} key={key} onClick={() => onSelectLetter(key)} />
        ))}
      </div>

      {/* Line 2 */}
      <div className="flex space-x-2">
        {key2.map((key) => (
          <Key keyVal={key} key={key} onClick={() => onSelectLetter(key)} />
        ))}
      </div>

      {/* Line 3 with Enter and Delete */}
      <div className="flex space-x-2">
        {key3.map((key) => (
          <Key
            keyVal={key}
            key={key}
            bigKey={key === "Enter" || key === "Delete"}
            onClick={() =>
              key === "Enter" ? onEnter() : key === "Delete" ? onDelete() : onSelectLetter(key)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
