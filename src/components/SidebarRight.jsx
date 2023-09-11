import React from "react";
import SideRightContainer from "./SideRightContainer";

const SidebarRight = ({ menuData }) => {
  return (
    <div className="hidden lg:block" style={{ width: "20%" }}>
      <div
        className="fixed "
        style={{
          width: "272px",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div style={{ height: "60px" }}></div>
        {/* Sidebar Menu */}
        <div className="mt-3">
          <div className="bg-neutral p-5 rounded-lg mb-3 text-white">
            <p className="mb-5">
              Use luna grid library to auto layouting or responsive design
            </p>
            <div className="badge">Cooming Soon</div>
          </div>
        </div>
        {/* End Sidebar Menu */}
      </div>
    </div>
  );
};

export default SidebarRight;
