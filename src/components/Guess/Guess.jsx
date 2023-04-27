import React from "react";

const Guess = ({ handleGuess }) => {
  const [guess, setGuess] = React.useState("");

  const handleSubmitGuess = (event) => {
    event.preventDefault();
    handleGuess(guess);
    setGuess("");
  };
  return (
    <form>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleSubmitGuess}>Guess</button>
    </form>
  );
};

export default Guess;
