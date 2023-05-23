/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BsFillPlayFill } from "react-icons/bs";
export const HomeMusicBox = ({ img, title, artist }) => {
  return (
    <div className="border-[0.1px] border-black/5 col-span-1 p-3 rounded-2xl ">
      <div className="h-[120px] relative">
        <img
          src={`./Img/${img}`}
          className="w-[100%] h-[100%] rounded-2xl object-cover object-center"
          alt=""
        />
        <div className="absolute w-7 h-7 bg-white bottom-5 right-5 rounded-lg text-lg flex justify-center items-center text-orange-500 shadow-lg">
          <BsFillPlayFill />
        </div>
      </div>
      {/* Title/Artist */}
      <div className="capitalize py-3 flex flex-col gap-y-2">
        <h1 className=" font-bold text-sm">{title}</h1>
        <p className="text-xs text-black/40">{artist}</p>
      </div>
    </div>
  );
};
