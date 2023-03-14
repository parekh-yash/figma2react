import React from "react";
import { BiCrown, BiUser, BiBell } from "react-icons/bi";
function Navbar({ userName }) {
  return (
    <div className="navbar">
      <div className="db-title">
        <h1>Ouly.AI</h1>
      </div>
      <div className="db-options">
        <div className="notification">
          <BiBell size={"22.9"} />
        </div>
        <div className="premium">
          <div className="icon-premium">
            <BiCrown color={"gold"} size={"22.9px"} />
            Upgrade Plan
          </div>
        </div>
        <div className="user">
          <div className="icon-user">
            <BiUser size={"22.9px"} />
          </div>
          <div className="username">{userName}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
