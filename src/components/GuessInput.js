function handleGuess(event) {
  event.preventDefault();
}

const GuessInput = () => {
  return (
    <form action="" onSubmit={handleGuess} className="m-4">
      <input
        type="text"
        placeholder="HTML Tag"
        className="p-2 border-2 rounded-md"
      />
    </form>
  );
};

export default GuessInput;
