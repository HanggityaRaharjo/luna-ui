import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
        <Link id="link-loh" to={"/"} style={{ textDecoration: "none" }}>
          <div
            className="d-flex align-items-center"
            style={{
              height: "60px",
              paddingRight: "50px",
            }}
          >
            <div
              className="w-100 d-flex align-items-center"
              style={{
                borderBottom: "1px solid #29292d",
                height: "60px",
                gap: "10px",
              }}
            >
              <img src="logo.png" width={"50px"} alt="" />
              <p className="m-0" style={{ fontSize: "16px", color: "#deded5" }}>
                CBXUI
              </p>
            </div>
          </div>
        </Link>
        {/* Sidebar Menu */}
        <div className="mt-3">
          <p className="m-0 mb-3" style={{ color: "#deded5" }}>
            Guide
          </p>
          <p className="m-0 mb-3 text-pm">Getting Started</p>
          <p className="m-0 mb-3">Css Generator</p>
          <p className="m-0 mb-3">Theme</p>
          <p className="m-0 mb-3">Features</p>
          <p className="m-0 mb-3">Features</p>
          <p className="m-0 mb-3">Features</p>
          <p className="m-0 mb-3">Features</p>
          {/* Divider */}
          <div
            className="mb-3"
            style={{ borderBottom: "1px solid #29292d", marginRight: "50px" }}
          ></div>
          {/* End Divider */}
          <p className="mb-3" style={{ color: "#deded5" }}>
            UI Layout
          </p>
          <p className="mb-3">Breakpoints</p>
          <p className="mb-3">Containers</p>
          <p className="mb-3">Grid</p>
          <p className="mb-3">Flex</p>
          <p className="mb-3">Columns</p>
          {/* Divider */}
          <div
            className="mb-3"
            style={{ borderBottom: "1px solid #29292d", marginRight: "50px" }}
          ></div>
          {/* End Divider */}
          <p className="mb-3" style={{ color: "#deded5" }}>
            Components
          </p>
          <p className="mb-3">Accordion</p>
          <p className="mb-3">Alerts</p>
          <p className="mb-3">Badge</p>
          <p className="mb-3">Breadcrumb</p>
          <p className="mb-3">Buttons</p>
          <p className="mb-3">Button Group</p>
          <p className="mb-3">Card</p>
          <p className="mb-3">Carousel</p>
          <p className="mb-3">Close Button</p>
          <p className="mb-3">Collapse</p>
          <p className="mb-3">Dropdowns</p>
          <p className="mb-3">List Group</p>
          <p className="mb-3">Modal</p>
          <p className="mb-3">Navbar</p>
          <p className="mb-3">Nav & Tabs</p>
          <p className="mb-3">Offcanvas</p>
          <p className="mb-3">Pagination</p>
          <p className="mb-3">Placeholders</p>
          <p className="mb-3">Popovers</p>
          <p className="mb-3">Progress</p>
          <p className="mb-3">Scrollspy</p>
          <p className="mb-3">Spinners</p>
          <p className="mb-3">Pagination</p>
          <p className="mb-3">Toast</p>
          <p className="mb-3">Tooltips</p>
          <p className="mb-3">Pagination</p>
          <p className="mb-3">Pagination</p>
        </div>
        {/* End Sidebar Menu */}
      </div>
    </div>
  );
};

export default Sidebar;
