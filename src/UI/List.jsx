const List = ({ title, item1, item2, item3, item4}) => {
  return (
    <div className="text-left">
      <h1 className="text-xl text-white my-2">{title}</h1>
      <ul>
        <li className="text-gray-400 leading-8">{item1}</li>
        <li className="text-gray-400 leading-8">{item2}</li>
        <li className="text-gray-400 leading-8">{item3}</li>
        <li className="text-gray-400 leading-8">{item4}</li>
      </ul>
    </div>
  );
};

export default List;