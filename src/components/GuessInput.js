import { createRef } from "react";

const GuessInput = ({ setGuess, guess }) => {
  const currentGuess = createRef();

  const handleGuess = (event) => {
    // 1. Prevent the default behavior of the form
    event.preventDefault();
    // 2. Pass the user input to the parent Quiz component
    setGuess(currentGuess.current.value);
    // 3. Clear the form
    currentGuess.current.value = "";
  };

  return (
    <>
      <form action="" onSubmit={handleGuess} className="flex flex-col">
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
        <p className="text-sm mt-4 mb-0">Last Guess: {guess}</p>
      </form>
    </>
  );
};

export default GuessInput;
