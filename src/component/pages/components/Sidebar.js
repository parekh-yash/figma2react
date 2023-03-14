import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogOutCircle, BiEditAlt, BiSupport, BiBox } from "react-icons/bi";
function Sidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="sidebar">
        <div className="options-container-sidebar">
          <div className="dashboard">
            <div className="icon">
              <div className="l1">
                <div className="box" />
                <div className="box" />
              </div>
              <div className="l2">
                <div className="box" />
                <div className="box" />
              </div>
            </div>
            Dashboard
          </div>
          <div className="product">
            <div className="icon">
              <BiBox size={"22.9px"} />
            </div>
            Product
          </div>
          <div className="support">
            <div className="icon">
              <BiSupport size={"22.9px"} />
            </div>
            Support
          </div>
        </div>
        <div className="sidebar-options">
          <div className="editing">
            <div className="icon">
              <BiEditAlt size={"22.9px"} />
            </div>
            Editing
          </div>
          <div className="logout">
            <div className="icon"></div>
            <button className="db-logout" onClick={() => navigate("/")}>
              <BiLogOutCircle size={"22.9px"} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
