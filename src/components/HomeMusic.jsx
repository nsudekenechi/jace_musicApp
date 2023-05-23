/* eslint-disable react/prop-types */
import { HomeMusicBox } from "./HomeMusicBox";

// eslint-disable-next-line react/prop-types
export const HomeMusic = ({ name, data }) => {
  return (
    <div className="border-[0.1px] border-black/5 h-[100%] rounded-2xl p-5">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-sm">{name}</h1>
        <a href="" className="text-xs text-black/40">
          See all
        </a>
      </div>
      <div className="py-5 grid grid-cols-4 gap-x-5">
        {data.map((item, index) => (
          <HomeMusicBox
            key={index}
            title={item.title}
            artist={item.artist}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};
