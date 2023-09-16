import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../lunaui/domhelper";

const Sidebar = () => {
  const url = window.location.pathname;
  const [stateUrl, setStateUrl] = useState(url);

  return (
    <div id="element-testing" className="text-gray-500 lg:w-[20%]">
      <div
        id="sidebar-menu"
        className="fixed hidden lg:block"
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
                height: "60px",
                gap: "10px",
              }}
            ></div>
          </div>
        </Link>
        {/* Sidebar Menu */}
        <div className="mt-3 px-5">
          <div className="flex items-center gap-2 mb-3">
            <svg
              stroke="currentColor"
              className="w-6 h-6 stroke-current stroke-2 text-primary fill-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>

            <span className="font-bold ">Guide</span>
          </div>
          <Link to={"/docs/install"} className="">
            <div
              className={`w-56 rounded-md p-2 neu  ${
                stateUrl == "/docs/install" || stateUrl == "/docs/cdn"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Getting Started </span>
            </div>
          </Link>
          <Link to={"/docs/color"} className="">
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/docs/color"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span className=""> Colors </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6  text-primary "
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>

            <span className="font-bold">Layout</span>
          </div>

          <Link to={"/components/hero"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/hero"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Hero </span>
            </div>
          </Link>

          <Link to={"/components/footer"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/footer"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Footer </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <svg className="w-6 h-6 stroke-current stroke-2 text-primary fill-none">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>

            <span className="font-bold">Components</span>
          </div>

          <Link to={"/components/navbar"} className="">
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/navbar"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Navbar </span>
            </div>
          </Link>

          <Link to={"/components/alert"} className="">
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/alert"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Alert </span>
            </div>
          </Link>
          <Link to={"/components/badge"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/badge"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Badge </span>
            </div>
          </Link>
          <Link to={"/components/button"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/button"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Button </span>
            </div>
          </Link>

          <Link to={"/components/card"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/card"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Card </span>
            </div>
          </Link>

          <Link to={"/components/progress"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/progress"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Progress </span>
            </div>
          </Link>

          <Link to={"/components/dropdown"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/dropdown"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Dropdown </span>
            </div>
          </Link>

          <Link to={"/components/table"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/table"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Table </span>
            </div>
          </Link>

          <Link to={"/components/table"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/modal"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Modal </span>
              <span className="badge badge-primary">Cooming Soon</span>
            </div>
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6  text-primary "
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>

            <span className="font-semibold">Data Input</span>
          </div>

          <Link to={"/components/text-input"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/text-input"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Text Input </span>
            </div>
          </Link>

          <Link to={"/components/select"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/select"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Select </span>
            </div>
          </Link>

          <Link to={"/components/toggle"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/toggle"
                  ? "neu-active text-primary font-bold mb-5"
                  : "neu font-semibold mb-5"
              }`}
            >
              <span> Toggle </span>
            </div>
          </Link>
        </div>
        {/* End Sidebar Menu */}
      </div>
    </div>
  );
};

const SidebarMenu = ({ isSidebarShow, setIsSidebarShow }) => {
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

export default Sidebar;
