import { GrServicePlay } from "react-icons/gr";
import { Links } from "./Data";
export const Nav = () => {
  return (
    <nav className=" border-r-[0.1px] border-r-black/5 md:py-5 h-[100%]">
      <ul className="flex flex-col gap-y-8">
        <li>
          <a
            href=""
            className="flex items-center gap-x-2 outline-none font-bold"
          >
            <GrServicePlay className="text-xl" /> Rungon
          </a>
        </li>
        <ul>
          <p className="text-sm text-black/40 mb-4">Menu</p>
          <div className="flex flex-col gap-y-3 text-black/30">
            {Links.menu.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href=""
                    className={` flex items-center gap-x-3 text-xs ${
                      index == 0 &&
                      "text-orange-500  border-r-4 border-orange-500 w-[101%]"
                    }`}
                  >
                    <item.icon className="text-sm" /> {item.title}
                  </a>
                </li>
              );
            })}
          </div>
        </ul>

        <ul>
          <p className="text-sm text-black/40 mb-4">Library</p>
          <div className="flex flex-col gap-y-3 text-black/30">
            {Links.library.map((item, index) => {
              return (
                <li key={index}>
                  <a href="" className={` flex items-center gap-x-3 text-xs`}>
                    <item.icon className="text-sm" /> {item.title}
                  </a>
                </li>
              );
            })}
          </div>
        </ul>

        <ul>
          <p className="text-sm text-black/40 mb-4">Playlist</p>
          <div className="flex flex-col gap-y-3 text-black/30">
            {Links.playlist.map((item, index) => {
              return (
                <li key={index}>
                  <a href="" className={` flex items-center gap-x-3 text-xs`}>
                    <item.icon className="text-sm" /> {item.title}
                  </a>
                </li>
              );
            })}
          </div>
        </ul>

        <ul>
          <p className="text-sm text-black/40 mb-4">Settings</p>
          <div className="flex flex-col gap-y-3 text-black/30">
            {Links.settings.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href=""
                    className={` flex items-center gap-x-3 text-xs capitalize`}
                  >
                    <item.icon className="text-sm" /> {item.title}
                  </a>
                </li>
              );
            })}
          </div>
        </ul>
      </ul>
    </nav>
  );
};
