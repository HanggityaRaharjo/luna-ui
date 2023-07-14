import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main
        style={{
          background: "#1e1e20",
          minHeight: "100vh",
          color: "#dfdfd6",
          paddingTop: "70px",
          paddingLeft: "100px",
          paddingRight: "100px",
          paddingBottom: "100px",

          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "1130px" }} className="w-100">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
