import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen text-[#1f2937] p-[100px] pt-[70px] flex justify-center">
        <div className="max-w-[1280px] w-full">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
