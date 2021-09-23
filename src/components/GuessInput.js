function handleGuess(event) {
  event.preventDefault();
}

const GuessInput = () => {
  return (
    <form action="" onSubmit={handleGuess}>
      <input type="text" placeholder="HTML Tag" />
    </form>
  );
};

export default GuessInput;
