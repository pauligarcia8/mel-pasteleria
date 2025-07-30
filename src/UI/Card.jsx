import {
  ArrowRightIcon,
  CakeIcon,
  GiftIcon,
  HeartIcon,
} from "@heroicons/react/16/solid";

const Card = ({ icon, title, body }) => {
  let selectedIcon;

  if (icon === "cake") {
    selectedIcon = <CakeIcon className="h-12 w-12 text-[#b7e4c7]" />;
  } else if (icon === "heart") {
    selectedIcon = <HeartIcon className="h-12 w-12 text-[#f4acb7]" />;
  } else if (icon === "gift") {
    selectedIcon = <GiftIcon className="h-12 w-12 text-[#e6ccb2]" />;
  }

  return (
    <div className="p-6 w-96 h-80 shadow-gray-400 rounded-2xl shadow-xl max-w-sm">
      {selectedIcon}
      <h1 className="text-2xl font-semibold py-2">{title}</h1>
      <p className="text-lg text-gray-700 font-semibold py-4">{body}</p>
      <button className="flex items-center gap-2 text-black hover:text-[#f4acb7] cursor-pointer py-4">
        <span className="text-lg font-semibold leading-none">Ver Más</span>
        <ArrowRightIcon className="h-5 w-5 mt-[1px]" />
      </button>
    </div>
  );
};

export default Card;
