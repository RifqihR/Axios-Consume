import React from "react";
import "../assets/pag1.css";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MenuIcon from '@mui/icons-material/Menu';

import Content from "../component/content";
import SideContent from "../component/SideContent";

export default function Page1() {
  return (
    <div className="Main">
      <div className="Navbar">
        <div className="element1">
        <CameraAltIcon className="camera"></CameraAltIcon>
        <p className="navmenu">My.App</p>
        <p className="navmenu">About</p>
        <p className="navmenu">Memory</p>
        </div>
        <div className="navic">
          <MenuIcon />
        </div>
        
      </div>
      <div className="Boddy">
        <div className="container1">
          <Content/>
          <Content/>
          <Content/>
          <Content/>
        </div>
        
        <div className="container2">
          <SideContent/>
          <SideContent/>
          <SideContent/>
        </div>
      </div>
    </div>
  );
}
