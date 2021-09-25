import { createRef, useState } from "react";

const GuessInput = () => {
  const [guess, updateGuess] = useState("");
  const currentGuess = createRef("");

  const handleGuess = (event) => {
    event.preventDefault();
    console.log(currentGuess.current.value);
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
