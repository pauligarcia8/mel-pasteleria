const AnchorButton = ({title}) => {
  return (
    <a>
      <button className="p-4 cursor-pointer hover:text-[#f4acb7]">
       {title}
      </button>
    </a>
  );
};

export default AnchorButton;
