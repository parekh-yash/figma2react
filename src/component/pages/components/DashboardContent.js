import React from "react";
import { BiSearchAlt, BiAbacus, BiCamera, BiLink } from "react-icons/bi";
import { useState } from "react";
import FilterCard from "./FilterCard";
import UploadImage from "./UploadImage";

function DashboardContent() {
  const [isOpenCam, setIsOpenCam] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  //toggle open filter
  const toggleOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
    setIsOpenCam(false);
  };
  //toggle open ca

  const toggleOpenCam = () => {
    setIsOpenCam(!isOpenCam);
    setIsOpenFilter(false);
  };
  return (
    <div className="maincontent">
      <div className="selector">
        <div className="main-options">
          <span>Ouly</span>
          <span>Plagify</span>
          <span>My Product</span>
        </div>
      </div>
      <div className="greeting">
        <h1>Welcome to Ouly 👋</h1>
      </div>
      <div className="bar">
        <div className="search-bar">
          <div className="icon-search">
            <BiSearchAlt color={"#929EAE"} size={"35"} />
          </div>
          <input type={Text} className="db-textbox" placeholder="Search" />
          <div className="link">
            <button className="icon-link">
              <BiLink color={"#929EAE"} size={"35"} />
            </button>
          </div>
          <div className="cam">
            <button onClick={toggleOpenCam} className="cam-button">
              <BiCamera className="icon-cam" color={"#929EAE"} size={"35"} />
            </button>
          </div>
        </div>
        <div className="filter">
          <button onClick={toggleOpenFilter} className="filter-button">
            <BiAbacus size={"38px"} />
          </button>
        </div>
      </div>
      <div className={`filter-container ${isOpenFilter ? "open" : ""}`}>
        <FilterCard toggleOpenFilter={toggleOpenFilter} />
      </div>
      <div>
        <div className={`upload-image ${isOpenCam ? "open" : ""}`}>
          <UploadImage toggleOpenCam={toggleOpenCam} />
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
