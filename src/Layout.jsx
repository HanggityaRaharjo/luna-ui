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
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
