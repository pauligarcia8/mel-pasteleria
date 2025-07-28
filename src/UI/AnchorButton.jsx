const AnchorButton = ({title}) => {
  return (
    <a>
      <button className="p-4 cursor-pointer hover:text-pink-700">
       {title}
      </button>
    </a>
  );
};

export default AnchorButton;
