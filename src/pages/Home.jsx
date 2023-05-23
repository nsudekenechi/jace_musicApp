import { HiDotsHorizontal } from "react-icons/hi";
import { HomeMusic } from "../components/HomeMusic";
import {
  GlobalMusic,
  SongsYouMightLike,
  RecentlyPlayed,
} from "../components/Data";
import { HomeRecentlyPlayed } from "../components/HomeRecentlyPlayed";
import { HomeNotificationPlaylist } from "../components/HomeNotificationPlaylist";
import HomeNav from "../components/HomeNav";
import HomeTopArtists from "../components/HomeTopArtists";
import { useState } from "react";
import HomeMusicplayer from "../components/HomeMusicplayer";
export const Home = () => {
  const [topArtist, setTopArtist] = useState(0);
  const handleTopArtist = () => {
    setTopArtist(0);
  };
  return (
    <div className="grid grid-cols-3 gap-x-5">
      {/* Main Sidebar */}
      <section className="md:py-5 col-span-2 flex flex-col gap-y-8">
        <nav className="flex justify-between items-center text-sm font-bold">
          <ul className="flex gap-x-5">
            <li>
              <a href="">Music</a>
            </li>
            <li className="text-black/20">
              <a href="">Podcast</a>
            </li>
            <li className="text-black/20">
              <a href="">Live</a>
            </li>
            <li className="text-black/20">
              <a href="">Radio</a>
            </li>
          </ul>
          <HiDotsHorizontal className="text-black/40" />
        </nav>

        <div
          className="flex flex-col pr-5 gap-y-5 h-[85vh] overflow-auto"
          id="home"
        >
          <HomeMusic name={"Global Top 10"} data={GlobalMusic} />
          <HomeMusic name={"Songs You Might Like"} data={SongsYouMightLike} />

          <div className="border-[0.1px] border-black/5 h-[100%] rounded-2xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h1 className="font-bold text-sm">Recently Played</h1>
              <a href="" className="text-xs text-black/40">
                See all
              </a>
            </div>
            <div className="flex flex-col gap-y-8">
              {RecentlyPlayed.map((item, index) => (
                <HomeRecentlyPlayed key={index} data={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Notifications Sidebar*/}
      <aside className="md:py-5 col-span-1 flex flex-col gap-y-8 border-l px-8 h-[100vh] overflow-auto">
        <div>
          <HomeNav data={"Notifications"} />

          <div className="flex flex-col gap-y-5">
            <HomeNotificationPlaylist song={3} min={2} />
            <HomeNotificationPlaylist song={12} min={3} />
          </div>
        </div>

        <div>
          <HomeNav data={"Top Artists"} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5">
            <HomeTopArtists
              img="15.jpg"
              handler={{ topArtist, handleTopArtist }}
              artist="Phylz"
            />
            <HomeTopArtists
              img="16.jpg"
              handler={{ topArtist, handleTopArtist }}
              artist="Lylia"
            />
            <HomeTopArtists
              img="17.jpg"
              handler={{ topArtist, handleTopArtist }}
              artist="Johna"
            />
            <HomeTopArtists
              img="18.jpg"
              handler={{ topArtist, handleTopArtist }}
              artist="Lade"
            />
            <HomeTopArtists
              img="19.jpg"
              handler={{ topArtist, handleTopArtist }}
              artist="Fatumi"
            />
            <HomeTopArtists
              img="20.jpg"
              handler={{ topArtist, handleTopArtist }}
              artist="Zara"
            />
          </div>
        </div>
        <HomeMusicplayer />
      </aside>
    </div>
  );
};
