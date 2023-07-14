import React from "react";

const SidebarRight = () => {
  return (
    <div style={{ width: "20%" }}>
      <div
        className="position-fixed"
        style={{
          width: "272px",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div style={{ height: "60px" }}></div>
        {/* Sidebar Menu */}
        <div className="mt-3">
          <div className="bg-sc p-md rounded-lg mb-3">Card</div>
          <div className="bg-sc p-md rounded-lg mb-3">Card</div>
          <div className="bg-sc p-md rounded-lg mb-3">Card</div>
          <div className="bg-sc p-md rounded-lg mb-3">Card</div>
          <div className="bg-sc p-md rounded-lg mb-3">Card</div>
          <div className="bg-sc p-md rounded-lg mb-3">Card</div>
          <div className="bg-sc p-md rounded-lg mb-3">Card</div>
          <div className="bg-sc p-md rounded-lg mb-3">Card</div>
        </div>
        {/* End Sidebar Menu */}
      </div>
    </div>
  );
};

export default SidebarRight;
