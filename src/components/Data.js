
import { MdHomeFilled, MdFeaturedPlayList, MdSettings, MdLogout } from "react-icons/md";
import { RiSearch2Line, RiCompass3Fill, RiTimeFill, RiHeart2Fill, RiFolder5Fill } from "react-icons/ri";
import { HiUser } from "react-icons/hi2"
import { BiAddToQueue } from "react-icons/bi"
export const Links = {
    menu: [

        {
            title: "Home",
            icon: MdHomeFilled
        },
        {
            title: "Search",
            icon: RiSearch2Line
        },
        {
            title: "Discover",
            icon: RiCompass3Fill
        },
        {
            title: "Artists",
            icon: HiUser
        },
    ],

    library: [

        {
            title: "Recent",
            icon: RiTimeFill
        },
        {
            title: "Favorites",
            icon: RiHeart2Fill
        },
        {
            title: "Local",
            icon: RiFolder5Fill
        }
    ],

    playlist: [

        {
            title: "Create new",
            icon: BiAddToQueue
        },
        {
            title: "Pop punk",
            icon: MdFeaturedPlayList
        },
        {
            title: "Rock",
            icon: MdFeaturedPlayList
        }
    ],

    settings: [

        {
            title: "Settings",
            icon: MdSettings
        },
        {
            title: "Log Out",
            icon: MdLogout
        },

    ],
};

export const GlobalMusic = [
    {
        title: "Shabu",
        img: "1.jpg",
        artist: "Dnie"
    },
    {
        title: "The Adventure",
        artist: "Angels",
        img: "2.jpg",
    },

    {
        title: "Locked",
        img: "3.jpg",
        artist: "sopfila"
    },
    {
        title: "The Adventure",
        artist: "Klave ft Jon",
        img: "4.jpg",
    },
]

export const SongsYouMightLike = [
    {
        title: "Lost Hope",
        img: "5.jpg",
        artist: "Paramore"
    },
    {
        title: "The Adventure",
        artist: "Angels",
        img: "6.jpg",
    },

    {
        title: "Locked",
        img: "7.jpg",
        artist: "sopfila"
    },
    {
        title: "The Adventure",
        artist: "Klave ft Jon",
        img: "8.jpg",
    },
]

export const RecentlyPlayed = [
    {
        title: "Darling",
        artist: "Jya",
        time: "3:45",
        img: "9.jpg"
    },
    {
        title: "Jara",
        artist: "Kliya",
        time: "2:00",
        img: "10.jpg"
    },
    {
        title: "Chunk",
        artist: "Xcris",
        time: "1:15",
        img: "11.jpg"
    }
]