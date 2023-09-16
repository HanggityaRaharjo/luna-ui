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
        <div className="mt-3 px-2">
          <div className="neu-active rounded-md p-5 mb-3 text-[#293948]">
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
