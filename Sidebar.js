import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <SidebarOptions title="Home" Icon={HomeIcon} />
      <SidebarOptions title="Search" Icon={SearchIcon} />
      <SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
      <SidebarOptions title="Your Library" />
      <SidebarOptions title="Your Library" />
      <SidebarOptions title="Your Library" />
    </div>
  );
}

export default Sidebar;
