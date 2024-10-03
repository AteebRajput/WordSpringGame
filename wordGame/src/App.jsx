import { useState, useEffect } from "react";
import { boardDefault } from "./words";
import { createContext } from "react";
import Board from "./component/Board";
import Keyboard from "./component/Keyboard";
import { wordList } from "./words"; 

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(() => JSON.parse(JSON.stringify(boardDefault))); 
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setBoard(JSON.parse(JSON.stringify(boardDefault)));
    setCurrAttempt({ attempt: 0, letterPos: 0 });
    setCorrectWord(wordList[Math.floor(Math.random() * wordList.length)].toUpperCase());
  };

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;

    const newBoard = JSON.parse(JSON.stringify(board)); // Deep copy
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);

    setCurrAttempt((prev) => ({
      ...prev,
      letterPos: prev.letterPos + 1,
    }));
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let guessedWord = board[currAttempt.attempt].join("");

    if (guessedWord === correctWord) {
      alert("Congrats! You've guessed the word!");
    }

    setCurrAttempt((prev) => ({
      letterPos: 0,
      attempt: prev.attempt + 1,
    }));

    if (currAttempt.attempt >= 5) {
      alert("Game Over! The correct word was: " + correctWord);
    }
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;

    const newBoard = JSON.parse(JSON.stringify(board)); // Deep copy
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);

    setCurrAttempt((prev) => ({
      ...prev,
      letterPos: prev.letterPos - 1,
    }));
  };

  return (
    <div className="bg-gradient-to-r from-rose-400 to-orange-300 min-w-full min-h-screen">
      <nav className="flex align-center justify-center text-5xl pt-2 pb-4 font-bold tracking-wide border border-black shadow-2xl">
        <h1>WordSprint</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onEnter,
          onDelete,
          correctWord,
        }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
      <button
        className="mt-5 bg-blue-500 text-white py-2 px-4 rounded mx-auto block"
        onClick={resetGame}
      >
        Restart Game
      </button>
    </div>
  );
}

export default App;
