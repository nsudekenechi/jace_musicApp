import {
  BiSkipPrevious,
  BiSkipNext,
  BiShuffle,
  BiRepeat,
  BiPlay,
} from "react-icons/bi";

const HomeMusicplayer = () => {
  return (
    <div className="bg-[#F41C7C] p-5 rounded-3xl">
      <h1 className="text-white text-center">Now Playing</h1>
      <div className="h-[150px] my-3 px-3">
        <img
          src="./Img/12.jpg"
          className="w-[100%] h-[100%] object-cover rounded-3xl"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="text-center ">
          <h1 className="text-sm font-bold capitalize text-white">
            The adventure
          </h1>
          <p className="text-white/60 text-xs">Angels & Airwaves</p>
        </div>
        <div className="flex text-xs gap-x-2 items-center text-white">
          <span>2:40</span>
          <div className="w-[100%] h-1 rounded-full  bg-white/40 ">
            <div className="rounded-full w-[60%] h-[100%] bg-white relative">
              <div className="w-3 h-3 bg-white rounded-full absolute -top-[100%] -right-1 flex  items-center justify-center">
                <div className="w-[35%] h-[35%] bg-[#F41C7C] rounded-full"></div>
              </div>
            </div>
          </div>
          <span>3:45</span>
        </div>

        <div className="flex justify-between text-lg text-white items-center">
          <BiShuffle />
          <BiSkipPrevious size={20} />
          <div className="h-[40px] w-[20%] flex justify-center items-center bg-[rgba(0,0,0,.1)] rounded-md">
            <BiPlay size={20} />
          </div>
          <BiSkipNext size={20} />
          <BiRepeat />
        </div>
      </div>
    </div>
  );
};

export default HomeMusicplayer;
