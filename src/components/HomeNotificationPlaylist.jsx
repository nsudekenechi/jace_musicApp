/* eslint-disable react/prop-types */
import { BsFillFolderFill } from "react-icons/bs";
export const HomeNotificationPlaylist = (props) => {
  return (
    <div className="flex items-center gap-x-10">
      <div className="h-10 w-10 bg-blue-300/10 rounded-lg flex justify-center items-center">
        <BsFillFolderFill className="text-blue-500" />
      </div>
      <div className="text-sm">
        <h1 className="font-bold">Playlist Added</h1>
        <p className="text-xs italic text-black/40">{props.song} Songs</p>
      </div>
      <p className="text-xs font-bold">{props.min} Mins</p>
    </div>
  );
};
