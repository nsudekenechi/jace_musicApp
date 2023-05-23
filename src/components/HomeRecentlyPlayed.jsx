/* eslint-disable react/prop-types */

import { BsFillPlayFill, BsDownload } from "react-icons/bs";
export const HomeRecentlyPlayed = ({ index, data }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-5">
        <h1 className="font-bold text-black/40">
          {index < 10 ? `0${index + 1}` : index}
        </h1>
        <div className="h-10 w-10 flex justify-center items-center">
          <img
            src={`./Img/${data.img}`}
            className="w-[100%] h-[100%] rounded-lg"
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold capitalize">{data.title}</h1>
          <p className="text-xs text-black/40 ">{data.artist}</p>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <p className="font-bold text-black/40 text-sm">{data.time}</p>
        <div className="cursor-pointer h-8 w-8 border rounded-lg flex justify-center items-center text-orange-500">
          <BsFillPlayFill />
        </div>
        <div className="cursor-pointer h-8 w-8 border rounded-lg flex justify-center items-center text-sm text-black/40 hover:border-none hover:bg-orange-500 hover:text-white duration-1000">
          <BsDownload />
        </div>
      </div>
    </div>
  );
};
