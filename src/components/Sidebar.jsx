import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../lunaui/domhelper";

const Sidebar = () => {
  const url = window.location.pathname;
  const [stateUrl, setStateUrl] = useState(url);

  return (
    <div id="element-testing" className="text-[#1f2937] lg:w-[20%]">
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
        <div className="mt-3">
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

            <span className="font-bold opacity-50">Guide</span>
          </div>
          <Link to={"/docs/install"} className="">
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/docs/install" || stateUrl == "/docs/cdn"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Getting Started </span>
            </div>
          </Link>
          <Link to={"/docs/color"} className="">
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/docs/color"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span className=""> Colors </span>
            </div>
          </Link>

          {/* Divider */}
          <div
            className="mb-3 border-b border-gray-200"
            style={{ marginRight: "50px" }}
          ></div>
          {/* End Divider */}

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

            <span className="font-bold opacity-50">Layout</span>
          </div>

          <Link to={"/components/hero"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/hero"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Hero </span>
            </div>
          </Link>

          <Link to={"/components/footer"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/footer"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Footer </span>
            </div>
          </Link>

          {/* Divider */}
          <div
            className="mb-3 border-b border-gray-200"
            style={{ marginRight: "50px" }}
          ></div>
          {/* End Divider */}

          <div className="flex items-center gap-2 mb-3">
            <svg className="w-6 h-6 stroke-current stroke-2 text-primary fill-none">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>

            <span className="font-bold opacity-50">Components</span>
          </div>

          <Link to={"/components/navbar"} className="">
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/navbar"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Navbar </span>
            </div>
          </Link>

          <Link to={"/components/alert"} className="">
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/alert"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Alert </span>
            </div>
          </Link>
          <Link to={"/components/badge"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/badge"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Badge </span>
            </div>
          </Link>
          <Link to={"/components/button"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/button"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Button </span>
            </div>
          </Link>

          <Link to={"/components/card"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/card"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Card </span>
            </div>
          </Link>

          <Link to={"/components/progress"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/progress"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Progress </span>
            </div>
          </Link>

          <Link to={"/components/dropdown"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/dropdown"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Dropdown </span>
            </div>
          </Link>

          <Link to={"/components/table"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/table"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Table </span>
            </div>
          </Link>

          <Link to={"/components/table"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/modal"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Modal </span>
              <span className="badge badge-primary">Cooming Soon</span>
            </div>
          </Link>

          {/* Divider */}
          <div
            className="mb-3 border-b border-gray-200"
            style={{ marginRight: "50px" }}
          ></div>
          {/* End Divider */}

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
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Text Input </span>
            </div>
          </Link>

          <Link to={"/components/select"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/select"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
              }`}
            >
              <span> Select </span>
            </div>
          </Link>

          <Link to={"/components/toggle"}>
            <div
              className={`w-56 rounded-lg p-2 hover:bg-slate-200 transition duration-150  ${
                stateUrl == "/components/toggle"
                  ? "bg-neutral text-white hover:bg-neutral "
                  : "bg-transparent"
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

export default Sidebar;
