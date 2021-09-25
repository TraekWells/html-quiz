import { createRef, useState } from "react";

const GuessInput = (props) => {
  let [guess, updateGuess] = useState("");
  const currentGuess = createRef("");

  const handleGuess = (event) => {
    // 1. Prevent the default behavior of the form
    // 2.
    event.preventDefault();
    updateGuess((guess = currentGuess.current.value));
    console.log(guess);
    currentGuess.current.value = "";
  };

  return (
    <>
      <form action="" onSubmit={handleGuess} className="flex flex-col m-4">
        <label htmlFor="guess" className="mb-3">
          Enter an HTML tag
        </label>
        <input
          id="guess"
          type="text"
          ref={currentGuess}
          placeholder="HTML Tag"
          className="p-2 border-2 rounded-md"
        />
      </form>
    </>
  );
};

export default GuessInput;
