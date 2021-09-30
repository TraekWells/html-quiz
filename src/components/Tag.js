const Tag = ({ isCorrect, tag }) => {
  return (
    <div className="flex items-center justify-center border-2 rounded-md bg-white px-3 text-base h-10 transition-all ease-in-out">
      <div className={isCorrect ? `opacity-100` : `opacity-0`}>
        &lt;{tag}&gt;
      </div>
    </div>
  );
};

export default Tag;
