import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import SidebarRight from "./components/SidebarRight";

const LayoutContent = ({ children }) => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right ,#161618 50% ,#1e1e20 50%)",

          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          color: "#939399",
        }}
      >
        <div className="w-100 d-flex" style={{ maxWidth: "1366px" }}>
          <Sidebar />
          <div style={{ width: "60%", backgroundColor: "#1e1e20" }}>
            <div style={{ minHeight: "100vh" }}>
              <Header />
              <main style={{ paddingTop: "60px", color: "#dfdfd7" }}>
                <div style={{ padding: "20px 80px" }}>{children}</div>
              </main>
            </div>
          </div>

          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default LayoutContent;
