/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  BiSkipPrevious,
  BiSkipNext,
  BiShuffle,
  BiRepeat,
  BiPlay,
  BiPause,
} from "react-icons/bi";

const HomeMusicplayer = () => {
  const [play, setPlay] = useState({
    icon: true,
    audio: new Audio("./audio/1.mp3"),
    startDuration: "0:00",
    endDuration: "0:00",
  });
  const [seek, setSeek] = useState(1);

  const handlePlay = () => {
    setPlay({ ...play, icon: !play.icon });
  };
  const handleSeek = (ev) => {
    setSeek(ev.clientX - ev.target.offsetLeft);
    console.log(ev);
  };
  const timeToSecond = (duration) => {
    let min = Math.floor(duration / 60);
    let sec = Math.round(duration % 60);

    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  };
  useEffect(() => {
    // Playing or pausing audio file
    play.icon ? play.audio.pause() : play.audio.play();
    let timer;
    const seekCon = document.querySelector("#seekCon");
    if (!play.icon) {
      timer = setInterval(() => {
        setPlay({
          ...play,
          startDuration: timeToSecond(play.audio.currentTime),
          endDuration: timeToSecond(play.audio.duration),
        });
        setSeek(
          (seekCon.getBoundingClientRect().width / play.audio.duration) *
            play.audio.currentTime -
            3
        );
        play.audio.onended = () => {
          play.audio.currentTime = 0;
          setPlay({ ...play, icon: !play.icon });
        };
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [play.icon]);

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
          <span>{play.startDuration}</span>
          <div
            className="w-[100%] h-1 rounded-full  bg-white/40 cursor-pointer"
            onClick={(ev) => handleSeek(ev)}
            id="seekCon"
          >
            <div
              className={`rounded-full  h-[100%] bg-white relative`}
              style={{ width: `${seek}px` }}
            >
              <div className="w-3 h-3 bg-white rounded-full absolute -top-[100%] -right-1 flex  items-center justify-center">
                <div className="w-[35%] h-[35%] bg-[#F41C7C] rounded-full"></div>
              </div>
            </div>
          </div>
          <span>{play.endDuration}</span>
        </div>

        <div className="flex justify-between text-lg text-white items-center">
          <BiShuffle />
          <BiSkipPrevious size={20} />
          <div
            className="h-[40px] w-[20%] flex justify-center items-center bg-[rgba(0,0,0,.1)] rounded-md cursor-pointer"
            onClick={handlePlay}
          >
            {play.icon ? <BiPlay size={20} /> : <BiPause size={20} />}
          </div>
          <BiSkipNext size={20} />
          <BiRepeat />
        </div>
      </div>
    </div>
  );
};

export default HomeMusicplayer;
