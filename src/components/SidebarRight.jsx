import React from "react";
import SideRightContainer from "./SideRightContainer";

const SidebarRight = ({ menuData }) => {
  console.log(menuData);
  return (
    <div style={{ width: "20%" }}>
      <div
        className="fixed"
        style={{
          width: "272px",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div style={{ height: "60px" }}></div>
        {/* Sidebar Menu */}
        <div className="mt-3">
          <div className="mb-3">
            {menuData &&
              menuData.cdn.map((item, index) => (
                <p
                  key={index}
                  className="m-0"
                  style={{
                    borderLeft: "2px solid #29292d",
                    paddingLeft: "10px",
                  }}
                >
                  {item}
                </p>
              ))}
            {/* 
            <p
              className="m-0"
              style={{ borderLeft: "2px solid #646cff", paddingLeft: "10px" }}
            >
              Css
            </p> */}
          </div>
          <div className="bg-neutral p-5 rounded-lg mb-3">Card</div>
        </div>
        {/* End Sidebar Menu */}
      </div>
    </div>
  );
};

export default SidebarRight;
