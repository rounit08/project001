import React from "react";
import "./Header.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import { fontSize } from "@mui/system";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <div className="avatar">
          <Avatar sx={{ bgcolor: " green" }}>SS</Avatar>
        </div>
        <div className="dum">
          <div className="username">
            <h4>Dummy User</h4>
          </div>
          <div className="posted">
            <p>Posted in General</p>
          </div>
        </div>

        <div className="lastactive">
          <p>5 days ago</p>
        </div>
        <div className="bluereact">
          <p>REACT</p>
        </div>
      </div>
      <div className="header_right">
        <MoreHorizIcon />
      </div>
    </div>
  );
}

export default Header;
