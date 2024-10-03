// Letter.jsx
import React, { useContext } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemtVal }) {
  const { board, correctWord, currAttempt } = useContext(AppContext);
  const letter = board[attemtVal][letterPos];

  // Check if the current row has been submitted
  const correct = correctWord[letterPos] === letter; // Correct letter and position
  const almost = !correct && correctWord.includes(letter); // Correct letter, wrong position
  const letterState =
    currAttempt.attempt > attemtVal && (correct ? "correct" : almost ? "almost" : "error");

  return (
    <div
      className={`border border-black p-4 text-center rounded-lg text-xl font-bold ${
        letterState === "correct"
          ? "bg-green-500"
          : letterState === "almost"
          ? "bg-yellow-500"
          : "bg-gray-100"
      }`}
    >
      {letter}
    </div>
  );
}

export default Letter;
