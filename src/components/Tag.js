const Tag = ({ isCorrect, tag, revealAnswers }) => {
  return (
    <div className="flex items-center m-1 justify-center border-2 rounded-md bg-white px-3 text-base h-10 transition-all ease-in-out">
      <div className={isCorrect || revealAnswers ? `opacity-100` : `opacity-0`}>
        {tag}
      </div>
    </div>
  );
};

export default Tag;
