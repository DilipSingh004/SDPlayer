import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { BiPulse } from "react-icons/bi";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa";

const MenuList = [
    {
      id: 1,
      icon: <BsFillHouseFill />,
      name: "Home",
      path:'/',
    },
    {
      id: 2,
      icon: <BiPulse />,
      name: "Discover",
      path:'/discover',
    },
    {
      id: 3,
      icon: <FaBroadcastTower />,
      name: "Radio",
      path:'/radio',
    },
    {
      id: 4,
      icon: <FaMicrophoneAlt />,
      name: "Artist",
      path:'/artist',
    },
    {
      id: 5,
      icon: <BsJournalAlbum />,
      name: "Albums",
      path:'/albums',
    },
    {
      id: 6,
      icon: <FaPodcast />,
      name: "Podcasts",
      path:'/podcasts',
    },
  ];
  
  export { MenuList };