import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  return (
    <>
      <Navbar
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      />
      <Sidebar
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      />
      <main className="bg-white min-h-screen p-5 text-[#1f2937] lg:p-[100px] pt-[70px] flex justify-center">
        <div className="max-w-[1280px] w-full">{children}</div>
      </main>
      <Footer />
    </>
  );
};
const Sidebar = ({ isSidebarShow, setIsSidebarShow }) => {
  return (
    <div className="lg:hidden">
      <div
        className="fixed bg-black left-0 top-0 w-screen h-screen z-[999] transition-all duration-500"
        style={{
          zIndex: isSidebarShow ? "1000" : "-1",
          opacity: isSidebarShow ? "0.3" : "0",
        }}
      >
        asd
      </div>
      <div
        className="fixed transition-all  h-screen w-screen z-[1000] left-0 top-0 flex"
        style={{
          transform: isSidebarShow ? "translateX(0px)" : "translateX(-400px)",
          opacity: isSidebarShow ? "1" : "0",
        }}
      >
        <div
          className="bg-white shadow-md w-9/12 h-full flex flex-col gap-5 p-5 transition-all duration-300"
          style={{
            transform: isSidebarShow ? "translateX(0px)" : "translateX(-400px)",
          }}
        >
          <button onClick={() => setIsSidebarShow(false)}>Tutup</button>
          <div className="flex gap-5 flex-col">
            <p className="text-[16px]">Documentation</p>
            <p className="text-[16px]">Guide</p>
            <p className="text-[16px]">Config</p>
            <p className="text-[16px]">Version 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
