const Tag = (props) => {
  return (
    <div className="flex items-center justify-center border-2 rounded-md bg-gray-50 px-3 text-base h-10">
      &lt;{props.tag}&gt;
    </div>
  );
};

export default Tag;
